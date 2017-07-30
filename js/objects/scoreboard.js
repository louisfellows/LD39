/// <reference path="../../lib/typescript/phaser.d.ts"/>
var Scoreboard = (function () {
    function Scoreboard(game, x, y, colour, image) {
        this.game = game;
        this.game.add.sprite(x, y + 5, image);
        this.text = this.game.add.text(x + 16, y, "0");
        this.text.font = 'Stalinist One';
        this.text.fontSize = 25;
        this.text.fill = this.getGradient(colour);
    }
    Scoreboard.prototype.updateScore = function (newScore) {
        this.score = newScore;
        this.text.text = this.score.toString();
    };
    Scoreboard.prototype.buzzScore = function () {
        var origY = this.text.position.y;
        this.text.position.y -= 10;
        var tween = this.game.add.tween(this.text).to({ y: origY }, 1000, Phaser.Easing.Bounce.Out, true);
    };
    Scoreboard.prototype.displayHighscore = function (hiscore) {
        var hi = this.game.add.text(this.text.x - 16, this.text.y + 24, "Best: " + hiscore.toString(), { font: "Stalinist One", fontSize: 10 });
        hi.fill = this.getGradient('#8888FF');
    };
    Scoreboard.prototype.getGradient = function (colour) {
        var grd = this.text.context.createLinearGradient(0, 0, 0, this.text.canvas.height);
        grd.addColorStop(0, '#FFFFFF');
        grd.addColorStop(1, colour);
        return grd;
    };
    return Scoreboard;
}());
