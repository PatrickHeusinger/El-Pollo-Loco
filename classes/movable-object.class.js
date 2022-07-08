class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2;
    energy = 100;
    lastHit = 0;


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



    isColliding(move) {
        return this.x + this.width > move.x &&
            this.y + this.height > move.y &&
            this.x < move.x &&
            this.y < move.y + move.height;
    }

    isHit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
            this.isDead();
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 0.5;
    }

    isDead() {
        return this.energy == 0;

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
        let i = this.currentImage % images.length;
        if ((this instanceof Character) && images == this.imagesDead && i == images.length - 4) {

        } else {
            let path = images[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }

    }
}