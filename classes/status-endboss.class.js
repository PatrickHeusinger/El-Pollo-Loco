class StatusEndboss extends StatusBar {



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
        this.x = 3450;
        this.y = 0;
    };

    damageEndboss() {
        this.percent -= 20;
    };
};