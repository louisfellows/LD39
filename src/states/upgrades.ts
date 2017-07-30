/// <reference path="../../lib/typescript/phaser.d.ts"/>

class Upgrades {

    game: Phaser.Game;

    params: Params;

    engineStars: Phaser.Sprite;
    gearboxStars: Phaser.Sprite;
    batteryStars: Phaser.Sprite;
    rechargeStars: Phaser.Sprite;

    coins: Scoreboard;

    yesSfx: Phaser.Sound;
    noSfx: Phaser.Sound;

    init(params: Params) {
        this.params = params;
    }

    create() {
        this.game.stage.backgroundColor = "#020028";

        let title = this.game.add.text(this.game.width / 2, 60, "Upgrade Store",{font: "Stalinist One", fontSize: 36, align: "Center"});
        title.anchor.set(0.5); 

        let grd: CanvasGradient = title.context.createLinearGradient(0, 0, 0, title.canvas.height);
        grd.addColorStop(0, '#FFFFFF');   
        grd.addColorStop(1, '#88E6FF'); 
        title.fill = grd;

        this.coins = new Scoreboard(this.game, 225,150,"#FFD800", "coin-sm");
        this.coins.updateScore(this.params.coins);


        let upEngine = this.game.add.button(125,200,"button-engine",this.upEngineCb,this,2,0,1,2);
        this.engineStars = this.game.add.sprite(125,300,"stars",this.params.engineLevel);
        
        let upGearbox = this.game.add.button(275,200,"button-gearbox",this.upGearboxCb,this,2,0,1,2);
        this.gearboxStars = this.game.add.sprite(275,300,"stars",this.params.gearboxLevel);
        
        let upBattery = this.game.add.button(125,350,"button-battery",this.upBatteryCb,this,2,0,1,2);
        this.batteryStars = this.game.add.sprite(125,450,"stars",this.params.batteryLevel);
        
        let upRecharge = this.game.add.button(275,350,"button-recharge",this.upRechargeCb,this,2,0,1,2);
        this.rechargeStars = this.game.add.sprite(275,450,"stars",this.params.rechargeLevel);
       
        let continueButton = this.game.add.button(300, 550, "button-continue", this.continue, this, 2,0,1,2);

        this.yesSfx = this.game.add.audio("click",10,false);
        this.noSfx = this.game.add.audio("hit",10,false);
    }

    continue() {
        this.game.state.start("Play",true,false,this.params);
    }

    upEngineCb() {
        if (this.params.coins >= this.params.engineLevel  && this.params.engineLevel < 5) {    
            this.params.coins -= this.params.engineLevel;
            this.params.engineLevel += 1;
            this.engineStars.frame = this.params.engineLevel;
            this.coins.updateScore(this.params.coins);
            this.yesSfx.play();
        } else {
            this.coins.buzzScore();
            this.noSfx.play();
        }
    }
    upGearboxCb() {
        if (this.params.coins >= this.params.gearboxLevel && this.params.gearboxLevel < 5) {
            this.params.coins -= this.params.gearboxLevel;
            this.params.gearboxLevel += 1;
            this.gearboxStars.frame = this.params.gearboxLevel;
            this.coins.updateScore(this.params.coins);
            this.yesSfx.play();
        } else {
            this.coins.buzzScore();
            this.noSfx.play();
        }
    }
    upBatteryCb() {
        if (this.params.coins >= this.params.batteryLevel && this.params.batteryLevel < 5) {
            this.params.coins -= this.params.batteryLevel;
            this.params.batteryLevel += 1;
            this.batteryStars.frame = this.params.batteryLevel;
            this.coins.updateScore(this.params.coins);
            this.yesSfx.play();
        } else {
            this.coins.buzzScore();
            this.noSfx.play();
        }
    }
    upRechargeCb() {
        if (this.params.coins >= this.params.rechargeLevel && this.params.rechargeLevel < 5) {
            this.params.coins -= this.params.rechargeLevel;
            this.params.rechargeLevel += 1;
            this.rechargeStars.frame = this.params.rechargeLevel;
            this.coins.updateScore(this.params.coins);
            this.yesSfx.play();
        } else {
            this.coins.buzzScore();
            this.noSfx.play();
        }
    }
}