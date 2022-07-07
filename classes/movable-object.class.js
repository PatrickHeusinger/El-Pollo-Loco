class MovableObject {
    x = 120;
    y = 300;
    img;
    width = 100;
    height = 150;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);

    }

    isAboveGround() {
        return this.y < 80

    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '1';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    isColliding(move) {
        return this.x + this.width > move.x &&
            this.y + this.height > move.y &&
            this.x < move.x &&
            this.y < move.y + move.height;
    }

    loadImages(array) {
        array.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });

    }

    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;

    }

    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = true;

    }

    jump() {
        this.speedY = 30;
    }


    playAnimation(images) {
        let i = this.currentImage % this.imagesWalking.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;

    }

}