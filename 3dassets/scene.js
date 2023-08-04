import * as THREE from 'three'

const scene = new THREE.Scene()
scene.fog = new THREE.Fog(0x535ef3, 1500, 2000);

//background colors
const color1 = new THREE.Color("rgb(252, 252, 252)")
scene.background = color1

export{ scene }