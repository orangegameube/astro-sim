import * as THREE from 'three';
import { useEffect } from 'react';
import SceneInit from '../building/SceneInit.js';
import Planet from '../building/ObjectConstruct.js';

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

        const sun = new Planet(8, 0, suntextvar, 100000);
        const sunMesh = sun.getMesh();
        const solarSystem = new THREE.Group();
        solarSystem.add(sunMesh);

        const mercury = new Planet(2, 39, merctextvar, 1);
        const mercuryMesh = mercury.getMesh();
        let mercurySystem = new THREE.Group();
        mercurySystem.add(mercuryMesh);

        const venus = new Planet(3, 72, ventextvar, 1);
        const venusMesh = venus.getMesh();
        let venusSystem = new THREE.Group();
        venusSystem.add(venusMesh);

        const earth = new Planet(4, 100, earthtextvar, 1);
        const earthMesh = earth.getMesh();
        let earthSystem = new THREE.Group();
        earthSystem.add(earthMesh);

        const mars = new Planet(3, 150, marstextvar, 1);
        const marsMesh = mars.getMesh();
        let marsSystem = new THREE.Group();
        marsSystem.add(marsMesh);

        solarSystem.add(mercurySystem, venusSystem, earthSystem, marsSystem);
        test.scene.add(solarSystem);


        const G = 6.67e-11;
        function calcVel(body, sunobj) {
            return (Math.sqrt((sunobj.mass * G) / body.distance) * 10)
        }
        function calcFGrav(body1, body2) {
            let r = body1.position.distanceTo(body2.position);
            return (G * body1.mass * body2.mass) / (r * r)
        }


        // physics code begins here
        const animate = () => {
        sunMesh.rotation.y += 0.001;
        mercurySystem.rotation.y += calcVel(mercury, sun);
        venusSystem.rotation.y += calcVel(venus, sun);
        earthSystem.rotation.y += calcVel(earth, sun);
        marsSystem.rotation.y += calcVel(mars, sun);

        



        requestAnimationFrame(animate);
        };
        animate();






        var inoutList = [['sunMRange', 'sunMOut'], ['mercMRange', 'mercMOut'], ['venMRange', 'venMOut'], ['earthMRange', 'earthMOut'], ['marsMRange', 'marsMOut'], ['sunSRange', 'sunSOut'], ['mercSRange', 'mercSOut'], ['venSRange', 'venSOut'], ['earthSRange', 'earthSOut'], ['marsSRange', 'marsSOut'], ['speedRange', 'speedOut']];


        var runButton = document.getElementById('runsim');

        runButton.onclick = function () {

            let test = new SceneInit();
            test.initScene();
            test.animate();


            var sunMass = Number((document.getElementById(inoutList[0][0])).value);
            var mercMass = Number((document.getElementById(inoutList[1][0])).value);
            var venMass = Number((document.getElementById(inoutList[2][0])).value);
            var earthMass = Number((document.getElementById(inoutList[3][0])).value);
            var marsMass = Number((document.getElementById(inoutList[4][0])).value);

            var mercDist = Number((document.getElementById(inoutList[6][0])).value);
            var venDist = Number((document.getElementById(inoutList[7][0])).value);
            var earthDist = Number((document.getElementById(inoutList[8][0])).value);
            var marsDist = Number((document.getElementById(inoutList[9][0])).value);

            var speed = Number((document.getElementById(inoutList[10][0])).value);


            

            
            const sun = new Planet(8, 0, suntextvar, (sunMass * 100000));
            const sunMesh = sun.getMesh();
            let sunSystem = new THREE.Group();
            sunSystem.add(sunMesh);
            const solarSystem = new THREE.Group();
            solarSystem.add(sunMesh);

            const mercury = new Planet(2, mercDist, merctextvar, (mercMass / 10));
            const mercuryMesh = mercury.getMesh();
            let mercurySystem = new THREE.Group();
            mercurySystem.add(mercuryMesh);

            const venus = new Planet(3, venDist, ventextvar, (venMass / 10));
            const venusMesh = venus.getMesh();
            let venusSystem = new THREE.Group();
            venusSystem.add(venusMesh);

            const earth = new Planet(4, earthDist, earthtextvar, (earthMass / 10));
            const earthMesh = earth.getMesh();
            let earthSystem = new THREE.Group();
            earthSystem.add(earthMesh);

            const mars = new Planet(3, marsDist, marstextvar, (marsMass / 10));
            const marsMesh = mars.getMesh();
            let marsSystem = new THREE.Group();
            marsSystem.add(marsMesh);

            solarSystem.add(mercurySystem, venusSystem, earthSystem, marsSystem);
            test.scene.add(solarSystem);




            // physics code begins here

            function calcVel(body, sunobj) {
                return (Math.sqrt((sunobj.mass * G) / body.distance) * (speed / 25))
            }
            function calcFGrav(body, sun) {
                let r = body.distance
                return ((G * body.mass * sun.mass) * speed * 500) / (r * r)
            }

            const animate = () => {
            sunMesh.rotation.y += 0.001;
            mercurySystem.rotation.y += calcFGrav(mercury, sun) / mercury.mass;
            venusSystem.rotation.y += calcFGrav(venus, sun) / venus.mass;
            earthSystem.rotation.y += calcFGrav(earth, sun) / earth.mass;
            marsSystem.rotation.y += calcFGrav(mars, sun) / mars.mass;



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