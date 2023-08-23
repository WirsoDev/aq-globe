import * as THREE from 'three'

function fitCameraToObject(camera, controls, object, objToCenter ,fitOffset = 50 ){
    
    const box = new THREE.Box3();
    const box2 = new THREE.Box3();
  
    box.expandByObject( object );
    box2.expandByObject( objToCenter );

    
    const size = box.getSize( new THREE.Vector3() );
    const center = box.getCenter( new THREE.Vector3() );
    
    const maxSize = Math.max( size.x, size.y, size.z );
    const fitHeightDistance = maxSize / ( 2 * Math.atan( Math.PI * camera.fov / 360 ) );
    const fitWidthDistance = fitHeightDistance / camera.aspect;
    const distance = fitOffset * Math.max( fitHeightDistance, fitWidthDistance );
    
    const direction = controls.target.clone()
        .sub( camera.position )
        .normalize()
        .multiplyScalar( distance );

    controls.maxDistance = distance * 10;
    controls.target.copy( center );
    
    camera.near = distance / 100;
    camera.far = distance * 100;
    //camera.updateProjectionMatrix();

    camera.position.copy( controls.target ).sub(direction);
    //console.log(controls.target)
    
    controls.update();

}

export {fitCameraToObject}