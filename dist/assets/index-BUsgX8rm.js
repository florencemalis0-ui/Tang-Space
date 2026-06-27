var _=Object.defineProperty;var z=(i,s,t)=>s in i?_(i,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[s]=t;var r=(i,s,t)=>z(i,typeof s!="symbol"?s+"":s,t);import{r as m,j as e,u as b,L as f}from"./index-DpGoiUoC.js";import{C as j,V as u,W as S,S as N,F as T,P as M,a as E,B as k,b as x,c as A,A as C}from"./three-VgEM87xD.js";const L="_avatar_8oa8h_1",P="_imgWrap_8oa8h_30",R="_img_8oa8h_30",U="_fallback_8oa8h_48",V="_overlay_8oa8h_61",I="_overlayText_8oa8h_81",D="_overlayYear_8oa8h_88",h={avatar:L,imgWrap:P,img:R,fallback:U,overlay:V,overlayText:I,overlayYear:D};function W({onClick:i}){const s=m.useRef(null),[t,o]=m.useState(!1),[a,c]=m.useState(!1),d=()=>{var p;(p=s.current)==null||p.classList.add("show"),o(!0)},n=()=>{c(!0),o(!0)},l=`https://avatars.githubusercontent.com/florencemalis0-ui?t=${Math.floor(Date.now()/864e5)}`;return e.jsxs("button",{className:h.avatar,onClick:i,"aria-label":"点击查看微信二维码",children:[e.jsx("div",{className:h.imgWrap,children:a?e.jsx("div",{className:h.fallback,"aria-hidden":"true",children:"T"}):e.jsx("img",{ref:s,src:l,alt:"TangTang",className:`js-avatar ${h.img}`,onLoad:d,onError:n})}),e.jsxs("div",{className:h.overlay,style:{visibility:t?"visible":"hidden"},children:[e.jsx("span",{className:h.overlayText,children:"Be Brave"}),e.jsx("span",{className:h.overlayYear,children:"2026 · 向前"})]})]})}const F=[{to:"/",label:"首页"},{to:"/notes",label:"记录"},{to:"/resume",label:"简历"},{to:"/about",label:"关于"}];function B(){const i=b(),[s,t]=m.useState(!1);return e.jsxs("nav",{className:"nav-root iUp",children:[e.jsx("button",{className:"mobile-toggle",onClick:()=>t(o=>!o),"aria-label":"切换菜单","aria-expanded":s,"aria-controls":"primary-nav",children:s?"✕":"☰"}),e.jsx("ul",{id:"primary-nav",className:`nav-list${s?" visible":""}`,children:F.map(({to:o,label:a})=>{const c=o==="/"?i.pathname==="/":i.pathname.startsWith(o);return e.jsx("li",{children:e.jsx(f,{to:o,className:`nav-link${c?" nav-link-active":""}`,onClick:()=>t(!1),children:a})},o)})})]})}function G(){const[i,s]=m.useState({hitokoto:"如何得与凉风约, 不共尘沙一并来!",from:"中牟道中"});return m.useEffect(()=>{const t=new AbortController,o=setTimeout(()=>t.abort(),5e3);return fetch("https://v1.hitokoto.cn",{signal:t.signal}).then(a=>a.json()).then(a=>{a.hitokoto&&a.from&&s({hitokoto:a.hitokoto,from:a.from})}).catch(()=>{}).finally(()=>clearTimeout(o)),()=>{clearTimeout(o),t.abort()}},[]),i}const H=300,Y=150;function q(i){m.useEffect(()=>{const s=i.current;if(!s)return;const t=[],o=setTimeout(()=>{const a=s.querySelectorAll(".iUp");let c=0;a.forEach(d=>{const n=setTimeout(()=>{d.classList.add("up")},c);t.push(n),c+=Y})},H);return()=>{clearTimeout(o),t.forEach(clearTimeout)}},[])}const O=`
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
float snoise(vec3 v){
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
  i = mod(i, 289.0);
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 1.0/7.0;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z *ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}
`,$=`
vec3 snoiseVec3(vec3 x){
  float s  = snoise(x);
  float s1 = snoise(vec3(x.y - 19.1, x.z + 33.4, x.x + 47.2));
  float s2 = snoise(vec3(x.z + 74.2, x.x - 124.5, x.y + 99.4));
  return vec3(s, s1, s2);
}
vec3 curlNoise(vec3 p){
  const float e = 0.1;
  vec3 dx = vec3(e, 0.0, 0.0);
  vec3 dy = vec3(0.0, e, 0.0);
  vec3 dz = vec3(0.0, 0.0, e);
  vec3 p_x0 = snoiseVec3(p - dx);
  vec3 p_x1 = snoiseVec3(p + dx);
  vec3 p_y0 = snoiseVec3(p - dy);
  vec3 p_y1 = snoiseVec3(p + dy);
  vec3 p_z0 = snoiseVec3(p - dz);
  vec3 p_z1 = snoiseVec3(p + dz);
  float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;
  float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;
  float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;
  const float divisor = 1.0 / (2.0 * e);
  return normalize(vec3(x, y, z) * divisor);
}
`,K=`
attribute vec3 aSeed;
attribute float aScale;
attribute float aSignal; // 0..1，越大越靠近「信号束」（橙色）
uniform float uTime;
uniform float uScroll;   // 滚动进度 0..1
uniform vec2 uMouse;      // 鼠标 -1..1
uniform float uSize;
uniform float uPixelRatio;
varying float vSignal;
varying float vDepth;

void main(){
  vSignal = aSignal;
  vec3 pos = aSeed;

  // curl 流场：让粒子沿无散度方向流动，时间滚动演化
  vec3 flow = curlNoise(pos * 0.18 + vec3(0.0, 0.0, uTime * 0.04));
  pos += flow * (3.0 + uScroll * 6.0);

  // 相机推进感：滚动越深，粒子场整体后退，营造穿越纵深
  pos.z += uScroll * 26.0;

  // 轻微整体呼吸
  pos.xy += sin(uTime * 0.3 + aSeed.z * 2.0) * 0.4;

  vec4 mv = modelViewMatrix * vec4(pos, 1.0);

  // 鼠标视差：相机方向偏移
  mv.xyz += vec3(uMouse * 1.2, 0.0);

  vDepth = -mv.z;
  gl_Position = projectionMatrix * mv;

  // 透视缩放 + 距离衰减
  float ps = aScale * uSize * uPixelRatio * (300.0 / -mv.z);
  gl_PointSize = clamp(ps, 0.5, 18.0);
}
`,X=`
precision highp float;
varying float vSignal;
varying float vDepth;

void main(){
  // 圆形软粒子
  vec2 uv = gl_PointCoord - 0.5;
  float d = length(uv);
  if (d > 0.5) discard;
  float core = smoothstep(0.5, 0.0, d);
  float glow = pow(core, 2.5);

  // 主体冷白→淡蓝，信号束粒子向橙过渡（One Signal：橙集中）
  vec3 cool = mix(vec3(0.78, 0.86, 1.0), vec3(1.0), core);
  vec3 signal = vec3(1.0, 0.29, 0.02); // #ff4906
  vec3 col = mix(cool, signal, vSignal * 0.85);

  // 深处衰减
  float fade = clamp(1.0 - vDepth / 80.0, 0.0, 1.0);
  float alpha = glow * (0.55 + vSignal * 0.4) * fade;

  gl_FragColor = vec4(col, alpha);
}
`;class J{constructor(s,t){r(this,"renderer");r(this,"scene");r(this,"camera");r(this,"points");r(this,"material");r(this,"clock",new j);r(this,"raf",0);r(this,"opts");r(this,"scroll",0);r(this,"scrollTarget",0);r(this,"mouse",new u(0,0));r(this,"mouseTarget",new u(0,0));r(this,"resize",()=>{const s=window.innerWidth,t=window.innerHeight;this.renderer.setSize(s,t,!1),this.camera.aspect=s/t,this.camera.updateProjectionMatrix()});r(this,"loop",()=>{const s=this.clock.getElapsedTime();this.scroll+=(this.scrollTarget-this.scroll)*.08,this.mouse.lerp(this.mouseTarget,.06);const t=this.material.uniforms;t.uTime.value=s,t.uScroll.value=this.scroll,t.uMouse.value.copy(this.mouse),this.camera.position.z=18-this.scroll*14,this.camera.position.x=this.mouse.x*1.5,this.camera.position.y=this.mouse.y*1.2,this.camera.lookAt(0,0,0),this.renderer.render(this.scene,this.camera),this.raf=requestAnimationFrame(this.loop)});this.opts=t,this.renderer=new S({canvas:s,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(855322,0),this.scene=new N,this.scene.fog=new T(855322,.012),this.camera=new M(60,1,.1,200),this.camera.position.set(0,0,18);const{geometry:o,material:a}=this.buildParticles();this.points=new E(o,a),this.material=a,this.scene.add(this.points),this.resize(),window.addEventListener("resize",this.resize),this.opts.reducedMotion?this.renderOnce():this.loop()}buildParticles(){const s=this.opts.isMobile?12e3:this.opts.reducedMotion?6e3:3e4,t=new Float32Array(s*3),o=new Float32Array(s),a=new Float32Array(s);for(let n=0;n<s;n++){const v=Math.pow(Math.random(),.6)*22,l=Math.random()*Math.PI*2,p=Math.cos(l)*v*1.1,g=(Math.random()-.5)*16,y=Math.sin(l)*v*1.1-6;t[n*3]=p,t[n*3+1]=g,t[n*3+2]=y,o[n]=.4+Math.random()*1.4;const w=Math.abs(g-p*.3+3)<2.2&&Math.random()<.06;a[n]=w?.7+Math.random()*.3:Math.random()*.04}const c=new k;c.setAttribute("position",new x(t,3)),c.setAttribute("aSeed",new x(t.slice(),3)),c.setAttribute("aScale",new x(o,1)),c.setAttribute("aSignal",new x(a,1));const d=new A({vertexShader:O+$+K,fragmentShader:X,uniforms:{uTime:{value:0},uScroll:{value:0},uMouse:{value:new u(0,0)},uSize:{value:this.opts.isMobile?1.6:1.2},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)}},transparent:!0,depthWrite:!1,blending:C});return{geometry:c,material:d}}renderOnce(){this.renderer.render(this.scene,this.camera)}setScroll(s){this.scrollTarget=Math.max(0,Math.min(1,s))}setMouse(s,t){this.mouseTarget.set(s,t)}dispose(){cancelAnimationFrame(this.raf),window.removeEventListener("resize",this.resize),this.points.geometry.dispose(),this.material.dispose(),this.renderer.dispose()}}function Q(i){const s=m.useRef(null);m.useEffect(()=>{const t=i.current;if(!t)return;const o=l=>window.matchMedia(l).matches,a=o("(prefers-reduced-motion: reduce)"),c=o("(max-width: 768px)")||o("(pointer: coarse)"),d=new J(t,{reducedMotion:a,isMobile:c});s.current=d;const n=()=>{const l=document.body.scrollHeight-window.innerHeight;if(l<=0){d.setScroll(0);return}d.setScroll(window.scrollY/l)},v=l=>{d.setMouse(l.clientX/window.innerWidth*2-1,-(l.clientY/window.innerHeight*2-1))};return window.addEventListener("scroll",n,{passive:!0}),window.addEventListener("mousemove",v,{passive:!0}),n(),()=>{window.removeEventListener("scroll",n),window.removeEventListener("mousemove",v),d.dispose(),s.current=null}},[i])}const Z=["Go","Python","AI/ML","Cloud Native","Backend","快手"],ee=[{to:"/notes",label:"记录",desc:"技术与生活的痕迹"},{to:"/resume",label:"简历",desc:"经历与能力"},{to:"/about",label:"关于",desc:"这个站点和我"}];function oe(){const i=m.useRef(null),s=m.useRef(null),{hitokoto:t,from:o}=G();return Q(i),q(s),e.jsxs("div",{className:"home-root",children:[e.jsx("canvas",{ref:i,className:"home-canvas","aria-hidden":"true"}),e.jsxs("header",{className:"home-header",children:[e.jsx(f,{to:"/",className:"home-logo",children:"TangTang"}),e.jsx(B,{})]}),e.jsxs("div",{ref:s,className:"home-content",children:[e.jsxs("section",{className:"hero",children:[e.jsx("p",{className:"hero-kicker iUp",children:"TangTang · Kuaishou Engineer"}),e.jsx("h1",{className:"hero-name iUp",children:"TangTang"}),e.jsxs("p",{className:"hero-hitokoto iUp",children:[t,e.jsxs("strong",{children:["—「",o,"」"]})]}),e.jsx("div",{className:"hero-scroll-hint iUp",children:e.jsx("span",{children:"Scroll to explore"})})]}),e.jsx("section",{className:"signal",children:e.jsxs("div",{className:"signal__inner",children:[e.jsx("span",{className:"signal__label iUp",children:"01 — Signal"}),e.jsx("h2",{className:"signal__title iUp",children:"工程师的信号"}),e.jsx("p",{className:"signal__desc iUp",children:"这个站点是一次广播，不是宣传册。暗色背景吸收注意力，把内容推向更深处；每一个元素都因功能与对比赢得位置，而非装饰。"}),e.jsx("p",{className:"signal__desc iUp",children:"现在在快手做工程，关注 AI、后端系统与 GPU 算力。这里会放技术记录，也放生活。"}),e.jsx("div",{className:"hero-tags iUp",children:Z.map(a=>e.jsx("span",{className:"hero-tag",children:a},a))}),e.jsx("div",{className:"signal__avatar iUp",children:e.jsx(W,{onClick:()=>window.dispatchEvent(new CustomEvent("tang:open-wechat"))})})]})}),e.jsxs("section",{className:"nav-gate",children:[e.jsx("span",{className:"signal__label iUp",children:"02 — Explore"}),e.jsx("div",{className:"nav-gate__grid",children:ee.map(a=>e.jsxs(f,{to:a.to,className:"nav-gate__card iUp",children:[e.jsx("span",{className:"nav-gate__label",children:a.label}),e.jsx("span",{className:"nav-gate__desc",children:a.desc})]},a.to))})]}),e.jsx("footer",{className:"home-footer",children:e.jsxs("p",{children:["Made with ♥ by TangTang",e.jsx("button",{type:"button",className:"cmdk-hint",onClick:()=>window.dispatchEvent(new CustomEvent("tang:open-cmdk")),"aria-label":"打开命令面板",children:"⌘K"})]})})]})]})}export{oe as default};
