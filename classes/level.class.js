class Level {
    enemies;
    clouds;
    coins;
    bottles;
    backgroundObjects;
    levelEndX = 3200;

    /**
     * Constructor of the level
     * @param {array} enemies images in this level
     * @param {array} clouds images in this level
     * @param {array} coins images in this level
     * @param {array} bottles images in this level
     * @param {array} backgroundObjects images in this level
     */

    constructor(enemies, clouds, coins, bottles, backgroundObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.coins = coins;
        this.bottles = bottles;
        this.backgroundObjects = backgroundObjects;
    }
}