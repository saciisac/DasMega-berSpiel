//PLatform konstruktor
function Platform(startX, startY){
    
    //deklarera egenskaper
    this.xPos= startX;
    this.yPos= startY;
    this.height= 20;
    this.width= 200;
    this.Vx=0;
    
    
    this.render= function(){
        ctx.fillStyle="red";
        ctx.fillRect(this.xPos, this.yPos, this.width, this.height);
    }
    this.solidGround= function(){
        for(i=0; i<player.length; i++){
            
            if(player[i].yPos >= this.yPos && player[i].yPos <= this.yPos + this.height && player[i].Vy>=0){
                player[i].yPos= this.yPos;
                player[i].Vy=0;
            }
        }
    }
}
