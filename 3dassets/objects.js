import * as THREE from 'three'
import {globalVariables} from '../helpers/globalVariables'

//variables
let radiusSphere = globalVariables.radiusSphere
let radiusPins = globalVariables.radiusPins

//maps
let map = new THREE.TextureLoader().load('textures/dots-02.jpg')



function GlobeMesh(){
    // create Globe
    const GemSphere = new THREE.SphereGeometry(radiusSphere, 64, 64)
    const materialSf = new THREE.MeshStandardMaterial({
    map: map
    })
    materialSf.emissive = new THREE.Color("rgb(17, 22, 36)")
    materialSf.emissiveIntensity = 2
    let mesh = new THREE.Mesh(GemSphere, materialSf)
    return mesh
}

function pinTestMesh(){
    // create test pint
    const testSphere = new THREE.SphereGeometry(radiusPins, 64, 64)

    const materialTest = new THREE.MeshStandardMaterial({
    color: '#eb4034'
    })
    let mesh2 = new THREE.Mesh(testSphere, materialTest)
    return mesh2

}


function createFabs(){
    const fabsPrime = new THREE.SphereGeometry(radiusPins, 64, 64)
    const fabsMat = new THREE.MeshStandardMaterial({
        color: '#eb4034'
    })

    let newMesh = new THREE.Mesh(fabsPrime, fabsMat)
    return newMesh
}

export{GlobeMesh, pinTestMesh, createFabs}


