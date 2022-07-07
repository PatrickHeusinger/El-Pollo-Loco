class Character extends MovableObject {

    width = 120;
    height = 380;
    x = 100;
    y = 0;
    speed = 10;

    imagesWalking = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];
    imagesJumping = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png',

    ]
    world;
    walkingSound = new Audio('audio/running.mp3');


    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesJumping);
        this.applyGravity();
        this.animate();
    }

    animate() {

        setInterval(() => {
            this.walkingSound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.levelEndX) {
                this.moveRight();
                this.walkingSound.play();
            }

            if (this.world.keyboard.LEFT && this.x > 0) {
                this.moveLeft();
                this.walkingSound.play();

            }

            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
            }


            this.world.cameraX = -this.x + 100;
        }, 1000 / 60);

        setInterval(() => {

            if (this.isAboveGround()) {
                this.playAnimation(this.imagesJumping);
            } else {



                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {

                    this.playAnimation(this.imagesWalking);
                }
            }
        }, 50);

    }



}