/// <reference path="../../lib/typescript/phaser.d.ts"/>

class Speedometer extends Phaser.Group {
    back: Phaser.Sprite;
    pointer: Phaser.Sprite;
    
    init() {
        this.back = this.game.add.sprite(280,490,'speedo-back');
        this.add(this.back);
        
        this.pointer = this.game.add.sprite(380,589,'speedo-pointer');
        this.add(this.pointer);
        this.pointer.anchor = new Phaser.Point(0.95,0.5);
    }

    updateSpeed(newSpeed: number) {
        if (this.pointer != null) {
            this.pointer.angle = newSpeed * 3; 
        }
    }
}