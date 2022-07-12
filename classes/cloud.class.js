class Cloud extends MovableObject {

    x = Math.random() * 6000;
    y = 0 + Math.random() * 60;
    speed = 0.1 + Math.random() * 1;
    width = 500;
    height = 250;

    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');
        this.animate();


    }
    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 25);
    }


}