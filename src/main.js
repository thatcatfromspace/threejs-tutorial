import * as THREE from "three";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xdddddd); 

// Set up camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 5); 

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const points = [
  new THREE.Vector3(-1, 0, 0),
  new THREE.Vector3(1, 1, 0),
];

const geometry = new THREE.BufferGeometry().setFromPoints(points);
const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
const line = new THREE.Line(geometry, material);
scene.add(line);

// Render loop 
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
