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
var Load = (function (_super) {
    __extends(Load, _super);
    function Load() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Load.prototype.preload = function () {
        this.game.load.image('bike', 'assets/bike.png');
        this.game.load.image('road', 'assets/road.png');
        this.game.load.image('battery', 'assets/battery.png');
    };
    Load.prototype.create = function () {
        this.game.state.start("Play");
    };
    return Load;
}(Phaser.State));
