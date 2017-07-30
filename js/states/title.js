/// <reference path="../../lib/typescript/phaser.d.ts"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Title = (function (_super) {
    __extends(Title, _super);
    function Title() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Title.prototype.create = function () {
        this.game.add.image(0, 0, 'title');
        this.game.add.button(200, 300, 'button-start', this.startGame, this, 2, 0, 1, 2);
    };
    Title.prototype.startGame = function () {
        this.game.state.start("Play", true, false, new Params());
    };
    return Title;
}(Phaser.State));
