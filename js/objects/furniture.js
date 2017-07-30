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
var Furniture = (function (_super) {
    __extends(Furniture, _super);
    function Furniture() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Furniture.prototype.setSpeed = function (newSpeed) {
        this.speed = newSpeed;
    };
    Furniture.prototype.update = function () {
        this.position.y += this.speed;
        if (this.position.y > 800) {
            this.destroy;
        }
    };
    return Furniture;
}(Phaser.Sprite));
