/// <reference path="../../lib/typescript/phaser.d.ts"/>

abstract class Furniture extends Phaser.Sprite {
        
    speed: number;

    abstract collision(bike: Bike);

    setSpeed(newSpeed: number) {
        this.speed = newSpeed;
    }

    update() {
        this.position.y += this.speed;
        if (this.position.y > 800) { //If we're off the screen.
            this.destroy;
        }
    }

}