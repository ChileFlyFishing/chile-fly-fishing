import * as THREE from 'three';

export class WaterSceneController {
  private container: HTMLElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private geometry: THREE.PlaneGeometry;
  private material: THREE.ShaderMaterial;
  private mesh: THREE.Mesh;
  private animationId: number = 0;
  private clock: THREE.Clock;

  constructor(container: HTMLElement) {
    this.container = container;
    this.clock = new THREE.Clock();

    // 1. ESCENA Y CÁMARA
    this.scene = new THREE.Scene();
    
    this.camera = new THREE.PerspectiveCamera(
      45, 
      container.clientWidth / container.clientHeight, 
      0.1, 
      100
    );
    this.camera.position.set(0, -3, 3);
    this.camera.lookAt(0, 0, 0);

    // 2. RENDERIZADOR (Alpha: true para fundirse con el fondo carbón)
    this.renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    container.appendChild(this.renderer.domElement);

    // 3. GEOMETRÍA Y SHADER (La topografía matemática del río)
    this.geometry = new THREE.PlaneGeometry(20, 20, 100, 100);

    this.material = new THREE.ShaderMaterial({
      wireframe: true,
      transparent: true,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('#FFFFFF') },
        uOpacity: { value: 0.12 }
      },
      vertexShader: `
        uniform float uTime;
        varying float vElevation;
        
        void main() {
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
          
          float elevation = sin(modelPosition.x * 1.5 + uTime * 0.5) * 0.2;
          elevation += sin(modelPosition.y * 1.0 + uTime * 0.3) * 0.2;
          
          modelPosition.z += elevation;
          vElevation = elevation;
          
          vec4 viewPosition = viewMatrix * modelPosition;
          gl_Position = projectionMatrix * viewPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        uniform float uOpacity;
        varying float vElevation;
        
        void main() {
          float dynamicOpacity = uOpacity + (vElevation * 0.1);
          gl_FragColor = vec4(uColor, dynamicOpacity);
        }
      `
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.rotation.x = -Math.PI / 2;
    this.scene.add(this.mesh);

    window.addEventListener('resize', this.onResize);
    this.renderLoop();
  }

  private renderLoop = () => {
    const elapsedTime = this.clock.getElapsedTime();
    this.material.uniforms.uTime.value = elapsedTime;
    this.mesh.rotation.z = elapsedTime * 0.02;

    this.renderer.render(this.scene, this.camera);
    this.animationId = requestAnimationFrame(this.renderLoop);
  };

  private onResize = () => {
    if (!this.container) return;
    this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
  };

  // LIMPIEZA ABSOLUTA DE MEMORIA GPU
  public dispose = () => {
    window.removeEventListener('resize', this.onResize);
    cancelAnimationFrame(this.animationId);
    this.geometry.dispose();
    this.material.dispose();
    this.renderer.dispose();
    if (this.container && this.renderer.domElement.parentNode === this.container) {
      this.container.removeChild(this.renderer.domElement);
    }
  };
}