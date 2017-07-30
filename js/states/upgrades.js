/// <reference path="../../lib/typescript/phaser.d.ts"/>
var Upgrades = (function () {
    function Upgrades() {
    }
    Upgrades.prototype.init = function (params) {
        this.params = params;
    };
    Upgrades.prototype.create = function () {
        this.game.stage.backgroundColor = "#020028";
        var title = this.game.add.text(this.game.width / 2, 60, "Upgrade Store", { font: "Revalia", fontSize: 50, align: "Center" });
        title.anchor.set(0.5);
        var grd = title.context.createLinearGradient(0, 0, 0, title.canvas.height);
        grd.addColorStop(0, '#FFFFFF');
        grd.addColorStop(1, '#88E6FF');
        title.fill = grd;
        this.coins = new Scoreboard(this.game, 225, 150, "#FFD800", "coin-sm");
        this.coins.updateScore(this.params.coins);
        var upEngine = this.game.add.button(125, 200, "button-engine", this.upEngineCb, this, 2, 0, 1, 2);
        this.engineStars = this.game.add.sprite(125, 300, "stars", this.params.engineLevel);
        var upGearbox = this.game.add.button(275, 200, "button-gearbox", this.upGearboxCb, this, 2, 0, 1, 2);
        this.gearboxStars = this.game.add.sprite(275, 300, "stars", this.params.gearboxLevel);
        var upBattery = this.game.add.button(125, 350, "button-battery", this.upBatteryCb, this, 2, 0, 1, 2);
        this.batteryStars = this.game.add.sprite(125, 450, "stars", this.params.batteryLevel);
        var upRecharge = this.game.add.button(275, 350, "button-recharge", this.upRechargeCb, this, 2, 0, 1, 2);
        this.rechargeStars = this.game.add.sprite(275, 450, "stars", this.params.rechargeLevel);
        var continueButton = this.game.add.button(300, 550, "button-continue", this.continue, this, 2, 0, 1, 2);
    };
    Upgrades.prototype.continue = function () {
        this.game.state.start("Play", true, false, this.params);
    };
    Upgrades.prototype.upEngineCb = function () {
        if (this.params.coins > 0 && this.params.engineLevel < 5) {
            this.params.engineLevel += 1;
            this.engineStars.frame = this.params.engineLevel;
            this.params.coins -= 1;
            this.coins.updateScore(this.params.coins);
        }
        else {
            this.coins.buzzScore();
        }
    };
    Upgrades.prototype.upGearboxCb = function () {
        if (this.params.coins > 0 && this.params.gearboxLevel < 5) {
            this.params.gearboxLevel += 1;
            this.gearboxStars.frame = this.params.gearboxLevel;
            this.params.coins -= 1;
            this.coins.updateScore(this.params.coins);
        }
        else {
            this.coins.buzzScore();
        }
    };
    Upgrades.prototype.upBatteryCb = function () {
        if (this.params.coins > 0 && this.params.batteryLevel < 5) {
            this.params.batteryLevel += 1;
            this.batteryStars.frame = this.params.batteryLevel;
            this.params.coins -= 1;
            this.coins.updateScore(this.params.coins);
        }
        else {
            this.coins.buzzScore();
        }
    };
    Upgrades.prototype.upRechargeCb = function () {
        if (this.params.coins > 0 && this.params.rechargeLevel < 5) {
            this.params.rechargeLevel += 1;
            this.rechargeStars.frame = this.params.rechargeLevel;
            this.params.coins -= 1;
            this.coins.updateScore(this.params.coins);
        }
        else {
            this.coins.buzzScore();
        }
    };
    return Upgrades;
}());
