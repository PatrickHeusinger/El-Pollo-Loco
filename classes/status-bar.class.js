class StatusBar extends DrawableObject {

    percent = 100;

    images = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png',

    ];

    constructor() {
        super();
        this.loadImages(this.images);
        this.setPercent(100);
        this.x = 30;
        this.y = 40;
        this.width = 170;
        this.height = 50;
    };

    setPercent(percent) {
        this.percent = percent;
        let path = this.images[this.getImageIndex()];
        this.img = this.imageCache[path];
    };

    getImageIndex() {
        if (this.percent == 100) {
            return 5;
        } else if (this.percent >= 80) {
            return 4;
        } else if (this.percent >= 60) {
            return 3;
        } else if (this.percent >= 40) {
            return 2;
        } else if (this.percent >= 20) {
            return 1;
        } else {
            this.percent = 0;
            return 0;
        };
    };
};