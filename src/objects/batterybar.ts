/// <reference path="../../lib/typescript/phaser.d.ts"/>

class BatteryBar {  

    img: Phaser.Image;
    pos: Phaser.Point;
    bar: Phaser.Graphics;

    barFull: number = 183;

    game: Phaser.Game;

    constructor(image: string, x: number, y:number, game:Phaser.Game) {
        this.game = game;
        this.pos = new Phaser.Point(x,y);

        this.bar = this.game.add.graphics(x,y);
        this.bar.lineStyle(2,0xFFAA00,1);
        this.bar.beginFill(0xFFAA00,1);
        this.bar.drawRect(12,6,this.barFull,15);
        this.bar.endFill();
        
        this.img = this.game.add.image(x,y,image);
    }

    setValue (val: number) {
        this.bar.width = (this.barFull / 100) * val;
    }
    
}