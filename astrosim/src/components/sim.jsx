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

import { Settings } from '../components/settings.jsx'

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
        const mercuryMesh = mercury.getMesh();
        let mercurySystem = new THREE.Group();
        mercurySystem.add(mercuryMesh);

        const venus = new Planet(3, 32, ventextvar, 1, true);
        const venusMesh = venus.getMesh();
        let venusSystem = new THREE.Group();
        venusSystem.add(venusMesh);

        const earth = new Planet(4, 48, earthtextvar, 1, true);
        const earthMesh = earth.getMesh();
        let earthSystem = new THREE.Group();
        venusSystem.add(earthMesh);

        const mars = new Planet(3, 64, marstextvar, 1, true);
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

        requestAnimationFrame(animate);
        };
        animate();






        var inoutList = [['sunMRange', 'sunMOut'], ['mercMRange', 'mercMOut'], ['venMRange', 'venMOut'], ['earthMRange', 'earthMOut'], ['marsMRange', 'marsMOut'], ['sunSRange', 'sunSOut'], ['mercSRange', 'mercSOut'], ['venSRange', 'venSOut'], ['earthSRange', 'earthSOut'], ['marsSRange', 'marsSOut']];
        
        var sunMass = (document.getElementById(inoutList[0][0])).value;
        var mercMass = (document.getElementById(inoutList[1][0])).value;
        var venMass = (document.getElementById(inoutList[2][0])).value;
        var earthMass = (document.getElementById(inoutList[3][0])).value;
        var marsMass = (document.getElementById(inoutList[4][0])).value;

        var sunSpeed = (document.getElementById(inoutList[5][0])).value;
        var mercSpeed = (document.getElementById(inoutList[6][0])).value;
        var venSpeed = (document.getElementById(inoutList[7][0])).value;
        var earthSpeed = (document.getElementById(inoutList[8][0])).value;
        var marsSpeed = (document.getElementById(inoutList[9][0])).value;


        var runButton = document.getElementById('runsim');
        runButton.onclick = function () {
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
            const mercuryMesh = mercury.getMesh();
            let mercurySystem = new THREE.Group();
            mercurySystem.add(mercuryMesh);

            const venus = new Planet(3, 32, ventextvar, 1, true);
            const venusMesh = venus.getMesh();
            let venusSystem = new THREE.Group();
            venusSystem.add(venusMesh);

            const earth = new Planet(4, 48, earthtextvar, 1, true);
            const earthMesh = earth.getMesh();
            let earthSystem = new THREE.Group();
            venusSystem.add(earthMesh);

            const mars = new Planet(3, 64, marstextvar, 1, true);
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

            requestAnimationFrame(animate);
            };
            animate();
        }


        

    });



    return (
        <div id='canvCont'>
            <canvas id='threeCanvas' />
        </div>
    )
}