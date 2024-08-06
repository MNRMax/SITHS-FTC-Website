<script setup>
import { ref, onMounted } from 'vue';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const target = ref();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(screen.width, screen.height);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
// console.log(pinecone)
onMounted(() => {
  target.value.appendChild(renderer.domElement);
  animate();
});

console.log([])
const loader = new GLTFLoader();

loader.load( '@/assets/media/pinecone.glb', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );
</script>

<template>
  <div ref="target" id="potato"></div>
</template>

<style scoped>

#potato{
    position: fixed;
    height: 100%;
    width: 100%;
    top:0;
    left:0;
    z-index: -10000;
    background-color: aqua;
}
</style>
