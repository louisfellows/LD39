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
var Play = (function (_super) {
    __extends(Play, _super);
    function Play() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.distance = 0;
        return _this;
    }
    Play.prototype.init = function (params) {
        this.game.stage.disableVisibilityChange = true;
        this.params = params;
    };
    Play.prototype.create = function () {
        this.distance = 0;
        this.road = this.game.add.tileSprite(0, 0, 500, 600, 'road');
        this.bike = new Bike(this.game, 300, 400, this.params.getMaxSpeed(), this.params.getMaxAccel(), this.params.getDischarge(), this.params.getRecharge(), this.params.coins);
        this.bike.create();
        this.bike.physicsEnabled = true;
        this.bike.physicsType = Phaser.Physics.ARCADE;
        this.game.add.existing(this.bike);
        this.game.physics.enable(this.bike, Phaser.Physics.ARCADE);
        this.furnGroup = this.add.group();
        this.furnGroup.z = 1;
        this.bikeGroup = this.add.group();
        this.bikeGroup.z = 2;
        this.bikeGroup.add(this.bike);
        this.furnMan = new FurnitureManager(this.game, this.furnGroup);
        this.furnGroup.enableBody = true;
        this.furnGroup.physicsBodyType = Phaser.Physics.ARCADE;
        this.batBar = new BatteryBar('battery', 250, 6, this.game);
        this.scoreboard = new Scoreboard(this.game, 10, 0, "#88E6FF", "dist-sm");
        this.scoreboard.displayHighscore(this.params.highscore);
        this.coinsScore = new Scoreboard(this.game, 180, 0, "#FFD800", "coin-sm");
        this.speedo = new Speedometer(this.game);
        this.speedo.init();
        this.speedo.z = 3;
    };
    Play.prototype.update = function () {
        this.furnMan.generate(this.game.time.now);
        if (this.road != null) {
            this.road.tilePosition.y += this.bike.speed;
            this.furnMan.setSpeeds(this.bike.speed);
            this.speedo.updateSpeed(this.bike.speed);
        }
        this.distance += this.bike.speed;
        this.scoreboard.updateScore(this.distanceToScore());
        this.coinsScore.updateScore(this.bike.coins);
        this.bike.dischargeBattery();
        this.batBar.setValue(this.bike.getBattery());
        this.game.physics.arcade.overlap(this.bike, this.furnGroup, this.collisionHandler, null, this);
        if (this.bike.speed == 0 && this.bike.getBattery() == 0) {
            this.params.coins = this.bike.coins;
            if (this.distanceToScore() > this.params.highscore) {
                this.params.highscore = this.distanceToScore();
            }
            this.game.state.start("Upgrade", true, false, this.params);
        }
    };
    Play.prototype.collisionHandler = function (bike, furn) {
        furn.collision(bike);
    };
    Play.prototype.distanceToScore = function () {
        var score = this.distance;
        score = score / 10;
        score = Phaser.Math.floorTo(score, 0, 10);
        return score;
    };
    return Play;
}(Phaser.State));
