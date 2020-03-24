let scene, camera, renderer, mesh;
let meshFloor, ambientLight, light, controls;
 
let keyboard = {};
let player = { height:1.8, speed:0.2, turnSpeed:Math.PI*0.02 };
let USE_WIREFRAME = false;
 
function init(){

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(90, 1280/720, 0.1, 1000);
  //scene.fog = new THREE.Fog(0xffffff, 150,700);
  
  let loader = new THREE.GLTFLoader();

  let skyMaterialArray = [];
  for (let i = 0; i < 6; i++)
   skyMaterialArray.push( new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('assets/textures/sky.jpeg'),
    side: THREE.BackSide
   }));
   let skyGeometry = new THREE.CubeGeometry( 950,900, 1000 );
   let skyMaterial = new THREE.MeshFaceMaterial( skyMaterialArray );
   let skyBox = new THREE.Mesh(skyGeometry, skyMaterial);
   scene.add(skyBox);







  //FLOOR Outside
 textureFloorOutside = new THREE.TextureLoader().load( 'assets/textures/sand.jpg' );
 textureStair = new THREE.TextureLoader().load('assets/textures/stone2.jpg')

 meshFloorOutside = new THREE.Mesh(
    new THREE.PlaneGeometry(100,100, 100,100),
    new THREE.MeshPhongMaterial({map:textureFloorOutside, wireframe:USE_WIREFRAME})
    
 );
 meshFloorOutside.rotation.x -= Math.PI / 2;

 meshFloorOutside.position.y += -0.1;
 meshFloorOutside.receiveShadow = true;
 scene.add(meshFloorOutside);

 textureFloorOutside = new THREE.TextureLoader().load( 'assets/textures/sand.jpg' );
 textureStair = new THREE.TextureLoader().load('assets/textures/stone2.jpg')

 meshFloorOutside = new THREE.Mesh(
    new THREE.PlaneGeometry(100,100, 100,100),
    new THREE.MeshPhongMaterial({map:textureFloorOutside, wireframe:USE_WIREFRAME})
    
 );
 meshFloorOutside.rotation.x -= Math.PI / 2;
meshFloorOutside.position.z = 100;
 meshFloorOutside.position.y += -0.1;
 meshFloorOutside.receiveShadow = true;
 scene.add(meshFloorOutside);


//stones
textureWall= new THREE.TextureLoader().load( 'assets/textures/stone.jpg' );

st1 = new THREE.Mesh(
   new THREE.BoxGeometry(20,6,5),
   new THREE.MeshPhongMaterial({map:textureWall, wireframe:USE_WIREFRAME})
);
st1.rotation.y = 1.55;
st1.position.z = -40;
st1.position.y = 2;
st1.position.x = 17;
st1.receiveShadow = true;
st1.castShadow = true;
scene.add(st1);





st2 = new THREE.Mesh(
   new THREE.BoxGeometry(20,6,5),
   new THREE.MeshPhongMaterial({map:textureWall, wireframe:USE_WIREFRAME})
);
st2.rotation.y = 1.55;
st2.position.z = -40;
st2.position.y = 2;
st2.position.x = -17;
st2.receiveShadow = true;
st2.castShadow = true;
scene.add(st2);


//main platform
st3 = new THREE.Mesh(
   new THREE.BoxGeometry(20,6,30),
   new THREE.MeshPhongMaterial({map:textureWall, wireframe:USE_WIREFRAME})
);
st3.rotation.y = 1.55;
st3.position.z = -21;
st3.position.y = 2;
st3.position.x = 0;
st3.receiveShadow = true;
st3.castShadow = true;
scene.add(st3);

st4 = new THREE.Mesh(
   new THREE.BoxGeometry(20,9,5),
   new THREE.MeshPhongMaterial({map:textureWall, wireframe:USE_WIREFRAME})
);
st4.rotation.y = 1.55;
st4.position.z = -20;
st4.position.y = 2;
st4.position.x = 17;
st4.receiveShadow = true;
st4.castShadow = true;
scene.add(st4);


st5 = new THREE.Mesh(
   new THREE.BoxGeometry(20,9,5),
   new THREE.MeshPhongMaterial({map:textureWall, wireframe:USE_WIREFRAME})
);
st5.rotation.y = 1.55;
st5.position.z = -20;
st5.position.y = 2;
st5.position.x = -17;
st5.receiveShadow = true;
st5.castShadow = true;
scene.add(st5);

st6 = new THREE.Mesh(
   new THREE.BoxGeometry(19.5,9,5),
   new THREE.MeshPhongMaterial({map:textureWall, wireframe:USE_WIREFRAME})
);
st6.rotation.y = 1.55;
st6.position.z = 0;
st6.position.y = 2;
st6.position.x = 17;
st6.receiveShadow = true;
st6.castShadow = true;
scene.add(st6);

st7 = new THREE.Mesh(
   new THREE.BoxGeometry(19.5,9,5),
   new THREE.MeshPhongMaterial({map:textureWall, wireframe:USE_WIREFRAME})
);
st7.rotation.y = 1.55;
st7.position.z = 0;
st7.position.y = 2;
st7.position.x = -17.3;
st7.receiveShadow = true;
st7.castShadow = true;
scene.add(st7);

st8 = new THREE.Mesh(
   new THREE.BoxGeometry(20,6,30),
   new THREE.MeshPhongMaterial({map:textureWall, wireframe:USE_WIREFRAME})
);
st8.rotation.y = 1.55;
st8.position.z = -1;
st8.position.y = 2;
st8.position.x = 0;
st8.receiveShadow = true;
st8.castShadow = true;
scene.add(st8);

st9 = new THREE.Mesh(
   new THREE.BoxGeometry(25,6,25),
   new THREE.MeshPhongMaterial({map:textureWall, wireframe:USE_WIREFRAME})
);
st9.rotation.y = 1.55;
st9.position.z = -21;
st9.position.y = 2;
st9.position.x = 32.2;
st9.receiveShadow = true;
st9.castShadow = true;
scene.add(st9);
//platforms
st10 = new THREE.Mesh(
   new THREE.BoxGeometry(15,6,15),
   new THREE.MeshPhongMaterial({map:textureStair, wireframe:USE_WIREFRAME})
);
st10.rotation.y = 1.55;
st10.position.z = -25;
st10.position.y = 6;
st10.position.x = 32.2;
st10.receiveShadow = true;
st10.castShadow = true;
scene.add(st10);

st11 = new THREE.Mesh(
   new THREE.BoxGeometry(15,6,20),
   new THREE.MeshPhongMaterial({map:textureWall, wireframe:USE_WIREFRAME})
);
st11.rotation.y = 1.55;
st11.position.z = -21;
st11.position.y = 2;
st11.position.x = -29;
st11.receiveShadow = true;
st11.castShadow = true;
scene.add(st11);

//platforms
st12 = new THREE.Mesh(
   new THREE.BoxGeometry(15,6,15),
   new THREE.MeshPhongMaterial({map:textureStair, wireframe:USE_WIREFRAME})
);
st12.rotation.y = 1.55;
st12.position.z = -21;
st12.position.y = 6;
st12.position.x = -31.7;
st12.receiveShadow = true;
st12.castShadow = true;
scene.add(st12);

//standing
st13 = new THREE.Mesh(
   new THREE.BoxGeometry(25,4,2),
   new THREE.MeshPhongMaterial({map:textureWall, wireframe:USE_WIREFRAME})
);
st13.position.z = 0;
st13.position.y = 13;
st13.position.x = -24.3;
st13.rotation.z = -1.45;
st13.receiveShadow = true;
st13.castShadow = true;
scene.add(st13);

st14 = new THREE.Mesh(
   new THREE.BoxGeometry(6,3,2),
   new THREE.MeshPhongMaterial({map:textureWall, wireframe:USE_WIREFRAME})
);

st14.position.z = 0;
st14.position.y = 1;
st14.position.x = -28;
st14.receiveShadow = true;
st14.castShadow = true;
scene.add(st14);

st15 = new THREE.Mesh(
   new THREE.BoxGeometry(6,3,2),
   new THREE.MeshPhongMaterial({map:textureWall, wireframe:USE_WIREFRAME})
);

st15.position.z = 0;
st15.position.y = 1;
st15.position.x = -34.2;
st15.receiveShadow = true;
st15.castShadow = true;
scene.add(st15);

st16 = new THREE.Mesh(
   new THREE.BoxGeometry(11.5,10,2),
   new THREE.MeshPhongMaterial({map:textureWall, wireframe:USE_WIREFRAME})
);

st16.position.z = 0;
st16.position.y = 7.3;
st16.position.x = -31.4;
st16.rotation.z = .15;
st16.receiveShadow = true;
st16.castShadow = true;
scene.add(st16);

st17 = new THREE.Mesh(
   new THREE.BoxGeometry(6,3,2),
   new THREE.MeshPhongMaterial({map:textureWall, wireframe:USE_WIREFRAME})
);
st17.rotation.z = .15;
st17.position.z = 0;
st17.position.y = 14.2;
st17.position.x = -29.7;
st17.receiveShadow = true;
st17.castShadow = true;
scene.add(st17);

st18 = new THREE.Mesh(
   new THREE.BoxGeometry(6,3,2),
   new THREE.MeshPhongMaterial({map:textureWall, wireframe:USE_WIREFRAME})
);
st18.rotation.z = .15;
st18.position.z = 0;
st18.position.y = 17.3;
st18.position.x = -29.95;
st18.receiveShadow = true;
st18.castShadow = true;
scene.add(st18);

st19 = new THREE.Mesh(
   new THREE.BoxGeometry(6,3,2),
   new THREE.MeshPhongMaterial({map:textureWall, wireframe:USE_WIREFRAME})
);
st19.rotation.z = .15;
st19.position.z = 0;
st19.position.y = 20.35;
st19.position.x = -30.3;
st19.receiveShadow = true;
st19.castShadow = true;
scene.add(st19);

st20 = new THREE.Mesh(
   new THREE.BoxGeometry(6,3,2),
   new THREE.MeshPhongMaterial({map:textureWall, wireframe:USE_WIREFRAME})
);
st20.rotation.z = .15;
st20.position.z = 0;
st20.position.y = 13.2;
st20.position.x = -35.7;
st20.receiveShadow = true;
st20.castShadow = true;
scene.add(st20);

st21 = new THREE.Mesh(
   new THREE.BoxGeometry(25,7,5),
   new THREE.MeshPhongMaterial({map:textureStair, wireframe:USE_WIREFRAME})
);
st21.position.z = -37;
st21.position.y = 13;
st21.position.x = -24.6;
st21.rotation.z = -1.40;
st21.receiveShadow = true;
st21.castShadow = true;
scene.add(st21);

st22 = new THREE.Mesh(
   new THREE.BoxGeometry(55,12,12),
   new THREE.MeshPhongMaterial({map:textureStair, wireframe:USE_WIREFRAME})
);
st22.position.z = -25;
st22.position.y = 16;
st22.position.x = 32.2;
st22.rotation.z = -1.30;
st22.receiveShadow = true;
st22.castShadow = true;
scene.add(st22);


//stairs
stair1 = new THREE.Mesh(
   new THREE.BoxGeometry(3,4,10),
   new THREE.MeshPhongMaterial({map:textureStair, wireframe:USE_WIREFRAME})
);
stair1.rotation.y = 1.55;
stair1.position.z = -32;
stair1.position.y = 2;
stair1.position.x = 10.2;
stair1.receiveShadow = true;
stair1.castShadow = true;
scene.add(stair1);

stair2 = new THREE.Mesh(
   new THREE.BoxGeometry(3,4,10),
   new THREE.MeshPhongMaterial({map:textureStair, wireframe:USE_WIREFRAME})
);
stair2.rotation.y = 1.55;
stair2.position.z = -32;
stair2.position.y = 2;
stair2.position.x = 0;
stair2.receiveShadow = true;
stair2.castShadow = true;
scene.add(stair2);

stair3 = new THREE.Mesh(
   new THREE.BoxGeometry(3,4,10),
   new THREE.MeshPhongMaterial({map:textureStair, wireframe:USE_WIREFRAME})
);
stair3.rotation.y = 1.55;
stair3.position.z = -32;
stair3.position.y = 2;
stair3.position.x = -10.2;
stair3.receiveShadow = true;
stair3.castShadow = true;
scene.add(stair3);

stair4 = new THREE.Mesh(
   new THREE.BoxGeometry(3,3,10),
   new THREE.MeshPhongMaterial({map:textureStair, wireframe:USE_WIREFRAME})
);
stair4.rotation.y = 1.55;
stair4.position.z = -33.5;
stair4.position.y = 1;
stair4.position.x = 10.2;
stair4.receiveShadow = true;
stair4.castShadow = true;
scene.add(stair4);

stair5 = new THREE.Mesh(
   new THREE.BoxGeometry(3,3,10),
   new THREE.MeshPhongMaterial({map:textureStair, wireframe:USE_WIREFRAME})
);
stair5.rotation.y = 1.55;
stair5.position.z = -33.5;
stair5.position.y = 1;
stair5.position.x = 0;
stair5.receiveShadow = true;
stair5.castShadow = true;
scene.add(stair5);

stair6 = new THREE.Mesh(
   new THREE.BoxGeometry(3,3,10),
   new THREE.MeshPhongMaterial({map:textureStair, wireframe:USE_WIREFRAME})
);
stair6.rotation.y = 1.55;
stair6.position.z = -33.5;
stair6.position.y = 1;
stair6.position.x = -10.2;
stair6.receiveShadow = true;
stair6.castShadow = true;
scene.add(stair6);

stair7 = new THREE.Mesh(
   new THREE.BoxGeometry(3,3,10),
   new THREE.MeshPhongMaterial({map:textureStair, wireframe:USE_WIREFRAME})
);
stair7.rotation.y = 1.55;
stair7.position.z = -35;
stair7.position.y = 0;
stair7.position.x = -10.2;
stair7.receiveShadow = true;
stair7.castShadow = true;
scene.add(stair7);

stair8 = new THREE.Mesh(
   new THREE.BoxGeometry(3,3,10),
   new THREE.MeshPhongMaterial({map:textureStair, wireframe:USE_WIREFRAME})
);
stair8.rotation.y = 1.55;
stair8.position.z = -35;
stair8.position.y = 0;
stair8.position.x = 0;
stair8.receiveShadow = true;
stair8.castShadow = true;
scene.add(stair8);

stair9 = new THREE.Mesh(
   new THREE.BoxGeometry(3,3,10),
   new THREE.MeshPhongMaterial({map:textureStair, wireframe:USE_WIREFRAME})
);
stair9.rotation.y = 1.55;
stair9.position.z = -35;
stair9.position.y = 0;
stair9.position.x = 10.2;
stair9.receiveShadow = true;
stair9.castShadow = true;
scene.add(stair9);

//pilars
pillar1 = new THREE.Mesh(
   new THREE.CylinderGeometry(1,1,22,15),
   new THREE.MeshPhongMaterial({map:textureWall, wireframe:USE_WIREFRAME})
);
pillar1.position.y = 13;
pillar1.position.x = -22;
pillar1.position.z =  0;
pillar1.rotation.z = .15;
pillar1.receiveShadow = true;
pillar1.castShadow = true;
scene.add(pillar1);

pillar2 = new THREE.Mesh(
   new THREE.CylinderGeometry(1,1,22,24),
   new THREE.MeshPhongMaterial({map:textureWall, wireframe:USE_WIREFRAME})
);
pillar2.position.y = 13;
pillar2.position.x = -21;
pillar2.position.z =  -35;
pillar2.rotation.z = .19;
pillar2.receiveShadow = true;
pillar2.castShadow = true;
scene.add(pillar2);

pillar3 = new THREE.Mesh(
   new THREE.CylinderGeometry(1,1,22,24),
   new THREE.MeshPhongMaterial({map:textureWall, wireframe:USE_WIREFRAME})
);
pillar3.position.y = 13;
pillar3.position.x = -21;
pillar3.position.z =  -38;
pillar3.rotation.z = .19;
pillar3.receiveShadow = true;
pillar3.castShadow = true;
scene.add(pillar3);


//mountain
mountainTexture = new THREE.TextureLoader().load('assets/textures/grasstext.jpg');


mountain1 = new THREE.Mesh(
   new THREE.SphereBufferGeometry(20,25,12),
   new THREE.MeshPhongMaterial({map:mountainTexture, wireframe:USE_WIREFRAME})
);
mountain1.position.z= 70;
mountain1.position.y = -10;

mountain1.receiveShadow = true;
mountain1.castShadow = true;
scene.add(mountain1);


mountain2 = new THREE.Mesh(
   new THREE.SphereBufferGeometry(20,25,12),
   new THREE.MeshPhongMaterial({map:mountainTexture, wireframe:USE_WIREFRAME})
);
mountain2.position.z= 90;
mountain2.position.y = -5;
mountain2.position.x = -25;

mountain2.receiveShadow = true;
mountain2.castShadow = true;
scene.add(mountain2);

mountain3 = new THREE.Mesh(
   new THREE.SphereBufferGeometry(25,30,15),
   new THREE.MeshPhongMaterial({map:mountainTexture, wireframe:USE_WIREFRAME})
);
mountain3.position.z= 110;
mountain3.position.y = -4;
mountain3.position.x = 0;

mountain3.receiveShadow = true;
mountain3.castShadow = true;
scene.add(mountain3);

mountain4 = new THREE.Mesh(
   new THREE.SphereBufferGeometry(35,40,20),
   new THREE.MeshPhongMaterial({map:mountainTexture, wireframe:USE_WIREFRAME})
);
mountain4.position.z= 110;
mountain4.position.y = -4;
mountain4.position.x = 20;

mountain4.receiveShadow = true;
mountain4.castShadow = true;
scene.add(mountain4);

mountain5 = new THREE.Mesh(
   new THREE.SphereBufferGeometry(20,25,12),
   new THREE.MeshPhongMaterial({map:mountainTexture, wireframe:USE_WIREFRAME})
);
mountain5.position.z= 65;
mountain5.position.y = -7;
mountain5.position.x = -35;

mountain5.receiveShadow = true;
mountain5.castShadow = true;
scene.add(mountain5);


//bigboi
castle1 = new THREE.Mesh(
   new THREE.CylinderGeometry(20,20,15,25),
   new THREE.MeshPhongMaterial({map:textureWall, wireframe:USE_WIREFRAME})
);
castle1.position.y = 35;
castle1.position.x = 18;
castle1.position.z =  105;

castle1.rotation.z = 5.4;
castle1.rotation.y = -.3;
castle1.receiveShadow = true;
castle1.castShadow = true;
scene.add(castle1);

castlePillar = new THREE.Mesh(
   new THREE.CylinderGeometry(2.5,2.5,50,15),
   new THREE.MeshPhongMaterial({map:textureWall, wireframe:USE_WIREFRAME})
);
castlePillar.position.y = 37;
castlePillar.position.x = 0;
castlePillar.position.z =  95;
castlePillar.rotation.z = 5.1;
castlePillar.rotation.x =-.5;
castlePillar.rotation.y =-.7;
castlePillar.receiveShadow = true;
castlePillar.castShadow = true;
scene.add(castlePillar);

castlePillar2 = new THREE.Mesh(
   new THREE.CylinderGeometry(2.5,2.5,60,15),
   new THREE.MeshPhongMaterial({map:textureWall, wireframe:USE_WIREFRAME})
);
castlePillar2.position.y = 30;
castlePillar2.position.x = 0;
castlePillar2.position.z =  85;
castlePillar2.rotation.z = 5.1;
castlePillar2.rotation.x =-.5;
castlePillar2.rotation.y =-.7;
castlePillar2.receiveShadow = true;
castlePillar2.castShadow = true;
scene.add(castlePillar2);

castlePillar3 = new THREE.Mesh(
   new THREE.CylinderGeometry(2.5,2.5,60,15),
   new THREE.MeshPhongMaterial({map:textureWall, wireframe:USE_WIREFRAME})
);
castlePillar3.position.y = 15;
castlePillar3.position.x = 0;
castlePillar3.position.z =  80;
castlePillar3.rotation.z = 5.1;
castlePillar3.rotation.x =-.5;
castlePillar3.rotation.y =-.7;
castlePillar3.receiveShadow = true;
castlePillar3.castShadow = true;
scene.add(castlePillar3);

castle2 = new THREE.Mesh(
   new THREE.CylinderGeometry(25,25,15,25),
   new THREE.MeshPhongMaterial({map:textureWall, wireframe:USE_WIREFRAME})
);
castle2.position.y = 5;
castle2.position.x = -10;
castle2.position.z =  95;

castle2.rotation.z = 5.4;
castle2.rotation.y = -.3;
castle2.receiveShadow = true;
castle2.castShadow = true;
scene.add(castle2);

castle3 = new THREE.Mesh(
   new THREE.ConeGeometry(18,85,0),
   new THREE.MeshPhongMaterial({map:textureWall, wireframe:USE_WIREFRAME})
);
castle3.position.y = 62;
castle3.position.x = 50;
castle3.position.z =  118;

castle3.rotation.z = 5.4;
castle3.rotation.y = -.3;
castle3.receiveShadow = true;
castle3.castShadow = true;
scene.add(castle3);

castle4 = new THREE.Mesh(
   new THREE.BoxGeometry(50,4,2),
   new THREE.MeshPhongMaterial({map:textureWall, wireframe:USE_WIREFRAME})
);
castle4.position.y = 65;
castle4.position.x = 28.8;
castle4.position.z =  110;


castle4.rotation.y = -.65  ;
castle4.rotation.z = .55;
castle4.receiveShadow = true;
castle4.castShadow = true;
scene.add(castle4);


castle5 = new THREE.Mesh(
   new THREE.CylinderGeometry(25,25,15,25),
   new THREE.MeshPhongMaterial({map:textureWall, wireframe:USE_WIREFRAME})
);
castle5.position.y = -7;
castle5.position.x = -25;
castle5.position.z =  90;

castle5.rotation.z = 5.4;
castle5.rotation.y = -.3;
castle5.receiveShadow = true;
castle5.castShadow = true;
scene.add(castle5);

castle6 = new THREE.Mesh(
   new THREE.BoxGeometry(50,4,2),
   new THREE.MeshPhongMaterial({map:textureWall, wireframe:USE_WIREFRAME})
);
castle6.position.y = 40;
castle6.position.x = 50;
castle6.position.z =  110;

castle6.rotation.y = -.65  ;
castle6.rotation.z = .55;
castle6.receiveShadow = true;
castle6.castShadow = true;
scene.add(castle6);

castle7 = new THREE.Mesh(
   new THREE.BoxGeometry(60,4,2),
   new THREE.MeshPhongMaterial({map:textureWall, wireframe:USE_WIREFRAME})
);
castle7.position.y = 48;
castle7.position.x = 52;
castle7.position.z = 120;

castle7.rotation.y = -.65  ;
castle7.rotation.z = .55;
castle7.receiveShadow = true;
castle7.castShadow = true;
scene.add(castle7);

castle8 = new THREE.Mesh(
   new THREE.BoxGeometry(70,4,2),
   new THREE.MeshPhongMaterial({map:textureWall, wireframe:USE_WIREFRAME})
);
castle8.position.y = 70;
castle8.position.x = 41.5;
castle8.position.z =  125;


castle8.rotation.y = -.65  ;
castle8.rotation.z = .55;
castle8.receiveShadow = true;
castle8.castShadow = true;
scene.add(castle8);








  // LIGHTS (ESSENTIAL FOR EACH OBJECT)
  ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
  scene.add(ambientLight);
 
  light = new THREE.PointLight(0xffffff, 0.8, 18);
  light.position.set(9,6,-1);
  light.castShadow = true;

  // Will not light anything closer than 0.1 units or further than 25 units
  
  light.shadow.camera.near = 0.1;
  light.shadow.camera.far = 25;
  scene.add(light);

  let spotLight = new THREE.SpotLight( 0xFFFFFF, .8);
  spotLight.position.set( 7, 200, 30 );
  spotLight.target.position.set( 10, -350, -55 );
  spotLight.castShadow = true;
  spotLight.position.z = -250;
  spotLight.position.x = -400;
  scene.add( spotLight.target );
  scene.add( spotLight );
  //Set up shadow properties for the spotLight
  spotLight.shadow.mapSize.width = 112; // default
  spotLight.shadow.mapSize.height = 212; // default
  spotLight.shadow.camera.near = 0.5; // default
  spotLight.shadow.camera.far = 1500; // default
  var spotLightHelper = new THREE.SpotLightHelper( spotLight );
scene.add( spotLightHelper );
 




  camera.position.set(0, player.height, -4);
  camera.lookAt(new THREE.Vector3(0,player.height,0));
 
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(1550, 720);

 
  // Enable Shadows in the Renderer
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.BasicShadowMap;
 
  document.body.appendChild(renderer.domElement);
  
   controls = new THREE.OrbitControls (camera);
  animate();
  
}


var loader = new THREE.GLTFLoader();

loader.load( 'assets/textures/grass/scene.gltf', function ( gltf ) {
  scene.add( gltf.scene );
  grass = gltf.scene;
 gltf.scene.scale.set(0.1,0.1,0.1);
 grass.rotation.y = -1.7;
 grass.position.z = -23;
 grass.position.x = 12;
 
}, undefined, function ( error ) {

	console.error( error );

} );

var loader = new THREE.GLTFLoader();

loader.load( 'assets/textures/grass/scene.gltf', function ( gltf ) {
  scene.add( gltf.scene );
  grass2 = gltf.scene;
 gltf.scene.scale.set(0.1,0.1,0.1);
 grass2.rotation.y = -1.7;
 grass2.position.z = -23;
 grass2.position.x = -12;
 
}, undefined, function ( error ) {

	console.error( error );

} );

var loader = new THREE.GLTFLoader();

loader.load( 'assets/textures/grass/scene.gltf', function ( gltf ) {
  scene.add( gltf.scene );
  grass3 = gltf.scene;
 gltf.scene.scale.set(0.1,0.1,0.1);
 grass3.rotation.y = -1.7;
 grass3.position.z = 23;
 grass3.position.x = 12;
 
}, undefined, function ( error ) {

	console.error( error );

} );

var loader = new THREE.GLTFLoader();

loader.load( 'assets/textures/grass/scene.gltf', function ( gltf ) {
  scene.add( gltf.scene );
  grass4 = gltf.scene;
 gltf.scene.scale.set(0.1,0.1,0.1);
 grass4.rotation.y = -1.7;
 grass4.position.z = 23;
 grass4.position.x = -12;
 
}, undefined, function ( error ) {

	console.error( error );

} );

var loader = new THREE.GLTFLoader();

loader.load( 'assets/textures/saitama/scene.gltf', function ( gltf ) {
  scene.add( gltf.scene );
  saitama = gltf.scene;
 gltf.scene.scale.set(1.75,1.75,1.75);
 saitama.rotation.y = 0;
 saitama.position.z = 0;
 saitama.position.x = 0;
 saitama.position.y = 3.5;
 
}, undefined, function ( error ) {

	console.error( error );

} );

var loader = new THREE.GLTFLoader();

loader.load( 'assets/textures/cloud/scene.gltf', function ( gltf ) {
  scene.add( gltf.scene );
  clouds = gltf.scene;
 gltf.scene.scale.set(0.05,0.05,0.05);
 clouds.position.y = 160;
 clouds.position.z = 200;
 clouds.position.x = -60;
 clouds.rotation.y = 1.5;
 

 
}, undefined, function ( error ) {

	console.error( error );

} );


var loader = new THREE.GLTFLoader();

loader.load( 'assets/textures/cloud/scene.gltf', function ( gltf ) {
  scene.add( gltf.scene );
  clouds1 = gltf.scene;
 gltf.scene.scale.set(0.08,0.08,0.08);
 clouds1.position.y = 130;
 clouds1.position.z = 200;
 clouds1.position.x = 50;
 clouds1.rotation.y = 1.5;
 
}, undefined, function ( error ) {

	console.error( error );

} );

var loader = new THREE.GLTFLoader();

loader.load( 'assets/textures/cloud/scene.gltf', function ( gltf ) {
  scene.add( gltf.scene );
  clouds2 = gltf.scene;
 gltf.scene.scale.set(0.15,0.15,0.15);
 clouds2.position.y = 80;
 clouds2.position.z = 200;
 clouds2.position.x = 200;
 clouds2.rotation.y = 1.8;
 
}, undefined, function ( error ) {

	console.error( error );

} );



var loader = new THREE.GLTFLoader();

loader.load( 'assets/textures/cloud/scene.gltf', function ( gltf ) {
  scene.add( gltf.scene );
  clouds3 = gltf.scene;
 gltf.scene.scale.set(0.35,0.35,0.35);
 clouds3.position.y = 30;
 clouds3.position.z = 300;
 clouds3.position.x = 480;
 clouds3.rotation.y = 1.8;
 
}, undefined, function ( error ) {

	console.error( error );

} );


var loader = new THREE.GLTFLoader();

loader.load( 'assets/textures/cloud/scene.gltf', function ( gltf ) {
  scene.add( gltf.scene );
  clouds4 = gltf.scene;
 gltf.scene.scale.set(0.1,0.1,0.1);
 clouds4.position.y = 20;
 clouds4.position.z = -40;
 clouds4.position.x = 170;
 clouds4.rotation.y = 2.4;
 
}, undefined, function ( error ) {

	console.error( error );

} );










function animate(){
  requestAnimationFrame(animate);
camera.position.set(0,10,-55);
  
  controls.update();
  
  
 
  if(keyboard[87]){ // W key
     camera.position.x -= Math.sin(camera.rotation.y) * player.speed;
     camera.position.z -= -Math.cos(camera.rotation.y) * player.speed;
  }
  if(keyboard[83]){ // S key
     camera.position.x += Math.sin(camera.rotation.y) * player.speed;
     camera.position.z += -Math.cos(camera.rotation.y) * player.speed;
  }
  if(keyboard[65]){ // A key
     camera.position.x += Math.sin(camera.rotation.y + Math.PI/2) * player.speed;
     camera.position.z += -Math.cos(camera.rotation.y + Math.PI/2) * player.speed;
  }
  if(keyboard[68]){ // D key
     camera.position.x += Math.sin(camera.rotation.y - Math.PI/2) * player.speed;
     camera.position.z += -Math.cos(camera.rotation.y - Math.PI/2) * player.speed;
  }
 
  if(keyboard[37]){ // left arrow key
     camera.rotation.y -= player.turnSpeed;
  }
  if(keyboard[39]){ // right arrow key
     camera.rotation.y += player.turnSpeed;
  }
  

 
  renderer.render(scene, camera);

}
 
function keyDown(event){
  keyboard[event.keyCode] = true;
}
 
function keyUp(event){
  keyboard[event.keyCode] = false;
}




window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);

window.onload = init;

