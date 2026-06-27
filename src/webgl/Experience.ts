import * as THREE from 'three'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'
import {
  simplexNoise,
  curlNoise,
  particleVertex,
  particleFragment,
} from './shaders'

interface ExperienceOptions {
  reducedMotion: boolean
  isMobile: boolean
}

/**
 * Three.js 3D 主控
 *
 * 凤凰粉白：过程化水晶体（IcosahedronGeometry + MeshPhysicalMaterial 透射）
 * 在 curl 流场漂移 + 滚动穿越；粉白粒子作背景氛围。
 * 全部几何与材质过程化生成，无任何外部模型（守铁律6）。
 *
 * 对外只需 setScroll / setMouse / dispose。
 */
export class Experience {
  private renderer: THREE.WebGLRenderer
  private scene: THREE.Scene
  private camera: THREE.PerspectiveCamera
  private points: THREE.Points
  private material: THREE.ShaderMaterial
  private crystals: THREE.Mesh[] = []
  private pmrem: THREE.PMREMGenerator
  private clock = new THREE.Clock()
  private raf = 0
  private opts: ExperienceOptions

  // 平滑后的 scroll/mouse（lerp）
  private scroll = 0
  private scrollTarget = 0
  private mouse = new THREE.Vector2(0, 0)
  private mouseTarget = new THREE.Vector2(0, 0)

  constructor(canvas: HTMLCanvasElement, opts: ExperienceOptions) {
    this.opts = opts

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setClearColor(0x0a0e1f, 0)

    this.scene = new THREE.Scene()
    this.scene.fog = new THREE.FogExp2(0x0a0e1f, 0.014)

    this.camera = new THREE.PerspectiveCamera(60, 1, 0.1, 200)
    this.camera.position.set(0, 0, 18)

    // 程序化环境光（RoomEnvironment + PMREM）：无外部 hdr 文件，守铁律6。
    // transmission 材质必须有 envMap 才能折射，否则水晶呈黑。
    this.pmrem = new THREE.PMREMGenerator(this.renderer)
    const envMap = this.pmrem.fromScene(new RoomEnvironment(), 0.04).texture
    this.scene.environment = envMap

    // 背景粒子流场（氛围）
    const { geometry, material } = this.buildParticles()
    this.points = new THREE.Points(geometry, material)
    this.material = material
    this.scene.add(this.points)

    // 前景水晶体（凤凰感核心）
    this.buildCrystals()

    this.resize()
    window.addEventListener('resize', this.resize)

    // reduced-motion：不推进时间，渲染一帧静态即停；否则持续 rAF
    if (this.opts.reducedMotion) {
      this.renderOnce()
    } else {
      this.loop()
    }
  }

  /** 粒子系统：初始位置 + 大小 + 信号束权重（背景氛围） */
  private buildParticles() {
    const count = this.opts.isMobile ? 9000 : this.opts.reducedMotion ? 5000 : 24000

    const positions = new Float32Array(count * 3)
    const scales = new Float32Array(count)
    const signals = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      const r = Math.pow(Math.random(), 0.6) * 22
      const theta = Math.random() * Math.PI * 2
      const x = Math.cos(theta) * r * 1.1
      const y = (Math.random() - 0.5) * 16
      const z = Math.sin(theta) * r * 1.1 - 6
      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      scales[i] = 0.4 + Math.random() * 1.4

      const inBeam =
        Math.abs(y - x * 0.3 + 3) < 2.2 && Math.random() < 0.06
      signals[i] = inBeam ? 0.7 + Math.random() * 0.3 : Math.random() * 0.04
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('aSeed', new THREE.BufferAttribute(positions.slice(), 3))
    geometry.setAttribute('aScale', new THREE.BufferAttribute(scales, 1))
    geometry.setAttribute('aSignal', new THREE.BufferAttribute(signals, 1))

    const material = new THREE.ShaderMaterial({
      vertexShader: simplexNoise + curlNoise + particleVertex,
      fragmentShader: particleFragment,
      uniforms: {
        uTime: { value: 0 },
        uScroll: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uSize: { value: this.opts.isMobile ? 1.6 : 1.2 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })

    return { geometry, material }
  }

  /**
   * 过程化水晶体：IcosahedronGeometry + MeshPhysicalMaterial 透射玻璃。
   * 不导入外部 glb（守铁律6）。沿 z 轴纵深分布，滚动穿越有遮挡。
   */
  private buildCrystals() {
    const count = this.opts.isMobile ? 7 : this.opts.reducedMotion ? 6 : 11

    // 凤凰配色：主体透射略带粉白，少数玫红/紫作信号点缀
    const tints = [
      new THREE.Color('#eabdf6'), // 淡紫粉
      new THREE.Color('#fdebfd'), // 极淡粉白
      new THREE.Color('#ffffff'), // 纯白
      new THREE.Color('#ffffff'),
      new THREE.Color('#cdbfe8'), // 淡紫
      new THREE.Color('#fb5959'), // 玫红（信号，少数）
    ]

    for (let i = 0; i < count; i++) {
      // 多面体水晶：detail=0 锐利结晶，偶有 detail=1 更复杂
      const detail = Math.random() < 0.3 ? 1 : 0
      const geo = new THREE.IcosahedronGeometry(0.6 + Math.random() * 1.1, detail)

      // 信号色（玫红）只给少数晶体，守 One Signal
      const isSignal = i >= count - 2 && Math.random() < 0.5
      const tint = isSignal ? tints[5] : tints[i % 5]

      const mat = new THREE.MeshPhysicalMaterial({
        color: tint,
        metalness: 0,
        roughness: 0.05 + Math.random() * 0.15,
        transmission: 0.92, // 玻璃透射
        ior: 1.5, // 折射率
        thickness: 1.2 + Math.random() * 0.8, // 体积厚度
        attenuationColor: tint, // 透射色调
        attenuationDistance: 3.5,
        envMapIntensity: 1.2,
        iridescence: 0.35 + Math.random() * 0.35, // 薄膜彩虹光（凤凰水晶特征）
        iridescenceIOR: 1.3,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
        transparent: true,
        side: THREE.DoubleSide,
      })

      const mesh = new THREE.Mesh(geo, mat)
      // 纵深分布：沿 z 散布在相机前方路径上，滚动穿越时依次经过
      mesh.position.set(
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 9,
        -2 - i * 3.2 - Math.random() * 2
      )
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      )
      const s = 0.8 + Math.random() * 0.7
      mesh.scale.setScalar(s)

      // 漂移 + 自转参数（loop 里用）
      const drift = new THREE.Vector3(
        (Math.random() - 0.5) * 0.3,
        (Math.random() - 0.5) * 0.3,
        0
      )
      const spin = new THREE.Vector3(
        (Math.random() - 0.5) * 0.3,
        (Math.random() - 0.5) * 0.3,
        (Math.random() - 0.5) * 0.3
      )
      ;(mesh.userData as { drift: THREE.Vector3; spin: THREE.Vector3; base: THREE.Vector3; isSignal: boolean }) = {
        drift,
        spin,
        base: mesh.position.clone(),
        isSignal,
      }

      this.crystals.push(mesh)
      this.scene.add(mesh)
    }
  }

  private resize = () => {
    const w = window.innerWidth
    const h = window.innerHeight
    this.renderer.setSize(w, h, false)
    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
    if (this.opts.reducedMotion) this.renderOnce()
  }

  private renderOnce() {
    this.renderer.render(this.scene, this.camera)
  }

  private loop = () => {
    const t = this.clock.getElapsedTime()

    // lerp 平滑 scroll 与 mouse
    this.scroll += (this.scrollTarget - this.scroll) * 0.08
    this.mouse.lerp(this.mouseTarget, 0.06)

    const u = this.material.uniforms
    u.uTime.value = t
    u.uScroll.value = this.scroll
    u.uMouse.value.copy(this.mouse)

    // 相机随滚动推进 + 鼠标视差（穿越水晶场）
    this.camera.position.z = 18 - this.scroll * 14
    this.camera.position.x = this.mouse.x * 1.5
    this.camera.position.y = this.mouse.y * 1.2
    this.camera.lookAt(0, 0, 0)

    // 水晶体：漂移 + 自转；信号晶体随时间脉冲发光
    for (const c of this.crystals) {
      const ud = c.userData as { drift: THREE.Vector3; spin: THREE.Vector3; base: THREE.Vector3; isSignal: boolean }
      c.position.x = ud.base.x + Math.sin(t * 0.4 + ud.base.z) * 1.2
      c.position.y = ud.base.y + Math.cos(t * 0.3 + ud.base.x) * 1.0
      // 滚动推进时晶体整体向相机移动（穿越感），超出后回环
      c.position.z = ud.base.z + this.scroll * 26
      c.rotation.x += ud.spin.x * 0.01
      c.rotation.y += ud.spin.y * 0.01
      c.rotation.z += ud.spin.z * 0.01
      if (ud.isSignal) {
        const p = 0.85 + Math.sin(t * 1.6 + ud.base.z) * 0.15
        ;(c.material as THREE.MeshPhysicalMaterial).emissiveIntensity = p
        ;(c.material as THREE.MeshPhysicalMaterial).emissive = new THREE.Color('#fb5959').multiplyScalar(p * 0.3)
      }
    }

    this.renderer.render(this.scene, this.camera)
    this.raf = requestAnimationFrame(this.loop)
  }

  setScroll(p: number) {
    this.scrollTarget = Math.max(0, Math.min(1, p))
  }

  /** 切页时直接复位滚动进度，避免 lerp ~0.5s 相机后拉残影 */
  resetScroll() {
    this.scroll = 0
    this.scrollTarget = 0
    this.material.uniforms.uScroll.value = 0
    this.camera.position.z = 18
    // 晶体 z 复位
    for (const c of this.crystals) {
      const ud = c.userData as { base: THREE.Vector3 }
      c.position.z = ud.base.z
    }
    if (this.opts.reducedMotion) this.renderOnce()
  }

  setMouse(x: number, y: number) {
    this.mouseTarget.set(x, y)
  }

  dispose() {
    cancelAnimationFrame(this.raf)
    window.removeEventListener('resize', this.resize)
    this.points.geometry.dispose()
    this.material.dispose()
    for (const c of this.crystals) {
      c.geometry.dispose()
      ;(c.material as THREE.Material).dispose()
    }
    this.pmrem.dispose()
    this.renderer.dispose()
  }
}
