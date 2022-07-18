class Character extends MovableObject {

    width = 120;
    height = 380;
    x = 100;
    y = 80;
    speed = 10;
    await = 1;
    world;
    walkingSound = new Audio('audio/running.mp3');
    jumpSound = new Audio('audio/jump.mp3');
    // throwSound = new Audio('audio/throw-2.mp3');

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

    ];

    imagesDead = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png',

    ];

    imagesHurt = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png',
    ];

    imagesWait = [
        './img/2_character_pepe/1_idle/idle/I-1.png',
        './img/2_character_pepe/1_idle/idle/I-2.png',
        './img/2_character_pepe/1_idle/idle/I-3.png',
        './img/2_character_pepe/1_idle/idle/I-4.png',
        './img/2_character_pepe/1_idle/idle/I-5.png',
        './img/2_character_pepe/1_idle/idle/I-6.png',
        './img/2_character_pepe/1_idle/idle/I-7.png',
        './img/2_character_pepe/1_idle/idle/I-8.png',
        './img/2_character_pepe/1_idle/idle/I-9.png',
        './img/2_character_pepe/1_idle/idle/I-10.png'
    ];


    imagesSleep = [
        './img/2_character_pepe/1_idle/long_idle/I-11.png',
        './img/2_character_pepe/1_idle/long_idle/I-12.png',
        './img/2_character_pepe/1_idle/long_idle/I-13.png',
        './img/2_character_pepe/1_idle/long_idle/I-14.png',
        './img/2_character_pepe/1_idle/long_idle/I-15.png',
        './img/2_character_pepe/1_idle/long_idle/I-16.png',
        './img/2_character_pepe/1_idle/long_idle/I-17.png',
        './img/2_character_pepe/1_idle/long_idle/I-18.png',
        './img/2_character_pepe/1_idle/long_idle/I-19.png',
        './img/2_character_pepe/1_idle/long_idle/I-20.png'
    ];


    constructor() {
        super().loadImage(this.imagesWalking[0]);
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesJumping);
        this.loadImages(this.imagesDead);
        this.loadImages(this.imagesHurt);
        this.loadImages(this.imagesWait);
        this.loadImages(this.imagesSleep);
        this.applyGravity();
        this.animate();
        this.jumpSound.volume = 0.1;
        this.walkingSound.volume = 0.5;
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
                this.jumpSound.play();
            }

            //      if (this.world.keyboard.D == true) {
            //          this.throwSound.pause();
            //          this.throwSound.currentTime = 0;
            //          this.throwSound.play();
            //      }

            this.world.cameraX = -this.x + 100;

        }, 1000 / 60);

        const stopInterval = setInterval(() => {

            if (this.isDead()) {
                this.playAnimation(this.imagesDead);
                setInterval(() => {
                    world.endscreen = new Endscreen();
                }, 500);
                clearInterval(stopInterval);
            } else if (this.isHurt()) {
                this.playAnimation(this.imagesHurt);
                this.await = 1;
            } else if (this.isAboveGround()) {
                this.playAnimation(this.imagesJumping);
                this.counter = 1;
            } else if (this.world.keyboard.D) {
                this.playAnimation(this.imagesWait);
                this.await = 1;
            } else {
                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    this.playAnimation(this.imagesWalking);
                    this.await = 1;
                } else {
                    this.awaitKeyboard();
                }
            }

        }, 50);

    }

    awaitKeyboard() {
        this.await++;
        if (this.await > 100) {
            this.playAnimation(this.imagesSleep);
        } else {
            this.playAnimation(this.imagesWait);
        }
    }
}