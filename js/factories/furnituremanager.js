/// <reference path="../../lib/typescript/phaser.d.ts"/>
var FurnitureManager = (function () {
    function FurnitureManager(game, group) {
        this.lastDelta = 0;
        this.game = game;
        this.group = group;
    }
    FurnitureManager.prototype.generate = function (now) {
        if (now - this.lastDelta > 500) {
            var newOb = this.randomObject();
            //this.game.add.existing(newOb);
            this.group.add(newOb);
            newOb.body.immovable = true;
            this.lastDelta = now;
        }
    };
    FurnitureManager.prototype.setSpeeds = function (newSpeed) {
        for (var _i = 0, _a = this.group.children; _i < _a.length; _i++) {
            var obj = _a[_i];
            obj.setSpeed(newSpeed);
        }
    };
    FurnitureManager.prototype.randomObject = function () {
        var type = this.game.rnd.integerInRange(1, 4);
        var x = this.game.rnd.integerInRange(0, 550);
        switch (type) {
            case 1:
                return new Charger(this.game, x, -100);
            case 2:
                return new Charger(this.game, x, -100);
            case 3:
                return new Barrier(this.game, x, -100);
            case 4:
                return new Coin(this.game, x, -100);
        }
    };
    return FurnitureManager;
}());
