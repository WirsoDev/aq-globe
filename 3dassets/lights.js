import * as THREE from 'three'
import {scene} from './scene'
import {sizes} from '../helpers/globalVariables'


//Lights
const light = new THREE.PointLight(0xffffff, .35, 145) 
light.position.set(0, 10, 10)

scene.add(light)


const lightAmb = new THREE.AmbientLight( 0xd4d4d4); // soft white light
scene.add( lightAmb );



//camera
const camera = new THREE.PerspectiveCamera(45, sizes.width/sizes.height, 0.1, 100)
camera.position.z = 9

scene.add(camera)


export {camera}