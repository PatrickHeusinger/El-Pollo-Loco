class ThrowableObject extends MovableObject {



    images = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];

    imagesImpact = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ];


    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.images);
        this.loadImages(this.imagesImpact);
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.animate();
        this.throw();
    };

    throw () {
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 25);
    };

    throwLeft() {
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            this.x -= 10;
        }, 25);
    };


    animate() {

        setInterval(() => {
            if (world.throwBottle()) {
                this.playAnimation(this.images);
            } else if (world.bottleImpact()) {
                this.playAnimation(this.imagesImpact);
            }

        }, 50);
    };
};