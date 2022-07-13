class Bottles extends MovableObject {

    width = 100;
    height = 100;



    images = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];



    constructor() {

        super().loadImage(this.images[this.randomImage()]);
        this.x = 300 + Math.random() * 3000;
        this.y = 280 + Math.random() * 100;
        this.loadImages(this.images);


    }
    randomImage() {
        return Math.floor(Math.random() * this.images.length);
    }
}