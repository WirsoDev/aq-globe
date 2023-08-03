import {scene} from './scene'
import {cordToTriPoints} from '../helpers/cordToTriPoints'
import {GlobeMesh, pinTestMesh} from './objects'


//add obj to scene //
let globe = GlobeMesh()
scene.add(globe)

//teste pin
let cords2 = [35.6895000, 139.6917100] // toquio

let points = cordToTriPoints(cords2)

let pin = pinTestMesh()
pin.position.set(points.x, points.y, points.z)
scene.add(pin)