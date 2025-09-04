import * as THREE from "three";

export default class Planet {
    constructor (radius, distance, textureFile) {
        this.radius = radius;
        this.distance = distance;
        this.textureFile = textureFile;
    }

    getMesh () {
        if (this.mesh === undefined || this.mesh === null) {
            const planetGeometry = new THREE.SphereGeometry(this.radius);
            const planetTexture = new THREE.TextureLoader().load(this.textureFile);
            const planetMaterial = new THREE.MeshBasicMaterial({ map: planetTexture });
            this.mesh = new THREE.Mesh(planetGeometry, planetMaterial);
            this.mesh.position.x += this.distance;
        }
        return this.mesh;
    }
    
}