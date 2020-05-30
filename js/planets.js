class planet {
  name
  radius
  rotationSpeed
  translationSpeed
  object
  angle
}

function generatePlanets(){
  let planets = [];

  planets.push(generateMercury())
  planets.push(generateSun())
  planets.push(generateVenus())
  planets.push(generateEarth())
  planets.push(generateMars())
  planets.push(generateJupiter())
  planets.push(generateSaturn())
  planets.push(generateUranus())
  planets.push(generateNeptune())
  planets.push(generatePluto())

  return planets;
}

function generateSun() {
  var geometry = new THREE.SphereGeometry(2, 32, 32)
  var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  material.map = THREE.ImageUtils.loadTexture('images/sun/sunmap.jpg')

  let planet = new THREE.Mesh(geometry, material);

  return {
    name: 'Sun',
    radius: 0,
    rotationSpeed: .01,
    translationSpeed: 0,
    object: planet,
    angle: 0
  }
}

function generateMercury() {
  var geometry = new THREE.SphereGeometry(0.3, 32, 32)
  var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  material.map = THREE.ImageUtils.loadTexture('images/mercury/mercurymap.jpg')
  material.bumpMap = THREE.ImageUtils.loadTexture('images/mercury/mercurybump.jpg')
  material.bumpScale = 0.05
  
  let planet = new THREE.Mesh(geometry, material);

  return {
    name: 'Mercury',
    radius: 4,
    rotationSpeed: .01,
    translationSpeed: .008,
    object: planet,
    angle: Math.random(0, Math.PI * 2)
  }
}

function generateVenus() {
  var geometry = new THREE.SphereGeometry(0.4, 32, 32)
  var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  material.map = THREE.ImageUtils.loadTexture('images/venus/venusbump.jpg')
  material.bumpMap = THREE.ImageUtils.loadTexture('images/venus/venusmap.jpg')
  material.bumpScale = 0.05

  let planet = new THREE.Mesh(geometry, material);

  return {
    name: 'Venus',
    radius: 6,
    rotationSpeed: .009,
    translationSpeed: .003,
    object: planet,
    angle: Math.random(0, Math.PI * 2)
  }
}

function generateEarth() {
  var geometry = new THREE.SphereGeometry(0.6, 64, 64)
  var material = new THREE.MeshBasicMaterial()
  material.map = THREE.ImageUtils.loadTexture('images/earth/earthmap1k.jpg')
  material.bumpMap = THREE.ImageUtils.loadTexture('images/earth/earthbump1k.jpg')
  material.bumpScale = 0.05
  material.specularMap = THREE.ImageUtils.loadTexture('images/earth/earthspec1k.jpg')
  material.specular = new THREE.Color('grey')

  let planet = new THREE.Mesh(geometry, material);

  return {
    name: 'Earth',
    radius: 9,
    rotationSpeed: .02,
    translationSpeed: -0.005,
    object: planet,
    angle: Math.random(0, Math.PI * 2)
  }  
}

function generateMars() {
  var geometry = new THREE.SphereGeometry(0.8, 64, 64)
  var material = new THREE.MeshBasicMaterial()
  material.map = THREE.ImageUtils.loadTexture('images/mars/mars_1k_color.jpg')
  material.bumpMap = THREE.ImageUtils.loadTexture('images/mars/marsbump1k.jpg')
  material.bumpScale = 0.05

  let planet = new THREE.Mesh(geometry, material);

  return {
    name: 'Mars',
    radius: 12,
    rotationSpeed: .01,
    translationSpeed: -0.007,
    object: planet,
    angle: Math.random(0, Math.PI * 2)
  }
}

function generateJupiter() {
  var geometry = new THREE.SphereGeometry(1.7, 64, 64)
  var material = new THREE.MeshBasicMaterial()
  material.map = THREE.ImageUtils.loadTexture('images/jupiter/jupitermap.jpg')

  let planet = new THREE.Mesh(geometry, material);

  return {
    name: 'Jupiter',
    radius: 16,
    rotationSpeed: .008,
    translationSpeed: -0.008,
    object: planet,
    angle: Math.random(0, Math.PI * 2)
  }
}

function generateSaturn() {
  var geometry = new THREE.SphereGeometry(2, 64, 64)
  var material = new THREE.MeshBasicMaterial()
  material.map = THREE.ImageUtils.loadTexture('images/saturn/saturnmap.jpg')

  let planet = new THREE.Mesh(geometry, material);

  return {
    name: 'Saturn',
    radius: 22,
    rotationSpeed: .02,
    translationSpeed: -0.0084,
    object: planet,
    angle: Math.random(0, Math.PI * 2)
  }
}

function generateUranus() {
  var geometry = new THREE.SphereGeometry(1.3, 64, 64)
  var material = new THREE.MeshBasicMaterial()
  material.map = THREE.ImageUtils.loadTexture('images/uranus/uranusmap.jpg')

  let planet = new THREE.Mesh(geometry, material);

  return {
    name: 'Uranus',
    radius: 26,
    rotationSpeed: .04,
    translationSpeed: -0.0085,
    object: planet,
    angle: Math.random(0, Math.PI * 2)
  }
}

function generateNeptune() {
  var geometry = new THREE.SphereGeometry(0.3, 64, 64)
  var material = new THREE.MeshBasicMaterial()
  material.map = THREE.ImageUtils.loadTexture('images/neptune/neptunemap.jpg')

  let planet = new THREE.Mesh(geometry, material);

  return {
    name: 'Neptune',
    radius: 30,
    rotationSpeed: .04,
    translationSpeed: -0.0086,
    object: planet,
    angle: Math.random(0, Math.PI * 2)
  }
}

function generatePluto() {
  var geometry = new THREE.SphereGeometry(1.3, 64, 64)
  var material = new THREE.MeshBasicMaterial()
  material.map = THREE.ImageUtils.loadTexture('images/pluto/plutomap1k.jpg')

  let planet = new THREE.Mesh(geometry, material);

  return {
    name: 'Pluto',
    radius: 36,
    rotationSpeed: .04,
    translationSpeed: -0.0087,
    object: planet,
    angle: Math.random(0, Math.PI * 2)
  }
}
