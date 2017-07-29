/// <reference path="../lib/typescript/phaser.d.ts"/>

class Play extends Phaser.State {

    road: Phaser.TileSprite;
    bike: Bike;
    batBar: BatteryBar;

    game: Phaser.Game;

    init(){
        this.game.stage.disableVisibilityChange = true;
    }

    create(){
        this.road = this.game.add.tileSprite(0,0,500,600,'road');
        this.bike = new Bike(this.game,300,400,'bike');
        this.bike.anchor = new Phaser.Point(0.5,0.5);

        this.batBar = new BatteryBar('battery', 250, 0, this.game);        
    }

    update() {
        if (this.road != null) {
            this.road.tilePosition.y += this.bike.speed;
        }

        this.bike.battery -= 0.1;
        this.batBar.setValue(this.bike.battery);

    }
}

