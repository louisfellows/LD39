/// <reference path="../../lib/typescript/phaser.d.ts"/>

class Load extends Phaser.State {

    game: Phaser.Game;

    preload() {
        this.game.load.image('bike','assets/bike.png');
        this.game.load.image('road','assets/road.png');
        this.game.load.image('battery','assets/battery.png');
        this.game.load.image('charger','assets/charger.png');
        this.game.load.image('barrier','assets/barrier.png');
        this.game.load.image('coin','assets/coin.png');
        this.game.load.image('coin-sm','assets/coin-sm.png');
        this.game.load.image('dist-sm','assets/dist-sm.png');
        this.game.load.image('speedo-back','assets/speedo-back.png');
        this.game.load.image('speedo-pointer','assets/speedo-pointer.png');
        this.game.load.spritesheet('button-engine','assets/button-engine.png',100,100);
        this.game.load.spritesheet('button-gearbox','assets/button-gears.png',100,100);
        this.game.load.spritesheet('button-battery','assets/button-battery.png',100,100);
        this.game.load.spritesheet('button-recharge','assets/button-recharge.png',100,100);
        this.game.load.spritesheet('button-continue','assets/button-continue.png',100,20);
        this.game.load.spritesheet('stars','assets/stars.png',100,20);
        
        //this.game.load.script("webfont", "//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js");
    }

    create() {
        //Load fonts, then continue!
        
        //this.game.state.start("Upgrade",true,false,new Params());
        this.game.state.start("Play",true,false,new Params());
    }

    
}