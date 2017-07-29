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
var Play = (function (_super) {
    __extends(Play, _super);
    function Play() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Play.prototype.init = function () {
        this.game.stage.disableVisibilityChange = true;
    };
    Play.prototype.create = function () {
        this.road = this.game.add.tileSprite(0, 0, 500, 600, 'road');
        this.bike = new Bike(this.game, 300, 400, 'bike');
        this.bike.anchor = new Phaser.Point(0.5, 0.5);
        this.batBar = new BatteryBar('battery', 250, 0, this.game);
    };
    Play.prototype.update = function () {
        if (this.road != null) {
            this.road.tilePosition.y += this.bike.speed;
        }
        this.bike.battery -= 0.1;
        this.batBar.setValue(this.bike.battery);
    };
    return Play;
}(Phaser.State));