/// <reference path="../../lib/typescript/phaser.d.ts"/>

class LD39 {
    constructor() {
        var game = new Phaser.Game(500, 600, Phaser.AUTO, document.getElementById('game'));
        game.state.add('Load', Load);
        game.state.add('Play', Play);
        game.state.add('Upgrade', Upgrades);
        game.state.add('Title', Title);
        game.state.start('Load');
    }
}


window.onload = () => {
    let loadFonts = {
        active : function() {
            console.log("Fonts Loaded");
            let game = new LD39();
        },

        google: {
            families: ['Revalia', 'Frijole', 'Stalinist One']
        }
    }

    WebFont.load(loadFonts);
}
