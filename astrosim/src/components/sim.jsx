import * as THREE from 'three';
import { useEffect } from 'react';
import SceneInit from '../building/SceneInit.js';

import suntextvar from '../../public/suntexture.jpg';



export const Sim = () => {

    useEffect(() => {
        let test = new SceneInit();
        test.initScene();
        test.animate();

        const sunGeometry = new THREE.SphereGeometry(8);
        const sunTexture = new THREE.TextureLoader().load(suntextvar)
        const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
        const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
        const solarSystem = new THREE.Group();
        solarSystem.add(sunMesh);
        test.scene.add(solarSystem);
    });




    <div>
        <p>AstroSim</p>
        <canvas id='threeCanvas' />
    </div>
}