import * as THREE from 'three'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js'

interface ExperienceOptions {
  reducedMotion: boolean
  isMobile: boolean
}

interface CrystalData {
  spin: THREE.Vector3
  base: THREE.Vector3
  isSignal: boolean
  parallax: number // 视差系数：近大远小，滚动时近的快、远的慢
}

/**
 * Three.js 3D 主控
 *
 * 凤凰粉白：过程化水晶体（IcosahedronGeometry + MeshPhysicalMaterial 透射）
 * + Bloom 辉光后处理 + 远处微尘补气韵。大小悬殊成节奏，滚动视差穿越。
 * 全部过程化生成，无外部模型（守铁律6）。
 *
 * 对外只需 setScroll / setMouse / dispose。
 */
export class Experience {
  private renderer: THREE.WebGLRenderer
  private scene: THREE.Scene
  private camera: THREE.PerspectiveCamera
  private crystals: THREE.Mesh[] = []
  private dust: THREE.Points | null = null
  private pmrem: THREE.PMREMGenerator
  private composer: EffectComposer
  private bloom: UnrealBloomPass
  private clock = new THREE.Clock()
  private raf = 0
  private opts: ExperienceOptions

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
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 1.1

    this.scene = new THREE.Scene()
    this.scene.fog = new THREE.FogExp2(0x0a0e1f, 0.005)

    this.camera = new THREE.PerspectiveCamera(60, 1, 0.1, 200)
    this.camera.position.set(0, 0, 18)

    // 程序化环境光（守铁律6）：transmission 必须有 envMap 才能折射
    this.pmrem = new THREE.PMREMGenerator(this.renderer)
    const envMap = this.pmrem.fromScene(new RoomEnvironment(), 0.04).texture
    this.scene.environment = envMap

    this.buildCrystals()
    this.buildDust()

    // 后处理：Bloom 让水晶边缘 + 信号晶体发光（凤凰水晶的辉光感核心）
    this.composer = new EffectComposer(this.renderer)
    this.composer.addPass(new RenderPass(this.scene, this.camera))
    this.bloom = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.55, // strength：温和，不过曝
      0.8, // radius
      0.25 // threshold：只让高亮部分发光
    )
    this.composer.addPass(this.bloom)
    this.composer.addPass(new OutputPass())

    this.resize()
    window.addEventListener('resize', this.resize)

    if (this.opts.reducedMotion) {
      this.renderOnce()
    } else {
      this.loop()
    }
  }

  /** 过程化水晶体：大小悬殊成节奏，滚动视差穿越 */
  private buildCrystals() {
    const count = this.opts.isMobile ? 6 : 8

    const tints = [
      new THREE.Color('#eabdf6'),
      new THREE.Color('#fdebfd'),
      new THREE.Color('#ffffff'),
      new THREE.Color('#cdbfe8'),
      new THREE.Color('#ffffff'),
    ]

    for (let i = 0; i < count; i++) {
      // 大小悬殊：前 2 个大主体（1.6-2.2），其余小点缀（0.5-1.0）
      const isHero = i < 2
      const radius = isHero ? 1.6 + Math.random() * 0.6 : 0.5 + Math.random() * 0.5
      const detail = isHero ? 1 : 0
      const geo = new THREE.IcosahedronGeometry(radius, detail)

      const isSignal = i === count - 1
      const tint = isSignal ? new THREE.Color('#fb5959') : tints[i % tints.length]

      const mat = new THREE.MeshPhysicalMaterial({
        color: tint,
        metalness: 0,
        roughness: 0.04 + Math.random() * 0.1,
        transmission: 0.94,
        ior: 1.5,
        thickness: 1.4 + Math.random() * 0.8,
        attenuationColor: tint,
        attenuationDistance: 3.5,
        envMapIntensity: 1.4,
        iridescence: 0.45 + Math.random() * 0.3,
        iridescenceIOR: 1.3,
        clearcoat: 1,
        clearcoatRoughness: 0.08,
        transparent: true,
        side: THREE.DoubleSide,
      })

      const mesh = new THREE.Mesh(geo, mat)
      // 大水晶居中靠前，小水晶散布远近
      mesh.position.set(
        isHero ? (i === 0 ? -3.5 : 3.5) + (Math.random() - 0.5) * 1.5 : (Math.random() - 0.5) * 14,
        isHero ? (Math.random() - 0.5) * 2 : (Math.random() - 0.5) * 9,
        isHero ? -2 - i * 1.5 : -3 - i * 3.2 - Math.random() * 2
      )
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      )

      const spin = new THREE.Vector3(
        (Math.random() - 0.5) * 0.25,
        (Math.random() - 0.5) * 0.25,
        (Math.random() - 0.5) * 0.25
      )
      // 视差：近的（z 大）滚动快，远的（z 小）慢
      const parallax = 0.6 + (mesh.position.z + 30) * 0.02

      mesh.userData = {
        spin,
        base: mesh.position.clone(),
        isSignal,
        parallax,
      } as CrystalData

      this.crystals.push(mesh)
      this.scene.add(mesh)
    }
  }

  /** 远处微尘：水晶周围细微闪烁尘点，补纵深气韵（不抢戏，非满天粒子） */
  private buildDust() {
    const count = this.opts.isMobile ? 300 : 600
    const positions = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      // 散布在水晶场范围内，z 纵深拉长
      positions[i * 3] = (Math.random() - 0.5) * 30
      positions[i * 3 + 1] = (Math.random() - 0.5) * 18
      positions[i * 3 + 2] = -2 - Math.random() * 35
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const mat = new THREE.PointsMaterial({
      size: 0.08,
      color: 0xeabdf6,
      transparent: true,
      opacity: 0.55,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })

    this.dust = new THREE.Points(geo, mat)
    this.scene.add(this.dust)
  }

  private resize = () => {
    const w = window.innerWidth
    const h = window.innerHeight
    this.renderer.setSize(w, h, false)
    this.composer.setSize(w, h)
    this.bloom.setSize(w, h)
    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
    if (this.opts.reducedMotion) this.renderOnce()
  }

  private renderOnce() {
    this.composer.render()
  }

  private loop = () => {
    const t = this.clock.getElapsedTime()

    this.scroll += (this.scrollTarget - this.scroll) * 0.08
    this.mouse.lerp(this.mouseTarget, 0.06)

    this.camera.position.z = 18 - this.scroll * 14
    this.camera.position.x = this.mouse.x * 1.5
    this.camera.position.y = this.mouse.y * 1.2
    this.camera.lookAt(0, 0, 0)

    for (const c of this.crystals) {
      const ud = c.userData as CrystalData
      // 漂移幅度加大 + 呼吸缩放（节奏感）
      c.position.x = ud.base.x + Math.sin(t * 0.4 + ud.base.z) * 1.6
      c.position.y = ud.base.y + Math.cos(t * 0.3 + ud.base.x) * 1.3
      c.position.z = ud.base.z + this.scroll * 26 * ud.parallax
      const breath = 1 + Math.sin(t * 0.8 + ud.base.x * 2) * 0.06
      c.scale.setScalar(breath)
      c.rotation.x += ud.spin.x * 0.012
      c.rotation.y += ud.spin.y * 0.012
      c.rotation.z += ud.spin.z * 0.012
      if (ud.isSignal) {
        const mat = c.material as THREE.MeshPhysicalMaterial
        const p = 0.85 + Math.sin(t * 1.6 + ud.base.z) * 0.15
        mat.emissiveIntensity = p
        mat.emissive = new THREE.Color('#fb5959').multiplyScalar(p * 0.5)
      }
    }

    // 微尘缓慢漂移
    if (this.dust) {
      this.dust.rotation.y = t * 0.02
      this.dust.position.z = this.scroll * 10
    }

    this.composer.render()
    this.raf = requestAnimationFrame(this.loop)
  }

  setScroll(p: number) {
    this.scrollTarget = Math.max(0, Math.min(1, p))
  }

  resetScroll() {
    this.scroll = 0
    this.scrollTarget = 0
    this.camera.position.z = 18
    for (const c of this.crystals) {
      const ud = c.userData as CrystalData
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
    for (const c of this.crystals) {
      c.geometry.dispose()
      ;(c.material as THREE.Material).dispose()
    }
    if (this.dust) {
      this.dust.geometry.dispose()
      ;(this.dust.material as THREE.Material).dispose()
    }
    this.composer.dispose()
    this.pmrem.dispose()
    this.renderer.dispose()
  }
}
