class Level {
    enemies;
    clouds;
    coins;
    bottles;
    backgroundObjects;
    levelEndX = 3200;

    /**
     * Constructor of the level
     * @param {enemies} enemies in this level
     * @param {clouds} clouds in this level
     * @param {coins} coins in this level
     * @param {bottles} bottles in this level
     * @param {backgroundObjects} backgroundObjects in this level
     */

    constructor(enemies, clouds, coins, bottles, backgroundObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.coins = coins;
        this.bottles = bottles;
        this.backgroundObjects = backgroundObjects;
    }
}