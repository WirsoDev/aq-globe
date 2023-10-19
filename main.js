import './root.css'
import './style.css'
import './sidecards.css'

import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {dataPlaces, dataSell} from './data' 
import { scene } from './3dassets/scene'
import './3dassets/sceneImporter'
import './3dassets/lights'
import { camera } from './3dassets/lights'
import { sizes } from './helpers/globalVariables'

import dotstex from './textures/dots-02.jpg'
import dotstexreal from './textures/real.jpg'

import rotate from './public/static/rotate.svg'
import noRotate from './public/static/norotate.svg'
import {resolvFlag} from './helpers/loadFlags'
import {addObjOnClick, addObjOnClickSell, addObjOnClickWeAre, addAllkWeAre, addAllSellBed, addAllSellSofa} from './3dassets/sceneImporter'
import {fitCameraToObject} from './helpers/fitCameraToObject'


//renderer and canvas

addAllkWeAre()
addAllSellBed()
addAllSellSofa()


const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({canvas, antialias:true})
renderer.setPixelRatio(window.devicePixelRatio)

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(2)
renderer.render(scene, camera)

//controls

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls. enablePan = false
controls.enableZoom = false
controls.autoRotate = true
controls.autoRotateSpeed = -1

//rezise

window.addEventListener('resize', ()=>{
  sizes.width = window.innerWidth - 200
  sizes.height = window.innerHeight - 200
  //update camera
  camera.updateProjectionMatrix()
  camera.aspect = sizes.width / sizes.height
  renderer.setSize(sizes.width, sizes.height)
})

let deg = 0
let defAngl = -0.0025

const loop = () => {

  controls.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(loop)

}
loop()


//we are
const weAre = document.querySelector('#weAre')
var isWeareActive = false
weAre.addEventListener('click', ()=>{

    const whereAre = document.getElementById('whereAre')
    const wheresell = document.getElementById('weSell')
 
    whereAre.innerHTML = 'Where we are'
    wheresell.innerHTML = 'Where we sell'
    


    defAngl = 0
    iconPath.src = rotate
    controls.autoRotate = true

    clearSellObjects()

    // dell all active objs
    clearSelectionObjects()


  const flagsDiv = document.querySelector('.flags')
  flagsDiv.innerHTML = ''
  if(isWeareActive == false){
    
    addObjOnClickWeAre()

        //get all keys from obj
    isWeareActive = true
    const whereAre = document.getElementById('whereAre')
    const weSell = document.getElementById('weSell')
    whereAre.innerHTML = 'Close | Reset'
    weSell.innerHTML = 'Close | Reset'
    
    let objKeys = Object.keys(dataPlaces)

    let places = `
    <div class="places">
            <h2>Where we are</h2>
            <div class="places-list">
            </div>
          </div>
    `


    const sidecards = document.querySelector('.sidecards')
    sidecards.innerHTML = places


    //add all p'ss
    const placesList = document.querySelector('.places-list')
    objKeys.map(x => {
      const node = document.createElement('p')
      node.setAttribute('id', x)
      node.setAttribute('class', 'currentPlaces')
      const textNode = document.createTextNode(x);
      node.appendChild(textNode)
      placesList.appendChild(node)
    })

    //eventlistner p´sss
    const listP = document.querySelectorAll('.currentPlaces')
    listP.forEach(x => {
      x.addEventListener('click', pHandler)
    })



  }else{
    const sidecards = document.querySelector('.sidecards')
    sidecards.innerHTML = ''
    isWeareActive = false
  }
})


//pHandler
const pHandler = (x) => {
  //get target id

  const target = x.target.id
  const targetInfo = dataPlaces[target]

  //remove any extra pin selected
  var pin = scene.getObjectByName('CurrentSelection')
  if(pin !== undefined){
    scene.remove(pin)
  }

  //add new OBJ
  addObjOnClick(target)

  //zoom in to obj
  const obj2 = scene.getObjectByName(target)

  defAngl = 0
  iconPath.src = noRotate
  controls.autoRotate = false
  
  let scaller = 1.45

  let new_vector_3 = new THREE.Vector3(obj2.position.x * scaller, obj2.position.y * scaller, obj2.position.z * scaller)
  
  camera.position.addVectors(new_vector_3, new_vector_3)


  //open detais card func
  openDetails(targetInfo, target)
}

const openDetails = (targetInfo, target) => {

  //reset detais
  const details_toreset = document.querySelector('.details')
  if(details_toreset !== null){
    details_toreset.remove()
  }

  //create target card
  const sidecards = document.querySelector('.sidecards')
  const detailsDiv = document.createElement('div')
  detailsDiv.setAttribute('class', 'details')
  sidecards.appendChild(detailsDiv)

  //update Flag
  const flagsDiv = document.querySelector('.flags')
  flagsDiv.innerHTML = ''
  const imgFlag = document.createElement('img')
  let targetFlag = resolvFlag(targetInfo.flag)
  imgFlag.setAttribute('src', targetFlag)
  flagsDiv.appendChild(imgFlag)

  const targetFactorys = targetInfo.factorys
  const factorysObj = Object.keys(targetFactorys)

  let index = 0
  let innerHtmlDetails = ''
  factorysObj.map(x => {

    let detailsCont = `
    <div class="detail-cont">
            <div class="place-name">
              <h2>${factorysObj[index]}</h2>
              <div class="place-info">
                <p>${targetFactorys[x]}</p>
              </div>
            </div>
          </div>
    `

    //add to innerHtmlDetails
    innerHtmlDetails = innerHtmlDetails + detailsCont
    index ++

  })
  const details = document.querySelector('.details')
  details.innerHTML = innerHtmlDetails
}









//we export
function clearSellObjects(){
  let breakit = true
    while(breakit){
      const toDelObj = scene.getObjectByName('sellObj')
      if(toDelObj == undefined){
        breakit = false
      }else{
        scene.remove(toDelObj)
      }
    }
}

function clearSelectionObjects(){
    var pin = scene.getObjectByName('CurrentSelection')
    if(pin !== undefined){
      scene.remove(pin)
  }
}


const weExport = document.querySelector('#weExport')
weExport.addEventListener('click', ()=>{

    
  
    const whereSell = document.getElementById('weSell')
    const weExport2 = document.getElementById('whereAre')

    whereSell.innerHTML = 'Where we sell'
    weExport2.innerHTML = 'Where we are'


    defAngl = 0
    iconPath.src = rotate
    controls.autoRotate = true


    // dell all active objs
    clearSellObjects()
    clearSelectionObjects()
  
  
  const flagsDiv = document.querySelector('.flags')
  flagsDiv.innerHTML = ''
  if(isWeareActive == false){
        //get all keys from obj
    isWeareActive = true
    const whereSell = document.getElementById('weSell')
    const whereAre = document.getElementById('whereAre')

    whereSell.innerHTML = 'Close | Reset'
    whereAre.innerHTML = 'Close | Reset'
  
    
    let objKeys = Object.keys(dataSell)

    let places = `
    <div class="places">
            <h2>Where we sell</h2>
            <div class="places-list">
            </div>
          </div>
    `


    const sidecards = document.querySelector('.sidecards')
    sidecards.innerHTML = places


    //add all p'ss
    const placesList = document.querySelector('.places-list')
    objKeys.map(x => {
      const node = document.createElement('p')
      node.setAttribute('id', x)
      node.setAttribute('class', 'currentPlaces')
      const textNode = document.createTextNode(x);
      node.appendChild(textNode)
      placesList.appendChild(node)
    })

    //eventlistner p´sss
    const listP = document.querySelectorAll('.currentPlaces')
    listP.forEach(x => {
      x.addEventListener('click', pHandler2)
    })

  }else{
    const sidecards = document.querySelector('.sidecards')
    sidecards.innerHTML = ''
    isWeareActive = false
  }


})


const pHandler2 = (x) => {
  //get target id
  const target = x.target.id
  const targetInfo = dataSell[target]
  console.log(targetInfo)
  //remove obj if existes
  clearSellObjects()
  clearSelectionObjects()


  //add objs to globe
  addObjOnClickSell(target)

  //open detais card func
  openDetails2(targetInfo)
}


const openDetails2 = (targetInfo, target) => {

  //reset detais
  const details_toreset = document.querySelector('.details')
  if(details_toreset !== null){
    details_toreset.remove()
  }

  //create target card
  const sidecards = document.querySelector('.sidecards')
  const detailsDiv = document.createElement('div')
  detailsDiv.setAttribute('class', 'details')
  sidecards.appendChild(detailsDiv)


  const targetFactorys = targetInfo.factorys
  const factorysObj = Object.keys(targetInfo)

  let index = 0
  let innerHtmlDetails = ''
  factorysObj.map(x => {

    let detailsCont = `
    <div class="detail-cont">
            <div class="place-name">
              <p class="wesellplaces">${factorysObj[index].toLowerCase()}</p>
            </div>
          </div>
    `

    //add to innerHtmlDetails
    innerHtmlDetails = innerHtmlDetails + detailsCont
    index ++

  })
  const details = document.querySelector('.details')
  details.innerHTML = innerHtmlDetails
}















// settings
const mapsHandler = document.querySelector('#maps')
mapsHandler.addEventListener('click', ()=>{

  const mapIcon = document.querySelector('#iconSrc')
  console.log(mapIcon.src)


  const mapSrc = map.source.data.src.split('/')
  const mapPath = mapSrc[mapSrc.length - 1]
  console.log(mapPath)

  if(mapPath == 'dots-02.jpg'){
      mapIcon.src = 'public/static/globe_real.svg'
      map = new THREE.TextureLoader().load(dotstexreal)
  }else{
    mapIcon.src = '/static/globe_dot.svg'
    map = new THREE.TextureLoader().load(dotstex)
  }

  const materialSf = new THREE.MeshStandardMaterial({
    map: map
  })
  const mesh = new THREE.Mesh(GemSphere, materialSf)
  scene.add(mesh)

})


//html controllers

const desableAutoRot = document.querySelector('.desableautorot')
const iconPath = document.querySelector('#iconPath')
desableAutoRot.addEventListener('click', () => {
  if(defAngl == 0){
    iconPath.src = rotate
    defAngl = -0.0025
    controls.autoRotate = true
  }else{
    defAngl = 0
    iconPath.src = noRotate
    controls.autoRotate = false
  }
})


