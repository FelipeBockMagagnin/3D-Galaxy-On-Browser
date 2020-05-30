var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 5;

var mercury = generateMercury();
mercury.position.x = 2;
scene.add(mercury);

var sun = generateSun();
scene.add(sun);

var venus = generateVenus();
venus.position.x = 4;
scene.add(venus);

animate();

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  mercury.rotation.x += 0.01;
  mercury.rotation.y += 0.01;

  sun.rotation.x += 0.01;
  sun.rotation.y += 0.01;

  venus.rotation.x += 0.02;
  venus.rotation.y += 0.02;
  //camera.position.z += 0.003;
}

function generateMercury(){
  var geometry = new THREE.SphereGeometry(0.5, 32, 32)
  var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  material.map = THREE.ImageUtils.loadTexture('images/mercurymap.jpg')
  material.bumpMap = THREE.ImageUtils.loadTexture('images/mercurybump.jpg')
  material.bumpScale = 0.05
  return new THREE.Mesh(geometry, material);
}

function generateSun(){
  var geometry = new THREE.SphereGeometry(1, 64, 64)
  var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  material.map = THREE.ImageUtils.loadTexture('images/sunmap.jpg')
  return new THREE.Mesh(geometry, material);
}

function generateVenus(){
  var geometry = new THREE.SphereGeometry(0.5, 32, 32)
  var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  material.map = THREE.ImageUtils.loadTexture('images/venusbump.jpg')
  material.bumpMap = THREE.ImageUtils.loadTexture('images/venusmap.jpg')
  material.bumpScale = 0.05
  return new THREE.Mesh(geometry, material);
}

