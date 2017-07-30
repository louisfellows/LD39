/// <reference path="../../lib/typescript/phaser.d.ts"/>

class Title extends Phaser.State {

    game: Phaser.Game;

    create() {
        this.game.add.image(0,0,'title');
        this.game.add.button(200,300,'button-start',this.startGame,this,2,0,1,2);
    }

    startGame() {
        this.game.state.start("Play",true,false,new Params());
    }
}