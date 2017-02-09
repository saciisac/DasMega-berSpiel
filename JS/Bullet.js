//Bullet konstruktor
function Bullet(startX,startY, velocity){
   
    //deklarera egenskaper
    this.Vx= velocity;
    this.xPos= startX;
    this.yPos= startY;
    
    
    //METODER
    
    //Måla ut skott
    this.render = function(){
        //vänster
        if(this.Vx>0){
            ctx.drawImage(bulletPic, this.xPos -5, this.yPos,  20,  5);
        }
        //höger
        if(this.Vx<0){
            ctx.drawImage(bulletRightPic, this.xPos -5, this.yPos,  20,  5);
        }
        
    }

    //updatera position
    this.updatePosition= function(){
        this.xPos=this.xPos+ this.Vx;
        
        
    }
    
            
        
}
