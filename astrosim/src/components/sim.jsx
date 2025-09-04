import * as THREE from 'three';
import { useEffect } from 'react';
import SceneInit from '../building/SceneInit.js';
import Planet from '../building/ObjectConstruct.js';

import suntextvar from '/suntexture.jpg';
import merctextvar from '/mercurytexture.jpg';
import ventextvar from '/venustexture.jpg';
import earthtextvar from '/earthtexture.jpg';
import marstextvar from '/marstexture.webp';



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

        const mercury = new Planet(2, 16, merctextvar);
        const mercuryMesh = mercury.getMesh();
        let mercurySystem = new THREE.Group();
        mercurySystem.add(mercuryMesh);

        const venus = new Planet(3, 32, ventextvar);
        const venusMesh = venus.getMesh();
        let venusSystem = new THREE.Group();
        venusSystem.add(venusMesh);

        const earth = new Planet(4, 48, earthtextvar);
        const earthMesh = earth.getMesh();
        let earthSystem = new THREE.Group();
        venusSystem.add(earthMesh);

        const mars = new Planet(3, 64, marstextvar);
        const marsMesh = mars.getMesh();
        let marsSystem = new THREE.Group();
        marsSystem.add(marsMesh);

        solarSystem.add(mercurySystem, venusSystem, earthSystem, marsSystem);
        test.scene.add(solarSystem);
    });




    <div>
        <p>AstroSim</p>
        <canvas id='threeCanvas' />
    </div>
}