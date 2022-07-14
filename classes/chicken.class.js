class Chicken extends MovableObject {

    height = 80;
    y = 380;
    imagesWalking = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];



    constructor(x, y) {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.imagesWalking);


        this.x = 300 + Math.random() * 2800;
        this.speed = 0.15 + Math.random() * 0.35;

        this.animate();

    }

    animate() {
        setInterval(() => {
            this.moveLeft();
            this.otherDirection = false;

        }, 1000 / 60);
        this.moveLeft();
        setInterval(() => {
            this.playAnimation(this.imagesWalking);
        }, 100);

    }

}