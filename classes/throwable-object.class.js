class ThrowableObject extends MovableObject {



    imagesThrow = [
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
        this.loadImages(this.imagesThrow);
        this.loadImages(this.imagesImpact);
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.animate();
        this.throw();
    }


    throw () {
        let throwLeft;
        this.speedY = 30;
        this.applyGravity();

        if (world.character.otherDirection) {
            throwLeft = true;
        }

        setInterval(() => {
            if (this.isAboveGround()) {
                if (!throwLeft) {
                    this.x += 10;
                } else {
                    this.x -= 10;
                }
            }
        }, 1000 / 60);
    }

    animate() {

        setInterval(() => {
            this.playAnimation(this.imagesThrow);
            if (world.throwBottle()) {
                this.playAnimation(this.imagesThrow);
            } else if (world.bottleImpact()) {
                this.playAnimation(this.imagesImpact);
            }
        }, 50);
    }
}