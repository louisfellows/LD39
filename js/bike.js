/// <reference path="../lib/typescript/phaser.d.ts"/>
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
    function Bike() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 0;
        _this.accel = 0.1;
        _this.battery = 100;
        return _this;
    }
    Bike.prototype.create = function () {
        this.keyboard = this.game.input.keyboard;
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.anchor = new Phaser.Point(0.5, 0.5);
    };
    Bike.prototype.update = function () {
        this.speed += this.accel;
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
    };
    return Bike;
}(Phaser.Sprite));
