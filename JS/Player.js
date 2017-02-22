//Krigare konstuktor
function Player(startX, team) {

    //deklarera egenskaper
    this.Vx = 0;
    this.Vy = 0;
    this.xPos = startX;
    this.yPos = 550;
    this.hp = 4;
    this.doubleJump = [1, 1];
    this.reloadJump = 0;
    this.facing = "left";
    this.team = team;
    this.vulnerability = "vulnerable";
    this.reloadShield = 0;
    this.ammo = [1, 1, 1, 1, 1, 1];
    this.reloading = 0;

    //METODER

    //måla ut player
    this.render = function () {

            //Hur många skott kvar
            if (this.ammo.length == 6  && this.hp>0) {
                ctx.drawImage(sixBulletsPic, this.xPos + 90, this.yPos - 20, 30, 30);
            }
            if (this.ammo.length == 5 && this.hp>0) {
                ctx.drawImage(fiveBulletsPic, this.xPos + 90, this.yPos - 20, 30, 30);
            }
            if (this.ammo.length == 4 && this.hp>0) {
                ctx.drawImage(fourBulletsPic, this.xPos + 90, this.yPos - 20, 30, 30);
            }
            if (this.ammo.length == 3 && this.hp>0) {
                ctx.drawImage(threeBulletsPic, this.xPos + 90, this.yPos - 20, 30, 30);
            }
            if (this.ammo.length == 2 && this.hp>0) {
                ctx.drawImage(twoBulletsPic, this.xPos + 90, this.yPos - 20, 30, 30);
            }
            if (this.ammo.length == 1 && this.hp>0) {
                ctx.drawImage(oneBulletsPic, this.xPos + 90, this.yPos - 20, 30, 30);
            }
            if (this.ammo.length == 0 && this.hp>0) {
                ctx.drawImage(zeroBulletsPic, this.xPos + 90, this.yPos - 20, 30, 30);
            }
            

            //Double jump 
            if (this.doubleJump.length == 2 && this.hp>0) {
                ctx.drawImage(arrowUpPic, this.xPos + 120, this.yPos, 15, 15);
                ctx.drawImage(arrowUpPic, this.xPos + 140, this.yPos, 15, 15);
            }
            if (this.doubleJump.length == 1 && this.hp>0) {
                ctx.drawImage(arrowUpPic, this.xPos + 120, this.yPos, 15, 15);
            }
            //liv pink
            if (this.team == "pink") {
                if (this.hp == 4) {
                    ctx.drawImage(pinkHeartPic, 750, 30, 50, 50);
                    ctx.drawImage(pinkHeartPic, 800, 30, 50, 50);
                    ctx.drawImage(pinkHeartPic, 850, 30, 50, 50);
                    ctx.drawImage(pinkHeartPic, 900, 30, 50, 50);

                }
                if (this.hp == 3) {
                    ctx.drawImage(pinkHeartPic, 750, 30, 50, 50);
                    ctx.drawImage(pinkHeartPic, 800, 30, 50, 50);
                    ctx.drawImage(pinkHeartPic, 850, 30, 50, 50);
                }
                if (this.hp == 2) {
                    ctx.drawImage(pinkHeartPic, 750, 30, 50, 50);
                    ctx.drawImage(pinkHeartPic, 800, 30, 50, 50);
                }
                if (this.hp == 1) {
                    ctx.drawImage(pinkHeartPic, 750, 30, 50, 50);
                }
                if (this.hp <= 0) {
                    ctx.drawImage(victoryBluePic, 10, 20);
                }

            }
            //liv blue
            if (this.team == "blue") {
                if (this.hp == 4) {
                    ctx.drawImage(blueHeartPic, 50, 30, 50, 50);
                    ctx.drawImage(blueHeartPic, 100, 30, 50, 50);
                    ctx.drawImage(blueHeartPic, 150, 30, 50, 50);
                    ctx.drawImage(blueHeartPic, 200, 30, 50, 50);

                }
                if (this.hp == 3) {
                    ctx.drawImage(blueHeartPic, 50, 30, 50, 50);
                    ctx.drawImage(blueHeartPic, 100, 30, 50, 50);
                    ctx.drawImage(blueHeartPic, 150, 30, 50, 50);
                }
                if (this.hp == 2) {
                    ctx.drawImage(blueHeartPic, 50, 30, 50, 50);
                    ctx.drawImage(blueHeartPic, 100, 30, 50, 50);
                }
                if (this.hp == 1) {
                    ctx.drawImage(blueHeartPic, 50, 30, 50, 50);
                }
                if (this.hp <= 0) {
                    ctx.drawImage(victoryPinkPic, 10, 20);
                }

            }
            //Pink Player
            if (this.team == "pink" && this.facing == "left" && this.hp>0) {
                ctx.drawImage(pinkLeftPic, this.xPos, this.yPos, 170, 80);
            
            }
            if (this.team == "pink" && this.facing == "right" && this.hp>0) {
                ctx.drawImage(pinkRightPic, this.xPos + 10, this.yPos, 170, 80);
                
            }

            //Blue Player
            if (this.team == "blue" && this.facing == "left" && this.hp>0) {
                ctx.drawImage(blueLeftPic, this.xPos, this.yPos, 170, 80);
            }
            if (this.team == "blue" && this.facing == "right" && this.hp>0) {
                ctx.drawImage(blueRightPic, this.xPos + 10, this.yPos, 170, 80);
            }
        
            //sköld pink
        if(this.team== "pink" && this.vulnerability== "immortal" && this.hp>0){
            ctx.drawImage(pinkShieldPic, this.xPos +75 , this.yPos+10, 60, 60)
        }
        //sköld blue
        if(this.team== "blue" && this.vulnerability== "immortal" && this.hp>0){
            ctx.drawImage(blueShieldPic, this.xPos +75 , this.yPos+10, 60, 60)
        }

        }
        //updatera positioner
    this.updatePosition = function () {
            this.xPos = this.xPos + this.Vx;
            //gravitation
            this.Vy = this.Vy + 1.4;
            this.yPos = this.yPos + this.Vy;
            //facing
            if (this.Vx > 0) {
                this.facing = "right";
            }
            if (this.Vx < 0) {
                this.facing = "left";
            }

        }
        //Stoppa kanter och spelare
    this.stopPlayer = function () {
            if (this.xPos <= -70) {
                this.xPos = -70;
            }
            if (this.xPos >= 870) {
                this.xPos = 870;
            }
            if (this.yPos >= 530) {
                this.yPos = 530
            }
        }
        //räkna doublejump, reloadjump osv
    this.jumpCounting = function () {
            //initiera reloadjump
            if (this.doubleJump.length < 2) {
                this.reloadJump++;
            }
            if (this.reloadJump > 35) {
                this.doubleJump.push(1);
                this.reloadJump = 0;

            }
        }
        //skada sig, vulnerablility
    this.hurt = function () {
            if (this.vulnerability == "vulnerable") {
                this.hp--;
                this.vulnerability = "immortal";
            }

        }
        //skydda player
    this.shield = function () {
            if (this.vulnerability == "immortal") {
                this.reloadShield++;
            }
            if (this.reloadShield > 30) {
                this.vulnerability = "vulnerable";
                this.reloadShield = 0;
            }

        }
        //ladda om
    this.ammoReload = function () {
        if (this.ammo.length == 0) {
            this.reloading++;
            ctx.fillStyle = "red";
            ctx.fillText("RELOADING", this.xPos, this.yPos);
        }
        if (this.reloading > 100) {
            this.ammo.push(1, 1, 1, 1, 1, 1);
            this.reloading = 0;
        }
    }
}