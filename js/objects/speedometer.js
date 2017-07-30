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
var Speedometer = (function (_super) {
    __extends(Speedometer, _super);
    function Speedometer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Speedometer.prototype.init = function () {
        this.back = this.game.add.sprite(280, 490, 'speedo-back');
        this.add(this.back);
        this.pointer = this.game.add.sprite(380, 589, 'speedo-pointer');
        this.add(this.pointer);
        this.pointer.anchor = new Phaser.Point(0.95, 0.5);
    };
    Speedometer.prototype.updateSpeed = function (newSpeed) {
        if (this.pointer != null) {
            this.pointer.angle = newSpeed * 3;
        }
    };
    return Speedometer;
}(Phaser.Group));
