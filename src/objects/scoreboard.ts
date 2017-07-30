/// <reference path="../../lib/typescript/phaser.d.ts"/>

class Scoreboard {
    game : Phaser.Game;
    score : number;
    text : Phaser.Text;

    hiscore: number;

    constructor (game: Phaser.Game, x: number, y: number, colour: string, image: string) {
        this.game = game;

        this.game.add.sprite(x,y+5,image);

        this.text = this.game.add.text(x+16,y,"0");
        this.text.font = 'Revalia';
        this.text.fontSize = 25;
        
        this.text.fill = this.getGradient(colour);
    }

    updateScore(newScore: number) {
        this.score = newScore;
        this.text.text = this.score.toString();
    }

    buzzScore() {
        let origY = this.text.position.y;
        this.text.position.y -= 10;
        let tween = this.game.add.tween(this.text).to( { y: origY }, 1000, Phaser.Easing.Bounce.Out, true);
    }

    displayHighscore(hiscore:number) {
        let hi = this.game.add.text(this.text.x - 16, this.text.y + 24, "Best: " + hiscore.toString(), {font: "Revalia", fontSize: 10}); 
        hi.fill = this.getGradient('#8888FF')
    }

    private getGradient(colour:string) : CanvasGradient {

        let grd: CanvasGradient = this.text.context.createLinearGradient(0, 0, 0, this.text.canvas.height);
        grd.addColorStop(0, '#FFFFFF');   
        grd.addColorStop(1, colour); 
        return grd;
    }
}