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
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.cameraX, 0);

        this.addObjectsToMap(this.level.backgroundObjects);

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);

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
            this.ctx.save();
            this.ctx.translate(move.width, 0);
            this.ctx.scale(-1, 1);
            move.x = move.x * -1;
        }
        this.ctx.drawImage(move.img, move.x, move.y, move.width, move.height);
        if (move.otherDirection) {
            move.x = move.x * -1;
            this.ctx.restore();
        }
    }
}