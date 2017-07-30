/// <reference path="../../lib/typescript/phaser.d.ts"/>

class Charger extends Bonus {

    constructor(game: Phaser.Game, x: number, y: number) {
        super(game, x, y, "charger");
    }
   
    collision(bike: Bike) {
        let sfx = this.game.add.audio("charge",10,false);
        sfx.play();
        bike.rechargeBattery();
    }
}