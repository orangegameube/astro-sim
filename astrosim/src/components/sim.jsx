import * as THREE from 'three';
import { useEffect } from 'react';
import SceneInit from '../building/SceneInit.js';
import Planet from '../building/ObjectConstruct.js';
import Rotation from '../building/Rotation.js';

import suntextvar from '/suntexture.jpg';
import merctextvar from '/mercurytexture.jpg';
import ventextvar from '/venustexture.jpg';
import earthtextvar from '/earthtexture.png';
import marstextvar from '/marstexture.webp';

import '../components/sim.css'


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

        const mercury = new Planet(2, 16, merctextvar, 1, true);
        var mercPath = mercury.getTrail()
        const mercuryMesh = mercury.getMesh();
        let mercurySystem = new THREE.Group();
        mercurySystem.add(mercuryMesh);

        const venus = new Planet(3, 32, ventextvar, 1, true);
        var venPath = venus.getTrail()
        const venusMesh = venus.getMesh();
        let venusSystem = new THREE.Group();
        venusSystem.add(venusMesh);

        const earth = new Planet(4, 48, earthtextvar, 1, true);
        var earthPath = earth.getTrail()
        const earthMesh = earth.getMesh();
        let earthSystem = new THREE.Group();
        venusSystem.add(earthMesh);

        const mars = new Planet(3, 64, marstextvar, 1, true);
        var marsPath = mars.getTrail()
        const marsMesh = mars.getMesh();
        let marsSystem = new THREE.Group();
        marsSystem.add(marsMesh);

        solarSystem.add(mercurySystem, venusSystem, earthSystem, marsSystem);
        test.scene.add(solarSystem);




        // physics code begins here
        const EARTH_YEAR = 2 * Math.PI * (1 / 60) * (1 / 60);
        const animate = () => {
        sunMesh.rotation.y += 0.001;
        mercurySystem.rotation.y += EARTH_YEAR * 4;
        venusSystem.rotation.y += EARTH_YEAR * 2;
        earthSystem.rotation.y += EARTH_YEAR;
        marsSystem.rotation.y += EARTH_YEAR * 0.5;
        
        if (mercPath[0] === 1) {
            mercPath[1].push(mercurySystem.position.y);
            venPath[1].push(venusSystem.position.y);
            earthPath[1].push(earthSystem.position.y);
            marsPath[1].push(marsSystem.position.y);
            if (mercPath[1].length > 100) {
                mercPath[1].splice(0,1);
                venPath[1].splice(0,1);
                earthPath[1].splice(0,1);
                marsPath[1].splice(0,1)
            }
        }

        requestAnimationFrame(animate);
        };
        animate();

    });



    return (
        <div id='canvCont'>
            <p>AstroSim</p>
            <canvas id='threeCanvas' />
        </div>
    )
}