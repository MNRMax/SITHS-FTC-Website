<template>

</template>

<script setup>
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { onMounted } from 'vue';
import { ref } from 'vue';
let what = 0

onMounted(() => {
 let page = document.getElementById("p3left")
 let potato = ref(document.getElementById("p3left").offsetWidth)


const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true});
renderer.outputColorSpace = THREE.SRGBColorSpace;

renderer.setSize(((document.getElementById("p3left").getBoundingClientRect().width) - what), window.innerHeight);
renderer.setClearColor( 0x000000, 0 );
renderer.setPixelRatio(window.devicePixelRatio);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

page.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(70, (document.getElementById("p3left").getBoundingClientRect().width) / window.innerHeight, 1, 1000);
camera.position.set(0, 0, 0)

const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.enablePan = false;
controls.minDistance = 5;
controls.maxDistance = 25;
controls.minPolarAngle = 0.5;
controls.autoRotateSpeed = .4
controls.maxPolarAngle = 1.5;
controls.autoRotate = true;
controls.target = new THREE.Vector3(0, 1, 0);
controls.update();

const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
groundGeometry.rotateX(-Math.PI / 2);

// const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
// groundMesh.castShadow = false;
// groundMesh.receiveShadow = true;
// scene.add(groundMesh);

const directionalLight = new THREE.DirectionalLight( 0xffffff, 1);

const alight = new THREE.AmbientLight( 0xffffff, 1 ); 




const light = new THREE.PointLight( 0xffffff, .1  , 100 );
light.position.set(-.15, 1.5, -.23 );

const light2 = new THREE.PointLight( 0xffffff, .1  , 100 );
light2.position.set(-.25, 1.1, -.23 );
const lightHelper = new THREE.PointLightHelper(light)
scene.add( light ,alight, directionalLight, lightHelper);


const loader = new GLTFLoader()
// loader.load('./adamHead/adamHead.gltf', (gltf) => {
  // loader.load('./bot.gltf', (gltf) => {
loader.load('./adamHead/adamHead.gltf', (gltf) => {
  console.log('loading model');
  const mesh = gltf.scene;
  

  mesh.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = false;
      child.receiveShadow = false;
      child
    }
  });
  // mesh.rotation.x = .1;
  mesh.position.set(0, 1.05, 0);
  scene.add(mesh);

  
}, (xhr) => {
  console.log(`loading ${xhr.loaded / xhr.total * 100}%`);
}, (error) => {
  console.error(error);
});

window.addEventListener('resize', () => {
  console.log(document.getElementById("p3left").getBoundingClientRect().width)
  camera.aspect = (document.getElementById("p3left").getBoundingClientRect().width) / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize((document.getElementById("p3left").getBoundingClientRect().width), window.innerHeight);
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
#canvas{
border: 2px black solid;
width: 50%;
}
</style>