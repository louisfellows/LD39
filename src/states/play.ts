/// <reference path="../../lib/typescript/phaser.d.ts"/>

class Play extends Phaser.State {

    game: Phaser.Game;

    road: Phaser.TileSprite;
    bike: Bike;
    bikeGroup: Phaser.Group;
    batBar: BatteryBar;

    furnGroup: Phaser.Group;
    furnMan : FurnitureManager;

    distance: number = 0;
    scoreboard: Scoreboard;
    coinsScore: Scoreboard;
    speedo: Speedometer;

    params: Params;

    init(params: Params){
        this.game.stage.disableVisibilityChange = true;
        this.params = params;
    }

    create(){
        this.distance = 0;

        this.road = this.game.add.tileSprite(0,0,500,600,'road');
        this.bike = new Bike(this.game,300,400,this.params.getMaxSpeed(),this.params.getMaxAccel(),this.params.getDischarge(), this.params.getRecharge(), this.params.coins);
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
        this.scoreboard = new Scoreboard(this.game,10,0,"#88E6FF","dist-sm");
        this.scoreboard.displayHighscore(this.params.highscore);
        this.coinsScore = new Scoreboard(this.game,180,0, "#FFD800", "coin-sm");

        this.speedo = new Speedometer(this.game);
        this.speedo.init();
        this.speedo.z = 3;
    }    

    update() {
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
            this.game.state.start("Upgrade",true,false,this.params);
        }
    }

    collisionHandler(bike: Bike, furn: Furniture ) {
        furn.collision(bike);
    }

    distanceToScore() : number{
        let score : number = this.distance;
        score = score / 10;
        score = Phaser.Math.floorTo(score, 0, 10);
        return score;
    }
}

