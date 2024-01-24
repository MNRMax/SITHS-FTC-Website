<script setup>
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { onMounted } from 'vue';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
camera.position.setZ(30);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = true;
controls.enablePan = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 0;
controls.enableDamping = true;
camera.setFocalLength(8)

scene.clear()
scene.add(new THREE.AmbientLight(0xFFFFFF))

const spaceTexture = new THREE.TextureLoader().load('/images/space.jpg')
spaceTexture.colorSpace = THREE.SRGBColorSpace;
scene.background = spaceTexture;

const light = new THREE.DirectionalLight(0xffffff, 2);
light.castShadow = true;

scene.add(light);

for (let i = 0; i < 200; i++) {
    scene.add(addStar())
}

function addStar() {
    const starGeometry = new THREE.SphereGeometry(0.25, 0.25, 0.25);
    const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(starGeometry, starMaterial);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(200));
    star.position.set(x, y, z)
    return star
}

addEventListener("resize", (event) => {
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix();
});



const loader = new STLLoader();

let backRightScrew;
let backLeftScrew;
let frontRightScrew;
let frontLeftScrew;
let backRightWheel;
let backLeftWheel;
let frontRightWheel;
let frontLeftWheel;

let leftFrontIn = false;
let rightFrontIn = false;
let leftBackIn = false;
let rightBackIn = false;

loader.load('/models/body.stl', function (body) {
    const material = new THREE.MeshStandardMaterial({
        color: 0x3474eb,
    })
    const mesh = new THREE.Mesh(body, material)
    mesh.rotateX(-Math.PI / 2)
    mesh.scale.set(0.2, 0.2, 0.2)
    scene.add(mesh)
}, undefined, function (error) {
    console.error(error);
});



//Back Right ---------------------------------------------------------------------
loader.load('/models/screw.stl', function (body) {
    const material = new THREE.MeshStandardMaterial({
        color: 0xfcba03,
    })
    const mesh = new THREE.Mesh(body, material)
    mesh.scale.set(0.2, 0.2, 0.2)
    mesh.rotateY(-Math.PI / 2)
    mesh.position.set(9.5, -1, -10.5)
    backRightScrew = mesh
    scene.add(mesh)
}, undefined, function (error) {
    console.error(error);
});
loader.load('/models/wheel.stl', function (body) {
    const material = new THREE.MeshStandardMaterial({
        color: 0x0,
    })
    const mesh = new THREE.Mesh(body, material)
    mesh.scale.set(0.2, 0.2, 0.2)
    mesh.rotateY(-Math.PI / 2)
    mesh.position.set(4.6, 9, -10.5)
    backRightWheel = mesh
    scene.add(mesh)
}, undefined, function (error) {
    console.error(error);
});

//Front Right ---------------------------------------------------------------------
loader.load('/models/wheel.stl', function (body) {
    const material = new THREE.MeshStandardMaterial({
        color: 0x0,
    })
    const mesh = new THREE.Mesh(body, material)
    mesh.scale.set(0.2, 0.2, 0.2)
    mesh.rotateY(-Math.PI / 2)
    mesh.position.set(4.6, 9, 9.5)
    frontRightWheel = mesh
    scene.add(mesh)
}, undefined, function (error) {
    console.error(error);
});
loader.load('/models/screw.stl', function (body) {
    const material = new THREE.MeshStandardMaterial({
        color: 0xfcba03,
    })
    const mesh = new THREE.Mesh(body, material)
    mesh.scale.set(0.2, 0.2, 0.2)
    mesh.rotateY(-Math.PI / 2)
    mesh.position.set(9.5, -1, 9.5)
    frontRightScrew = mesh
    scene.add(mesh)
}, undefined, function (error) {
    console.error(error);
});

//Front Left ---------------------------------------------------------------------
loader.load('/models/screw.stl', function (body) {
    const material = new THREE.MeshStandardMaterial({
        color: 0xfcba03,
    })
    const mesh = new THREE.Mesh(body, material)
    mesh.scale.set(0.2, 0.2, 0.2)
    mesh.rotateY(Math.PI / 2)
    mesh.position.set(-9.5, -1, 9.6)
    frontLeftScrew = mesh
    scene.add(mesh)
}, undefined, function (error) {
    console.error(error);
});
loader.load('/models/wheel.stl', function (body) {
    const material = new THREE.MeshStandardMaterial({
        color: 0x0,
    })
    const mesh = new THREE.Mesh(body, material)
    mesh.scale.set(0.2, 0.2, 0.2)
    mesh.rotateY(Math.PI / 2)
    mesh.position.set(-4.6, 9, 9.6)
    frontLeftWheel = mesh
    scene.add(mesh)
}, undefined, function (error) {
    console.error(error);
});

//Back Left ---------------------------------------------------------------------
loader.load('/models/screw.stl', function (body) {
    const material = new THREE.MeshStandardMaterial({
        color: 0xfcba03,
    })
    const mesh = new THREE.Mesh(body, material)
    mesh.scale.set(0.2, 0.2, 0.2)
    mesh.rotateY(Math.PI / 2)
    mesh.position.set(-9.5, -1, -10.5)
    backLeftScrew = mesh
    scene.add(mesh)
}, undefined, function (error) {
    console.error(error);
});
loader.load('/models/wheel.stl', function (body) {
    const material = new THREE.MeshStandardMaterial({
        color: 0x0,
    })
    const mesh = new THREE.Mesh(body, material)
    mesh.scale.set(0.2, 0.2, 0.2)
    mesh.rotateY(Math.PI / 2)
    mesh.position.set(-4.6, 9, -10.5)
    backLeftWheel = mesh
    scene.add(mesh)
}, undefined, function (error) {
    console.error(error);
});

onMounted(() => {
    document.getElementById("threejsthing").appendChild(renderer.domElement);
    const canvas = renderer.domElement;
    document.getElementById("threejsthing").addEventListener("mousedown", (event) => {
        const pointer = new THREE.Vector2(event.offsetX, event.offsetY);
        pointer.x = ((event.clientX + canvas.offsetLeft) / canvas.width) * 2 - 1;
        pointer.y = -((event.clientY - canvas.offsetTop) / canvas.height) * 2 + 1;
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(pointer, camera);
        const intersects = raycaster.intersectObjects(scene.children);
        switch (intersects[0].object) {
            case backRightWheel:
            case backRightScrew:
                if (!rightBackIn) {
                    rightBackIn = true;
                    screwBackRight();
                }
                break;
            case backLeftWheel:
            case backLeftScrew:
                if (!leftBackIn) {
                    leftBackIn = true;
                    screwBackLeft();
                }
                break;
            case frontRightWheel:
            case frontRightScrew:
                if (!rightFrontIn) {
                    rightFrontIn = true;
                    screwFrontRight();
                }
                break;
            case frontLeftWheel:
            case frontLeftScrew:
                if (!leftFrontIn) {
                    leftFrontIn = true;
                    screwFrontLeft();
                }
                break;
        }
    })
});

function screwFrontLeft() {
    let i = 0;
    let interval;

    interval = setInterval(() => {
        i++;
        frontLeftWheel.position.y -= 0.1;
        if (i == 100) {
            clearInterval(interval);
            i = 0;
        }
    }, 10)

    setTimeout(() => {
        interval = setInterval(() => {
            i++;
            frontLeftScrew.position.x += 0.05;
            frontLeftScrew.rotateZ(Math.PI / 100)
            if (i == 100) {
                clearInterval(interval);
                i = 0;
            }
        }, 10)
    }, 1000)
}

function screwBackLeft() {
    let i = 0;
    let interval;

    interval = setInterval(() => {
        i++;
        backLeftWheel.position.y -= 0.1;
        if (i == 100) {
            clearInterval(interval);
            i = 0;
        }
    }, 10)

    setTimeout(() => {
        interval = setInterval(() => {
            i++;
            backLeftScrew.position.x += 0.05;
            backLeftScrew.rotateZ(Math.PI / 100)
            if (i == 100) {
                clearInterval(interval);
                i = 0;
            }
        }, 10)
    }, 1000)
}

function screwFrontRight() {
    let i = 0;
    let interval;

    interval = setInterval(() => {
        i++;
        frontRightWheel.position.y -= 0.1;
        if (i == 100) {
            clearInterval(interval);
            i = 0;
        }
    }, 10)

    setTimeout(() => {
        interval = setInterval(() => {
            i++;
            frontRightScrew.position.x -= 0.05;
            frontRightScrew.rotateZ(Math.PI / 100)
            if (i == 100) {
                clearInterval(interval);
                i = 0;
            }
        }, 10)
    }, 1000)
}

function screwBackRight() {
    let i = 0;
    let interval;

    interval = setInterval(() => {
        i++;
        backRightWheel.position.y -= 0.1;
        if (i == 100) {
            clearInterval(interval);
            i = 0;
        }
    }, 10)

    setTimeout(() => {
        interval = setInterval(() => {
            i++;
            backRightScrew.position.x -= 0.05;
            backRightScrew.rotateZ(Math.PI / 100)
            if (i == 100) {
                clearInterval(interval);
                i = 0;
            }
        }, 10)
    }, 1000)
}

function animate() {
    requestAnimationFrame(animate);
    controls.update()
    renderer.render(scene, camera);
}
animate();
</script>

<template>
    <div id="threejsthing" class="bg-white z-[-1] w-[100vw] h-[100vh]">
    </div>
</template>