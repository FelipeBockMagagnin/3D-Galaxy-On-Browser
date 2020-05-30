

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 30;

var planets = generatePlanets();

planets.forEach(element => {
  scene.add(element.object);
});

animate();

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  planets.forEach(element => {
    rotate(element);
  });
}

function rotate(planetObj) {
  var px = planetObj.radius * Math.cos(planetObj.angle); // <-- that's the maths you need
  var py = planetObj.radius * Math.sin(planetObj.angle);

  planetObj.angle = (planetObj.angle + Math.PI / 360) % (Math.PI * 2) + planetObj.translationSpeed;
  planetObj.object.position.x = px;
  planetObj.object.position.y = py;

  //planetObj.object.rotation.x += planetObj.rotationSpeed
  planetObj.object.rotation.y += planetObj.rotationSpeed
}