class Bottels extends MovableObject {

    width = 150;
    height = 250;


    images = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',

    ];

    constructor(x, y) {

        super().loadImage('img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        this.loadImages(this.images);
        this.x = x;
        this.y = y;


    }

}