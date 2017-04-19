//PLatform konstruktor
function Platform(startX, startY, width, Vx) {

    //deklarera egenskaper
    this.xPos = startX;
    this.yPos = startY;
    this.height = 20;
    this.width = width;
    this.Vx = Vx;
    
    
    
    //Måla ut
    this.render = function () {
        ctx.drawImage(bluePlatformPic, this.xPos, this.yPos - 5, this.width, this.height);
        
        //uppdatera position
        this.xPos= this.xPos+ this.Vx
        //byt håll till vänster
        if(this.xPos+this.width >= canvas.width){
            
            this.Vx= -this.Vx
        }
        //byt håll till höger
        if(this.xPos<0){
            this.Vx= -this.Vx
        }
        
    }
    //Stoppa genomfärd
    this.solidGround = function () {
        //player 0
        if (player[0].yPos >= this.yPos - 71 && player[0].yPos <= this.yPos-40 && player[0].Vy >= 0 && player[0].xPos > this.xPos - 120 && player[0].xPos < this.xPos - 90 + this.width ) {
            player[0].yPos = this.yPos - 71;
            player[0].Vy = 0;
           
        }
        //player 1
        if (player[1].yPos >= this.yPos - 71 && player[1].yPos <= this.yPos-40 && player[1].Vy >= 0 && player[1].xPos > this.xPos - 120 && player[1].xPos < this.xPos - 90 + this.width ) {
            player[1].yPos = this.yPos - 71;
            player[1].Vy = 0;
            
        }

    }
}