import {globalVariables} from '../helpers/globalVariables'


function cordToTriPoints(cords){
    // convert degs to tri point cords
    //return array [x, y, z]
    //obj dist
    let j = globalVariables.radiusSphere + globalVariables.radiusPins
    console.log(cords[0], cords[1])
    let phi = (90-cords[0])*(Math.PI/180)
    let theta = (cords[1]+180)*(Math.PI/180)
    let x = -(Math.sin(phi))*Math.cos(theta) * j
    let z = (Math.sin(phi))*Math.sin(theta) * j
    let y = (Math.cos(phi)) * j

    return{x, z, y}
}


export{cordToTriPoints}