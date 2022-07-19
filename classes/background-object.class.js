class BackgroundObject extends MovableObject {

    width = 720;
    height = 480;

    /** 
     * - Draw canvas and backgrounds
     * @param {imagePath} imagePath path
     * @param {x} x coordinates
     */

    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height;

    }
}