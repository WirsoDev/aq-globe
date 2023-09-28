import * as THREE from 'three'
import {globalVariables} from '../helpers/globalVariables'
import dotstex from '../textures/dots-02.jpg'

//variables
let radiusSphere = globalVariables.radiusSphere
let radiusPins = globalVariables.radiusPins
let radiusExtraPins = globalVariables.radiusExtraPins

//maps
let map = new THREE.TextureLoader().load(dotstex)

// create Globe
const GemSphere = new THREE.SphereGeometry(radiusSphere, 64, 64)

function GlobeMesh(){
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

    const colors = {
        red:'#ba2335',
        grey:'#a8a7a7'
    }

    const fabsPrime = new THREE.SphereGeometry(0, 64, 64) // radus 0 to hide obj
    const fabsMat = new THREE.MeshPhongMaterial ({
        color: colors.grey,
    })

    

    let newMesh = new THREE.Mesh(fabsPrime, fabsMat)
    return newMesh
}

function createFabOnClick(){
    const fabClick = new THREE.SphereGeometry(radiusExtraPins, 64, 64)
    const fabMat = new THREE.MeshStandardMaterial({
        color: "#ba2335",
        
    })

    let fabMesh = new THREE.Mesh(fabClick, fabMat)
    console.log('Create new OBJ')
    return fabMesh
}

const sellGroup = new THREE.Group()

function createSellOnClick(){
    const fabClick = new THREE.SphereGeometry(radiusExtraPins, 64, 64)
    const fabMat = new THREE.MeshStandardMaterial({
        color: "#32a852",
        
    })

    let fabMesh = new THREE.Mesh(fabClick, fabMat)
    sellGroup.add(fabMesh)
    console.log('Create new OBJ')
    return fabMesh
}


export{GlobeMesh, pinTestMesh, createFabs, GemSphere, createFabOnClick, createSellOnClick}


