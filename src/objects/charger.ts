/// <reference path="../../lib/typescript/phaser.d.ts"/>

class Charger extends Bonus {

    constructor(game: Phaser.Game, x: number, y: number) {
        super(game, x, y, "charger");
    }
   
    collision(bike: Bike) {
        bike.rechargeBattery();
    }
}