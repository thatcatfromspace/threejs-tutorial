const points = [
  new THREE.Vector3(-1, 0, 0),
  new THREE.Vector3(1, 1, 0)
];
const geometry = new THREE.BufferGeometry().setFromPoints(points);
const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
const line = new THREE.Line(geometry, material);
scene.add(line);


