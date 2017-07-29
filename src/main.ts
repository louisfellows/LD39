/// <reference path="../lib/typescript/phaser.d.ts"/>

class LD39 {
    constructor() {
        var game = new Phaser.Game(500, 600, Phaser.AUTO, document.getElementById('game'));
        game.state.add('Load', Load);
        game.state.add('Play', Play);
        game.state.start('Load');
    }
}

window.onload = () => {
    var game = new LD39();
}
