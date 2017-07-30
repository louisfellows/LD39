/// <reference path="../../lib/typescript/phaser.d.ts"/>

class Bike extends Phaser.Sprite {
    
    keyboard: Phaser.Keyboard;
    cursors: Phaser.CursorKeys;

    speed: number = 0;
    accel: number;
    maxSpeed: number;

    coins: number;

    engine: Phaser.Sound;

    private battery: number = 100;
    private batteryDischarge :number;
    private batteryRecharge : number;

    constructor(game: Phaser.Game, x: number, y: number, maxSpeed: number, accel: number, discharge: number, recharge: number, coins: number) {
        super(game, x, y, "bike");
        this.accel = accel;
        this.maxSpeed = maxSpeed;
        this.batteryDischarge = discharge;
        this.batteryRecharge = recharge;
        this.coins = coins;
    }

    create() {
        this.keyboard = this.game.input.keyboard;
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.anchor = new Phaser.Point(0.5,0.5);

        this.engine = this.game.add.audio('engine',10,true);
        this.engine.play();
    }

    update() {
        if (this.battery > 0) {
            this.speed += this.accel;
            if (this.speed > this.maxSpeed) {
                this.speed = this.maxSpeed;   
            }
        } else {
            this.speed -= 0.2;
            if (this.speed < 0) {
                this.speed = 0;
            }
        }

        if (this.speed > 0) {
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

        this.engine.volume = Phaser.Math.min(this.speed / 20, 0.5);        
        if (this.speed == 0) {
            this.engine.stop();
        }
    }

    getBattery() {
        return this.battery;
    }
    
    dischargeBattery() {
        this.battery -= this.batteryDischarge;
        if (this.battery < 0) {
            this.battery = 0;
        }
    }

    rechargeBattery() {
        this.battery += this.batteryRecharge;
        if (this.battery > 100) {
            this.battery = 100;
        }
    }

    collision() {
        this.speed = this.speed - 10;
    }

    addCoin() {
        this.coins += 1;
    }
}