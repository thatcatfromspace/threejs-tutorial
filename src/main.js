import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// Create a scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xdddddd); // Light gray background

// Set up camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 1, 3);

// Set up renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(2, 2, 2);
scene.add(directionalLight);

// Load GLTF model
const loader = new GLTFLoader();
let mixer; // For animation handling

loader.load(
  "/chess_set_4k.gltf", // Ensure this path matches your file location
  function (gltf) {
    const model = gltf.scene;
    scene.add(model);

    model.scale.set(5, 5, 5);

    // Handle animations if available
    if (gltf.animations.length > 0) {
      mixer = new THREE.AnimationMixer(model);
      const action = mixer.clipAction(gltf.animations[0]); // Play first animation
      action.play();
    }
  },
  undefined,
  function (error) {
    console.error("Error loading GLTF:", error);
  }
);

// Handle window resizing
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

// Animation loop
const clock = new THREE.Clock();
function animateBoard() {
  requestAnimationFrame(animateBoard);

  if (mixer) {
    mixer.update(clock.getDelta()); // Update animation
  }

  renderer.render(scene, camera);
}

animateBoard();
