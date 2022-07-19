class Coins extends MovableObject {

    width = 150;
    height = 150;


    images = [
        'img/8_coin/coin_1.png'
    ];

    /**
     * Load the coin image
     * @param {number} x declare the coordinates
     * @param {number} y declare the coordinates
     */

    constructor(x, y) {
        super().loadImage('img/8_coin/coin_1.png');
        this.loadImages(this.images);
        this.x = x;
        this.y = y;
    }
}