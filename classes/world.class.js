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
    gameOverSound = new Audio('audio/gameover.mp3');



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



    checkIteration() {
        setInterval(() => {
            this.checkCollisions();
            this.coinsCollision();
            this.bottleCollision();
            this.throwBottle();
            this.bottleImpact();
        }, 100);
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.energy -= 5;
                this.character.isHit();
                this.statusBar.setPercent(this.character.energy);
            }
        });
    }

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

    coinsCollision() {
        this.level.coins.forEach((coins, index) => {
            if (this.character.isColliding(coins)) {
                this.coinBar.collectCoin();
                this.coinBar.setPercent(this.coinBar.percent);
                this.level.coins.splice(index, 1);

            }
        });
    }


    bottleCollision() {
        this.level.bottles.forEach((bottles, index) => {
            if (this.character.isColliding(bottles)) {
                this.bottleBar.collectBottles();
                this.bottleBar.setPercent(this.bottleBar.percent);
                this.level.bottles.splice(index, 1);


            }
        });
    }


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


    gameOver() {
        //  this.gameOverSound.play();
        world.keyboard.RIGHT = false;
        world.keyboard.LEFT = false;
        world.keyboard.SPACE = false;
        world.keyboard.D = false;
    }


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


    addObjectsToMap(objects) {
        objects.forEach(obj => {
            this.addToMap(obj)
        });
    }


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

    flipImage(move) {
        this.ctx.save();
        this.ctx.translate(move.width, 0);
        this.ctx.scale(-1, 1);
        move.x = move.x * -1;
    }


    flipImageBack(move) {
        move.x = move.x * -1;
        this.ctx.restore();
    }

}