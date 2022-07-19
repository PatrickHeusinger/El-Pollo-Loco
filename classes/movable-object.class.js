class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2;
    energy = 100;
    lastHit = 0;

    /**
     * Simulate the gravity when the character is jumping
     */

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    /**
     * Check if the character is in the air or on ground
     * @returns 
     */

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 80
        }
    }

    /**
     * Check the frames between character and enemies are coliding
     * @param {*} move 
     * @returns 
     */


    isColliding(move) {
        return this.x + this.width > move.x &&
            this.y + this.height > move.y &&
            this.x < move.x &&
            this.y < move.y + move.height;
    }

    /**
     * Check if enemy is hitten and negate the energy level from character
     */

    isHit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
            this.isDead();
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * Check if endboss is hitten and negate the energy level
     */

    endBossIsHit() {
        this.energy -= 20;
        if (this.energy < 0) {
            this.energy = 0;
            this.isDead();
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * Check if endboss is hitten and animate endboss is hurt
     * @returns 
     */

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 0.5;
    }

    /**
     * Check if endboss is dead
     * @returns 
     */

    isDead() {
        return this.energy == 0;
    }

    /**
     * Controll the moving directions
     */

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

    /**
     * Check animations and stop it when character or endboss is dead
     * @param {*} images 
     */

    playAnimation(images) {
        let i = this.currentImage % images.length;
        if ((this instanceof Character || this instanceof Endboss) && images == this.imagesDead && i == images.length - 3) {

        } else {
            let path = images[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }
    }
}