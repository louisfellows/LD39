/// <reference path="../lib/typescript/phaser.d.ts"/>

class Bike extends Phaser.Sprite {
    
    keyboard: Phaser.Keyboard;
    cursors: Phaser.CursorKeys;

    speed: number = 0;
    accel: number = 0.1;

    battery: number = 100;

    create() {
        this.keyboard = this.game.input.keyboard;
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.anchor = new Phaser.Point(0.5,0.5);
    }

    update() {
        this.speed += this.accel;

        if(this.cursors.left.isDown) {
            this.position.x -= 5;
            this.angle = -5;
        } else if (this.cursors.right.isDown) {
            this.position.x += 5;
            this.angle = +5;
        } else {
            this.angle = 0;
        }

        if(this.cursors.up.isDown) {
            this.position.y -= 5;
        } else if (this.cursors.down.isDown) {
            this.position.y += 5;
        }
    }
}