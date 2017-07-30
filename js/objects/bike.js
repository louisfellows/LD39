/// <reference path="../../lib/typescript/phaser.d.ts"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bike = (function (_super) {
    __extends(Bike, _super);
    function Bike(game, x, y, maxSpeed, accel, discharge, recharge, coins) {
        var _this = _super.call(this, game, x, y, "bike") || this;
        _this.speed = 0;
        _this.battery = 100;
        _this.accel = accel;
        _this.maxSpeed = maxSpeed;
        _this.batteryDischarge = discharge;
        _this.batteryRecharge = recharge;
        _this.coins = coins;
        return _this;
    }
    Bike.prototype.create = function () {
        this.keyboard = this.game.input.keyboard;
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.anchor = new Phaser.Point(0.5, 0.5);
        this.engine = this.game.add.audio('engine', 10, true);
        this.engine.play();
    };
    Bike.prototype.update = function () {
        if (this.battery > 0) {
            this.speed += this.accel;
            if (this.speed > this.maxSpeed) {
                this.speed = this.maxSpeed;
            }
        }
        else {
            this.speed -= 0.2;
            if (this.speed < 0) {
                this.speed = 0;
            }
        }
        if (this.speed > 0) {
            if (this.cursors.left.isDown) {
                this.position.x -= 5;
                this.angle = -5;
            }
            else if (this.cursors.right.isDown) {
                this.position.x += 5;
                this.angle = +5;
            }
            else {
                this.angle = 0;
            }
            if (this.cursors.up.isDown) {
                this.position.y -= 5;
            }
            else if (this.cursors.down.isDown) {
                this.position.y += 5;
            }
        }
        this.engine.volume = Phaser.Math.min(this.speed / 20, 0.5);
        if (this.speed == 0) {
            this.engine.stop();
        }
    };
    Bike.prototype.getBattery = function () {
        return this.battery;
    };
    Bike.prototype.dischargeBattery = function () {
        this.battery -= this.batteryDischarge;
        if (this.battery < 0) {
            this.battery = 0;
        }
    };
    Bike.prototype.rechargeBattery = function () {
        this.battery += this.batteryRecharge;
        if (this.battery > 100) {
            this.battery = 100;
        }
    };
    Bike.prototype.collision = function () {
        this.speed = this.speed - 10;
    };
    Bike.prototype.addCoin = function () {
        this.coins += 1;
    };
    return Bike;
}(Phaser.Sprite));
