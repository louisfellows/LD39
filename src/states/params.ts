class Params {
    highscore: number = 0;
    
    batteryLevel = 1;       // Lower Battery Decrease 
    engineLevel = 1;        // Max Speed
    gearboxLevel = 1;       // Max Accel
    rechargeLevel = 1;     // Max Recharge

    coins = 0;

    getDischarge() {
        switch (this.batteryLevel) {
            case (1):
                return 0.1;
            case (2):
                return 0.09;
            case (3):
                return 0.08;
            case (4):
                return 0.07;
            case (5):
                return 0.05;
        }
    }
    getMaxSpeed() {
        switch (this.engineLevel) {
            case (1):
                return 10;
            case (2):
                return 20;
            case (3):
                return 35;
            case (4):
                return 45;
            case (5):
                return 60;
        }
    }
    getMaxAccel() {
        switch (this.gearboxLevel) {
            case (1):
                return 0.1;
            case (2):
                return 0.2;
            case (3):
                return 0.5;
            case (4):
                return 0.8;
            case (5):
                return 0.0;
        }
    }
    getRecharge() {
        switch (this.batteryLevel) {
            case (1):
                return 0.5;
            case (2):
                return 0.6;
            case (3):
                return 0.7;
            case (4):
                return 0.8;
            case (5):
                return 1;
        }
    }

}