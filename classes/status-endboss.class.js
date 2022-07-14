class StatusEndboss extends StatusBar {



    images = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/100.png',

    ];

    constructor() {
        super();
        this.loadImages(this.images);
        this.setPercent(100);
        this.x = 3400;
        this.y = 0;
    }

    damageEndboss() {
        this.percent -= 20;
    }
}