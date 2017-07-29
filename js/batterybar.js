/// <reference path="../lib/typescript/phaser.d.ts"/>
var BatteryBar = (function () {
    function BatteryBar(image, x, y, game) {
        this.barFull = 183;
        this.game = game;
        this.pos = new Phaser.Point(x, y);
        this.bar = this.game.add.graphics(x, y);
        this.bar.lineStyle(2, 0xFFAA00, 1);
        this.bar.beginFill(0xFFAA00, 1);
        this.bar.drawRect(12, 6, this.barFull, 15);
        this.bar.endFill();
        this.img = this.game.add.image(x, y, image);
    }
    BatteryBar.prototype.setValue = function (val) {
        this.bar.width = (this.barFull / 100) * val;
    };
    return BatteryBar;
}());
