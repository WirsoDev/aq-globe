import * as THREE from 'three'
import {scene} from './scene'

const light = new THREE.PointLight(0xffffff, .35, 145) 
light.position.set(0, 10, 10)

scene.add(light)


const lightAmb = new THREE.AmbientLight( 0xd4d4d4); // soft white light
scene.add( lightAmb );