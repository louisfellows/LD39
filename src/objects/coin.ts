/// <reference path="../../lib/typescript/phaser.d.ts"/>

class Coin extends Bonus {

    constructor(game: Phaser.Game, x: number, y: number) {
        super(game, x, y, "coin");
    }

    collision(bike: Bike) {
        let sfx = this.game.add.audio("coin",10,false);
        sfx.play();
        bike.addCoin();
        this.destroy();
    }
}