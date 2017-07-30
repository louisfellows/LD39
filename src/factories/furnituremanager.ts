/// <reference path="../../lib/typescript/phaser.d.ts"/>

class FurnitureManager {
    lastDelta: number = 0;
    game: Phaser.Game;
    group: Phaser.Group;

    constructor(game: Phaser.Game, group: Phaser.Group) {
        this.game = game;
        this.group = group;
    }

    generate(now: number) {
        if (now - this.lastDelta > 500) {
            let newOb : Furniture = this.randomObject(); 
            //this.game.add.existing(newOb);
            this.group.add(newOb); 
            newOb.body.immovable = true;
            this.lastDelta = now;
        }
    }

    setSpeeds(newSpeed: number) {
        for (let obj of <Furniture[]>this.group.children) {
            obj.setSpeed(newSpeed);
        }
    }

    private randomObject() : Furniture {
        let type: number = this.game.rnd.integerInRange(1,4);
        let x: number = this.game.rnd.integerInRange(0,550);
        switch (type) {
            case 1:
                return new Charger(this.game, x, -100);
            case 2:
                return new Charger(this.game, x, -100);
            case 3:
                return new Barrier(this.game, x, -100);
            case 4:
                return new Coin(this.game, x, -100);
        }
    }
} 