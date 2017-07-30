/// <reference path="../../lib/typescript/phaser.d.ts"/>

abstract class Obstacle extends Furniture {

    collided: boolean = false;

    collision(bike: Bike) {
        if (!this.collided) {
            let sfx = this.game.add.audio("hit",10,false);
            sfx.play();
            bike.collision();
            this.collided = true;
        }
    }
}