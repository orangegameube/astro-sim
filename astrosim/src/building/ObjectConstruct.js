import * as THREE from "three";

export default class Planet {
    constructor (radius, distance, textureFile, mass, path) {
        this.radius = radius;
        this.distance = distance;
        this.textureFile = textureFile;
        this.mass = mass;
        this.path = path;
    }

    getMesh () {
        if (this.mesh === undefined || this.mesh === null) {
            const bodyGeometry = new THREE.SphereGeometry(this.radius);
            const bodyTexture = new THREE.TextureLoader().load(this.textureFile);
            const bodyMaterial = new THREE.MeshBasicMaterial({ map: bodyTexture });
            this.mesh = new THREE.Mesh(bodyGeometry, bodyMaterial);
            this.mesh.position.x += this.distance;
        }
        return this.mesh;
    }

    getTrail() {
        var pathvar = [];
        if (this.path === true) {
            pathvar.push(1);
            pathvar.push([]);
        }
        else {
            pathvar.push(0);
        }
        return pathvar;
    }
}