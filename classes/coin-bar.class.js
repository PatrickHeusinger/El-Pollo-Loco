class CoinBar extends StatusBar {

    percent = 0;
    y = 80;

    images = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png',
    ]

    constructor() {
        super();
        this.loadImages(this.images);
        this.setPercent(0);
    }

    collectCoin() {
        if (this.percent < 100) {
            this.percent += 20;
        }
    }


}