/// <reference path="../../lib/typescript/phaser.d.ts"/>
var LD39 = (function () {
    function LD39() {
        var game = new Phaser.Game(500, 600, Phaser.AUTO, document.getElementById('game'));
        game.state.add('Load', Load);
        game.state.add('Play', Play);
        game.state.add('Upgrade', Upgrades);
        game.state.start('Load');
    }
    return LD39;
}());
window.onload = function () {
    var loadFonts = {
        active: function () {
            console.log("Fonts Loaded");
            var game = new LD39();
        },
        google: {
            families: ['Revalia']
        }
    };
    WebFont.load(loadFonts);
};
