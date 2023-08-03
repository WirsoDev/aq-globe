import './root.css'
import './style.css'
import './sidecards.css'

import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {dataPlaces} from './data' 
import { scene } from './3dassets/scene'
import './3dassets/sceneImporter'


//Sizes
const sizes = {
  width: window.innerWidth - 200,
  height: window.innerHeight - 200
}


//light
const light = new THREE.PointLight(0xffffff, .35, 145) 
light.position.set(0, 10, 10)

scene.add(light)


const lightAmb = new THREE.AmbientLight( 0xd4d4d4); // soft white light
scene.add( lightAmb );


//camera
const camera = new THREE.PerspectiveCamera(45, sizes.width/sizes.height, 0.1, 100)
camera.position.z = 9
scene.add(camera)

//renderer and canvas

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

//controls.autoRotate = true


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
  // rotate globe
  //GemSphere.rotateY((deg + defAngl))
  //rotate comp obj
  //testSphere.rotateY((deg  + defAngl))
  controls.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(loop)
}
loop()



//we are
const weAre = document.querySelector('#weAre')
var isWeareActive = false
weAre.addEventListener('click', ()=>{
  const flagsDiv = document.querySelector('.flags')
  flagsDiv.innerHTML = ''
  if(isWeareActive == false){
        //get all keys from obj
    isWeareActive = true
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
    console.log(listP)
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
  
  //open detais card func
  openDetails(targetInfo, target)
}

const openDetails = (targetInfo, target) => {
  //create target card
  const sidecards = document.querySelector('.sidecards')
  const detailsDiv = document.createElement('div')
  detailsDiv.setAttribute('class', 'details')
  sidecards.appendChild(detailsDiv)

  //update Flag
  const flagsDiv = document.querySelector('.flags')
  flagsDiv.innerHTML = ''
  const imgFlag = document.createElement('img')
  imgFlag.setAttribute('src', `public/static/flags/${targetInfo.flag}.svg`)
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
    console.log(innerHtmlDetails)
    index ++
  })
  const details = document.querySelector('.details')
  details.innerHTML = innerHtmlDetails
}


//we export

const weExport = document.querySelector('#weExport')
weExport.addEventListener('click', ()=>{
  alert('still under development. We are working on the data')
})





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
      map = new THREE.TextureLoader().load('textures/real.jpg')
  }else{
    mapIcon.src = '/static/globe_dot.svg'
    map = new THREE.TextureLoader().load('textures/dots-02.jpg')
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
    iconPath.src = 'public/static/rotate.svg'
    defAngl = -0.0025
  }else{
    defAngl = 0
    iconPath.src = 'public/static/norotate.svg'
  }
})



