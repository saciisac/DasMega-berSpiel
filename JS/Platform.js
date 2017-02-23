//PLatform konstruktor
function Platform(startX, startY) {

    //deklarera egenskaper
    this.xPos = startX;
    this.yPos = startY;
    this.height = 20;
    this.width = 200;
    this.Vx = 0;


    this.render = function () {
        ctx.fillStyle = "red";
        ctx.fillRect(this.xPos, this.yPos, this.width, this.height);
    }
    this.solidGround = function () {
        //player 0
        if (player[0].yPos >= this.yPos - 71 && player[0].yPos <= 360 && player[0].Vy >= 0 && player[0].xPos > this.xPos - 120 && player[0].xPos < this.xPos - 120 + this.width ) {
            player[0].yPos = this.yPos - 71;
            player[0].Vy = 0;
        }
        //player 1
        if (player[1].yPos >= this.yPos - 71 && player[1].yPos <= 360 && player[1].Vy >= 0 && player[1].xPos > this.xPos - 120 && player[1].xPos < this.xPos - 120 + this.width ) {
            player[1].yPos = this.yPos - 71;
            player[1].Vy = 0;
        }

    }
}