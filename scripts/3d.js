

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FlyControls } from 'three/addons/controls/FlyControls.js';



let rotationEnabled = false;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 100, 1, 0.0001, 300 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( 800, 800 );
renderer.setClearColor("black")
document.querySelector('.render').appendChild( renderer.domElement );

const image = new Image()
const texture = new THREE.Texture(image)
image.addEventListener('load', () =>
{
    texture.needsUpdate = true
})
image.src = "../earth.jpg"

const geometry = new THREE.CapsuleGeometry( 3.5, 0, 32, 64 ); 
const material = new THREE.MeshBasicMaterial( { map: texture, reflectivity: 0, color: "white" } );
const cube = new THREE.Mesh( geometry, material );

scene.add( cube );

const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
scene.add( directionalLight );

camera.position.z =5.56;

const controls = new OrbitControls( camera, renderer.domElement );


controls.enableZoom = false;
controls.enablePan = false
controls.maxZoom = 1.1;


//controls.update() must be called after any manual changes to the camera's transform
controls.update();

function animate() {
	requestAnimationFrame( animate );
	// required if controls.enableDamping or controls.autoRotate are set to true
	controls.update();

	renderer.render( scene, camera );
}

animate();

