class BackgroundObject extends MovableObject {

    width = 720;
    height = 480;

    /** 
     * - Draw canvas and backgrounds
     * @param {number} imagePath wich number it is
     * @param {number} x declares the coordinates
     */

    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height;

    }
}