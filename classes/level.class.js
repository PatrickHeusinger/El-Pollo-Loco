class Level {
    enemies;
    clouds;
    backgroundObjects;
    levelEndX = 3200;

    constructor(enemies, clouds, backgroundObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;

    }
}
/*
enemies = level1.enemies;
clouds = level1.clouds;

backgroundObjects = level1.backgroundObjects; */