const curve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(-2, 0, 0),
  new THREE.Vector3(-1, 1, 0),
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(1, -1, 0),
  new THREE.Vector3(2, 0, 0)
]);
const points = curve.getPoints(50);
const geometry = new THREE.BufferGeometry().setFromPoints(points);
const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
const curveObject = new THREE.Line(geometry, material);
scene.add(curveObject);
