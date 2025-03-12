const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xff00ff, wireframe: true });
const cube = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(cube);

// Animating the cube

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

