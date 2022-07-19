class Level {
    enemies;
    clouds;
    coins;
    bottles;
    backgroundObjects;
    levelEndX = 3200;

    /**
     * Constructor of the level
     * @param {*} enemies 
     * @param {*} clouds 
     * @param {*} coins 
     * @param {*} bottles 
     * @param {*} backgroundObjects 
     */

    constructor(enemies, clouds, coins, bottles, backgroundObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.coins = coins;
        this.bottles = bottles;
        this.backgroundObjects = backgroundObjects;
    }
}