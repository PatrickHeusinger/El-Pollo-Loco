class World {

    character = new Character();
    level = level1;

    ctx;
    canvas;
    keyboard;
    cameraX = 0;
    statusEndboss = new StatusEndboss();
    statusBar = new StatusBar();
    bottleBar = new BottleBar();
    coinBar = new CoinBar();
    throwableObjects = [];
    hits = 0;
    endscreen;


    /**
     * Set the world and check everything in the whole game
     * @param {canvas} canvas for the whole game access
     * @param {keyboard} keyboard for the whole game access
     */

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
        this.coinsCollision();
        this.bottleCollision();
        this.checkIteration();
        this.bottleImpact();
    }

    setWorld() {
        this.character.world = this;
    }


    /**
     * Check all intervals with 100ms
     */

    checkIteration() {
        setInterval(() => {
            this.checkCollisions();
            this.coinsCollision();
            this.bottleCollision();
            this.throwBottle();
            this.bottleImpact();
        }, 100);
    }


    /**
     * Check collisions between character and enemy 
     * Negate the energy level after collision
     */

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.energy -= 5;
                this.character.isHit();
                this.statusBar.setPercent(this.character.energy);
            }
        });
    }


    /**
     * Check if a bootle has an impact
     */

    bottleImpact() {
        this.level.enemies.forEach((enemy) => {
            this.throwableObjects.forEach((bottles) => {
                if (bottles.isColliding(enemy)) {
                    this.hits += 20;
                    this.throwableObjects.splice(0, 1);
                    enemy.endBossIsHit();
                    this.statusEndboss.damageEndboss();
                    this.statusEndboss.setPercent(this.statusEndboss.percent);
                    console.log('Hit Enemy :', this.hits);
                }
            })
        });
    }


    /**
     * Check if character have an collision with a coin 
     * and splice the coin from the canvas
     */

    coinsCollision() {
        this.level.coins.forEach((coins, index) => {
            if (this.character.isColliding(coins)) {
                this.coinBar.collectCoin();
                this.coinBar.setPercent(this.coinBar.percent);
                this.level.coins.splice(index, 1);
            }
        });
    }


    /**
     * Check collision between character and bottle 
     * and set percent in the bottlebar
     */

    bottleCollision() {
        this.level.bottles.forEach((bottles, index) => {
            if (this.character.isColliding(bottles)) {
                this.bottleBar.collectBottles();
                this.bottleBar.setPercent(this.bottleBar.percent);
                this.level.bottles.splice(index, 1);
            }
        });
    }


    /**
     * Check when a bottle is throwing and set percentage from the bootle bar 
     */

    throwBottle() {
        if (this.bottleBar.percent == 0) {
            world.keyboard.D = false;
        }
        if (this.keyboard.D) {
            this.bottleBar.percent -= 20;
            this.bottleBar.setPercent(this.bottleBar.percent);
            this.keyboard.D = false;
            let bottle = new ThrowableObject(this.character.x + 50, this.character.y + 250);
            this.throwableObjects.splice(0, 1);
            this.throwableObjects.push(bottle);
        }
    }


    /**
     * Lock the keyboard when game is over
     */

    gameOver() {
        setInterval(() => {
            world.keyboard.RIGHT = false;
            world.keyboard.LEFT = false;
            world.keyboard.SPACE = false;
            world.keyboard.D = false;
        }, 16);

    }


    /**
     * Draw the whole canvas content 
     */

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.cameraX, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addToMap(this.statusEndboss);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
        this.ctx.translate(-this.cameraX, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.bottleBar);
        this.addToMap(this.coinBar);
        if (this.endscreen) {
            this.addToMap(this.endscreen);
            this.gameOver();
        }
        this.ctx.translate(this.cameraX, 0);
        this.ctx.translate(-this.cameraX, 0);
        let self = this;
        requestAnimationFrame(function() {
            self.draw();

        });
    }


    /**
     * Add objects to the canvas draw method
     * @param {objects} objects access to the whole game
     */

    addObjectsToMap(objects) {
        objects.forEach(obj => {
            this.addToMap(obj)
        });
    }


    /**
     * Draw the Images an check if character is walking right or left
     * @param {move} move access to the whole game
     */

    addToMap(move) {
        if (move.otherDirection) {
            this.flipImage(move);
        };
        move.draw(this.ctx);
        move.drawFrame(this.ctx);
        if (move.otherDirection) {
            this.flipImageBack(move);
        }
    }

    /**
     * Flip image when character change the direction
     * @param {move} move to check if the image is moved to the other direction
     */

    flipImage(move) {
        this.ctx.save();
        this.ctx.translate(move.width, 0);
        this.ctx.scale(-1, 1);
        move.x = move.x * -1;
    }


    /**
     * Flip image back when character change the direction back
     * @param {move} move to flip image back when direction is changed back
     */

    flipImageBack(move) {
        move.x = move.x * -1;
        this.ctx.restore();
    }
}