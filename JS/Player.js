//Krigare konstuktor
function Player(startX, team) {

    //deklarera egenskaper
    this.Vx = 0;
    this.Vy = 0;
    this.xPos = startX;
    this.yPos = 550;
    this.hp = 3;
    this.doubleJump = [1, 1];
    this.reloadJump = 0;
    this.facing = "left";
    this.team = team;
    this.vulnerability = "vulnerable";
    this.reloadShield = 0;
    this.ammo=[1,1,1,1,1];

    //METODER

    //måla ut player
    this.render = function () {
            //ctx.fillRect(this.xPos, this.yPos, this.width, this.height);
            //Pink Player
            if (this.team == "pink" && this.facing == "left") {
                ctx.drawImage(pinkLeftPic, this.xPos, this.yPos, 170, 80);
            }
            if (this.team == "pink" && this.facing == "right") {
                ctx.drawImage(pinkRightPic, this.xPos + 10, this.yPos, 170, 80);
            }
            //Blue Player
            if (this.team == "blue" && this.facing == "left") {
                ctx.drawImage(blueLeftPic, this.xPos, this.yPos, 170, 80);
            }
            if (this.team == "blue" && this.facing == "right") {
                ctx.drawImage(blueRightPic, this.xPos + 10, this.yPos, 170, 80);
            }
        }
        //updatera positioner
    this.updatePosition = function () {
        this.xPos = this.xPos + this.Vx;
            //gravitation
        this.Vy = this.Vy + 1.4;
        this.yPos = this.yPos + this.Vy;
        //facing
        if(this.Vx>0){
            this.facing= "right";
        }
        if(this.Vx<0){
            this.facing= "left";
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
        if (this.reloadShield > 50) {
            this.vulnerability = "vulnerable";
            this.reloadShield = 0;
        }

    }
    
}