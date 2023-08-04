import {scene} from './scene'
import {cordToTriPoints} from '../helpers/cordToTriPoints'
import {GlobeMesh, pinTestMesh, createFabs} from './objects'
import {dataPlaces} from '../data'


//add obj to scene //
let globe = GlobeMesh()
scene.add(globe)

// teste pin //
let cords2 = [35.6895000, 139.6917100] // toquio

let points = cordToTriPoints(cords2)

let pin = pinTestMesh()
pin.position.set(points.x, points.y, points.z)
scene.add(pin)


//create array of objs
//loop array / 

let objKeys = Object.keys(dataPlaces)
console.log(objKeys)

objKeys.map((x)=>{
    let places = dataPlaces[x].cord

    let TriP = cordToTriPoints(places)
    //console.log(TriP)

    let newPin = createFabs()
    newPin.position.set(TriP.x, TriP.y, TriP.z)
    scene.add(newPin)
})
