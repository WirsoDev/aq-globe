import {scene} from './scene'
import {cordToTriPoints} from '../helpers/cordToTriPoints'
import {GlobeMesh, pinTestMesh, createFabs, createFabOnClick, createSellOnClick, createAllFabs, CreateAllWeAre, CreateAllSell} from './objects'
import {dataPlaces, dataSell} from '../data'


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


function addObjOnClickSell(id){

    let objKeys = Object.keys(dataSell[id])
    console.log(objKeys)


    objKeys.map((x)=>{
        console.log(x)
        let places = dataSell[id][x].cord
    
        let TriP = cordToTriPoints(places)
    
        let newPin = createSellOnClick()
        newPin.position.set(TriP.x, TriP.y, TriP.z)
        newPin.name = 'sellObj'
        scene.add(newPin)
    
    })
}


function addObjOnClickWeAre(){

    console.log('add objs')

    let objKeys = Object.keys(dataPlaces)
    objKeys.map((x)=>{
        let places = dataPlaces[x].cord

        let TriP = cordToTriPoints(places)

        let newPin = createAllFabs()
        newPin.position.set(TriP.x, TriP.y, TriP.z)
        newPin.name = 'sellObj'
        scene.add(newPin)

})
}


function addAllkWeAre(){

    console.log('add objs')

    let objKeys = Object.keys(dataPlaces)
    objKeys.map((x)=>{
        let places = dataPlaces[x].cord

        let TriP = cordToTriPoints(places)

        let newPin = CreateAllWeAre()
        newPin.position.set(TriP.x, TriP.y, TriP.z)
        newPin.name = 'sellObj'
        scene.add(newPin)

})
}

function addAllSellBed(){

    let objKeys = Object.keys(dataSell['Bedding'])
    console.log(objKeys)


    objKeys.map((x)=>{
        console.log(x)
        let places = dataSell['Bedding'][x].cord
    
        let TriP = cordToTriPoints(places)
    
        let newPin = CreateAllSell()
        newPin.position.set(TriP.x, TriP.y, TriP.z)
        newPin.name = 'sellObj'
        scene.add(newPin)
    
    })
}

function addAllSellSofa(){

    let objKeys = Object.keys(dataSell['Sofas'])
    console.log(objKeys)


    objKeys.map((x)=>{
        console.log(x)
        let places = dataSell['Sofas'][x].cord
    
        let TriP = cordToTriPoints(places)
    
        let newPin = CreateAllSell()
        newPin.position.set(TriP.x, TriP.y, TriP.z)
        newPin.name = 'sellObj'
        scene.add(newPin)
    
    })
}



export {addObjOnClick, addObjOnClickSell, addObjOnClickWeAre, addAllkWeAre, addAllSellBed, addAllSellSofa}


