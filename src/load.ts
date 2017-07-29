/// <reference path="../lib/typescript/phaser.d.ts"/>

class Load extends Phaser.State {

    game: Phaser.Game;

    preload() {
        this.game.load.image('bike','assets/bike.png');
        this.game.load.image('road','assets/road.png');
        this.game.load.image('battery','assets/battery.png');
    }

    create() {
        this.game.state.start("Play");
    }
}