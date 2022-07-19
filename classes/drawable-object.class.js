class DrawableObject {
    x = 120;
    y = 300;
    width = 100;
    height = 150;
    img;
    imageCache = {};
    currentImage = 0;


    /**
     * Load the first image
     * @param {*} path 
     */


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Drawing everything in the canvas
     * @param {*} ctx 
     */

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * Draw the colision frame
     * @param {*} ctx 
     */

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss || this instanceof Coins || this instanceof Bottles || this instanceof ThrowableObject) {
            ctx.beginPath();
            ctx.lineWidth = '1';
            ctx.strokeStyle = 'transparent';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    /**
     * Loading function for the animation images
     * @param {*} array 
     */

    loadImages(array) {
        array.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });

    }
}