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
var Load = (function (_super) {
    __extends(Load, _super);
    function Load() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Load.prototype.preload = function () {
        this.game.load.image('title', 'assets/title.jpg');
        this.game.load.image('bike', 'assets/bike.png');
        this.game.load.image('road', 'assets/road.png');
        this.game.load.image('battery', 'assets/battery.png');
        this.game.load.image('charger', 'assets/charger.png');
        this.game.load.image('barrier', 'assets/barrier.png');
        this.game.load.image('coin', 'assets/coin.png');
        this.game.load.image('coin-sm', 'assets/coin-sm.png');
        this.game.load.image('dist-sm', 'assets/dist-sm.png');
        this.game.load.image('speedo-back', 'assets/speedo-back.png');
        this.game.load.image('speedo-pointer', 'assets/speedo-pointer.png');
        this.game.load.spritesheet('button-engine', 'assets/button-engine.png', 100, 100);
        this.game.load.spritesheet('button-gearbox', 'assets/button-gears.png', 100, 100);
        this.game.load.spritesheet('button-battery', 'assets/button-battery.png', 100, 100);
        this.game.load.spritesheet('button-recharge', 'assets/button-recharge.png', 100, 100);
        this.game.load.spritesheet('button-continue', 'assets/button-continue.png', 100, 20);
        this.game.load.spritesheet('button-start', 'assets/button-start.png', 100, 20);
        this.game.load.spritesheet('stars', 'assets/stars.png', 100, 20);
        this.game.load.audio('engine', 'assets/BikeEngine.wav');
        this.game.load.audio('charge', 'assets/Charge.wav');
        this.game.load.audio('click', 'assets/Click.wav');
        this.game.load.audio('coin', 'assets/Coin.wav');
        this.game.load.audio('hit', 'assets/hit.wav');
        //this.game.load.script("webfont", "//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js");
    };
    Load.prototype.create = function () {
        //Load fonts, then continue!
        //this.game.state.start("Upgrade",true,false,new Params());
        this.game.state.start("Title", true, false, new Params());
    };
    return Load;
}(Phaser.State));
