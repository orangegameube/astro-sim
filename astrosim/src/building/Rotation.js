import * as THREE from 'three';

export default class Rotation {
    constructor (planetMesh, showRotation = false) {
        this.distance = planetMesh.position.x;
        this.y = 0.25;
        this.z = 0.25;
        this.showRotation = showRotation;
    }

    getMesh() {
    if (this.mesh === undefined || this.mesh === null) {
      const bodyGeometry = new THREE.BoxGeometry(this.distance, 0.25, 0.25);
      const bodyMaterial = new THREE.MeshNormalMaterial();
      this.mesh = new THREE.Mesh(bodyGeometry, bodyMaterial);
      this.mesh.position.x = this.distance / 2;
      this.mesh.visible = this.showRotation;
    }
    return this.mesh;
  }
}
