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
var Charger = (function (_super) {
    __extends(Charger, _super);
    function Charger(game, x, y) {
        return _super.call(this, game, x, y, "charger") || this;
    }
    Charger.prototype.collision = function (bike) {
        bike.rechargeBattery();
    };
    return Charger;
}(Bonus));
