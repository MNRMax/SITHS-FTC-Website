<template>
    <div id="progress-container" class="alert">
      <div id="progress">Engaging Hyperdrive...</div>
    </div>
</template>

<script setup>
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { onMounted } from 'vue';
onMounted(() => {
 let page = document.getElementById("page3")
console.log(page)

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true});
renderer.outputColorSpace = THREE.SRGBColorSpace;

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor( 0x00ff00, 0 );
renderer.setPixelRatio(window.devicePixelRatio);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

page.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(4, 5, 11);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 5;
controls.maxDistance = 20;
controls.minPolarAngle = 0.5;
controls.autoRotateSpeed = 2.0
controls.maxPolarAngle = 1.5;
controls.autoRotate = true;
controls.target = new THREE.Vector3(0, 1, 0);
controls.update();

const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
groundGeometry.rotateX(-Math.PI / 2);
const groundMaterial = new THREE.MeshStandardMaterial({
  color: 0x555555,
  side: THREE.DoubleSide
});
// const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
// groundMesh.castShadow = false;
// groundMesh.receiveShadow = true;
// scene.add(groundMesh);

const directionalLight = new THREE.DirectionalLight( 0xffffff, 1);
scene.add( directionalLight );

const loader = new GLTFLoader()
loader.load('./adamHead/adamHead.gltf', (gltf) => {
  console.log('loading model');
  const mesh = gltf.scene;

  mesh.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = false;
      child.receiveShadow = false;
    }
  });

  mesh.position.set(0, 1.05, -1);
  scene.add(mesh);

  document.getElementById('progress-container').style.display = 'none';
}, (xhr) => {
  console.log(`loading ${xhr.loaded / xhr.total * 100}%`);
}, (error) => {
  console.error(error);
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();
})
</script>



<style lang="css" scoped>
#scene{
  background-color: aqua;
  height: 100%;
  width: 100%;;  
}
</style>