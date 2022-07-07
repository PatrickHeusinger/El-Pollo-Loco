class World {

    character = new Character();
    level = level1;

    ctx;
    canvas;
    keyboard;
    cameraX = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
    }

    setWorld() {
        this.character.world = this;
    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                    if (this.character.isColliding(enemy)) {
                        console.log('Damage!');
                    }
                }

            );
        }, 100);
    }

    /*  if(charachter.x + charachter.width > chicken.x &&
            charachter.y + charachter.height > chicken.x &&
            charachter.x < chicken.x &&
            charachter.y < chicken + chicken.height
            )*/

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.cameraX, 0);

        this.addObjectsToMap(this.level.backgroundObjects);

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.coins);


        this.ctx.translate(-this.cameraX, -0);

        let self = this;
        requestAnimationFrame(function() {
            self.draw();

        });

    }
    addObjectsToMap(objects) {
        objects.forEach(obj => {
            this.addToMap(obj)
        })
    }

    addToMap(move) {
        if (move.otherDirection) {
            this.flipImage(move);
        }

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