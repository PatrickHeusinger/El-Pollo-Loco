class BottleBar extends StatusBar {
    percent = 0;
    y = 0;

    images = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png',
    ];

    constructor() {
        super();
        this.loadImages(this.images);
        this.setPercent(0);

    };

    collectBottles() {
        if (this.percent < 100) {
            this.percent += 20;
        };
    };


};