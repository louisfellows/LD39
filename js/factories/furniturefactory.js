/// <reference path="../../lib/typescript/phaser.d.ts"/>
var FurnitureManager = (function () {
    function FurnitureManager(game) {
        this.objects = [];
        this.game = game;
    }
    FurnitureManager.prototype.generate = function (now) {
        if (now - this.lastDelta > 500) {
            var newOb = new Charger(this.game, Phaser.Math.random(0, 550), -100);
            this.game.add.existing(newOb);
            this.objects.push(newOb);
        }
    };
    FurnitureManager.prototype.setSpeeds = function (newSpeed) {
        for (var _i = 0, _a = this.objects; _i < _a.length; _i++) {
            var obj = _a[_i];
            obj.setSpeed(newSpeed);
        }
    };
    return FurnitureManager;
}());
