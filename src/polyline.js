const points = [
  new THREE.Vector3(-2, 0, 0),
  new THREE.Vector3(-1, 1, 0),
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(1, -1, 0),
  new THREE.Vector3(2, 0, 0)
];
const geometry = new THREE.BufferGeometry().setFromPoints(points);
const material = new THREE.LineBasicMaterial({ color: 0x00ff00 });
const polyline = new THREE.Line(geometry, material);
scene.add(polyline);
