import {scene} from './scene'
import {cordToTriPoints} from '../helpers/cordToTriPoints'
import {GlobeMesh, pinTestMesh, createFabs, createFabOnClick} from './objects'
import {dataPlaces} from '../data'


//add obj to scene //
let globe = GlobeMesh()
globe.name = 'globe'
scene.add(globe)


//create array of objs
//loop array / 

let objKeys = Object.keys(dataPlaces)

objKeys.map((x)=>{
    let places = dataPlaces[x].cord

    let TriP = cordToTriPoints(places)

    let newPin = createFabs()
    newPin.position.set(TriP.x, TriP.y, TriP.z)
    newPin.name = x
    scene.add(newPin)

})

function addObjOnClick(id){

    let obj = dataPlaces[id].cord
    let TriP = cordToTriPoints(obj)
    let newFab = createFabOnClick()

    newFab.position.set(TriP.x, TriP.y, TriP.z)
    newFab.name = 'CurrentSelection'
    console.log('Add new OBJ' + id)
    scene.add(newFab)
}

export {addObjOnClick}

//get obj by name
//var obj = scene.getObjectByName('India')
//console.log(obj)

