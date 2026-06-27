import * as THREE from 'three'
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
 * 过程化粒子流场：无任何外部模型，几何与运动全在 shader 里生成。
 * 主题「工程师的信号」——粒子如数据流，少数橙色粒子聚成信号束。
 *
 * 对外只需 setScroll / setMouse / dispose。
 */
export class Experience {
  private renderer: THREE.WebGLRenderer
  private scene: THREE.Scene
  private camera: THREE.PerspectiveCamera
  private points: THREE.Points
  private material: THREE.ShaderMaterial
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
    this.renderer.setClearColor(0x0d0d1a, 0)

    this.scene = new THREE.Scene()
    this.scene.fog = new THREE.FogExp2(0x0d0d1a, 0.012)

    this.camera = new THREE.PerspectiveCamera(60, 1, 0.1, 200)
    this.camera.position.set(0, 0, 18)

    const { geometry, material } = this.buildParticles()
    this.points = new THREE.Points(geometry, material)
    this.material = material
    this.scene.add(this.points)

    this.resize()
    window.addEventListener('resize', this.resize)

    // reduced-motion：不推进时间，渲染一帧静态星空即停；否则持续 rAF
    if (this.opts.reducedMotion) {
      this.renderOnce()
    } else {
      this.loop()
    }
  }

  /** 粒子系统：初始位置 + 大小 + 信号束权重 */
  private buildParticles() {
    const count = this.opts.isMobile ? 12000 : this.opts.reducedMotion ? 6000 : 30000

    const positions = new Float32Array(count * 3)
    const scales = new Float32Array(count)
    const signals = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      // 椭球盘状分布：xy 大、z 薄，流场有平面方向感
      const r = Math.pow(Math.random(), 0.6) * 22
      const theta = Math.random() * Math.PI * 2
      const x = Math.cos(theta) * r * 1.1
      const y = (Math.random() - 0.5) * 16
      const z = Math.sin(theta) * r * 1.1 - 6
      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      scales[i] = 0.4 + Math.random() * 1.4

      // ~6% 粒子为「信号束」：集中在一条斜带，形成穿越时可见的橙色光流
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

  private resize = () => {
    const w = window.innerWidth
    const h = window.innerHeight
    this.renderer.setSize(w, h, false)
    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
  }

  private renderOnce() {
    this.renderer.render(this.scene, this.camera)
  }

  private loop = () => {
    const t = this.clock.getElapsedTime()

    // lerp 平滑 scroll 与 mouse，消除抖动
    this.scroll += (this.scrollTarget - this.scroll) * 0.08
    this.mouse.lerp(this.mouseTarget, 0.06)

    const u = this.material.uniforms
    u.uTime.value = t
    u.uScroll.value = this.scroll
    u.uMouse.value.copy(this.mouse)

    // 相机随滚动轻微推进 + 鼠标视差
    this.camera.position.z = 18 - this.scroll * 14
    this.camera.position.x = this.mouse.x * 1.5
    this.camera.position.y = this.mouse.y * 1.2
    this.camera.lookAt(0, 0, 0)

    this.renderer.render(this.scene, this.camera)
    this.raf = requestAnimationFrame(this.loop)
  }

  setScroll(p: number) {
    this.scrollTarget = Math.max(0, Math.min(1, p))
  }

  setMouse(x: number, y: number) {
    this.mouseTarget.set(x, y)
  }

  dispose() {
    cancelAnimationFrame(this.raf)
    window.removeEventListener('resize', this.resize)
    this.points.geometry.dispose()
    this.material.dispose()
    this.renderer.dispose()
  }
}
