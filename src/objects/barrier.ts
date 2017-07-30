/// <reference path="../../lib/typescript/phaser.d.ts"/>

class Barrier extends Obstacle {
    constructor(game: Phaser.Game, x: number, y: number) {
        super(game, x, y, "barrier");
    } 
}