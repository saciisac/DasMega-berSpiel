//variablar
var canvas,
    ctx;
//deklarera fält med spelare
var player= [new Player (850, "pink"), new Player(50, "blue")];
//deklarera skott
var bullets= [];
//deklarera platformer
var platforms= [new Platform(0, 350, 200,0), new Platform(800,350, 200,0), new Platform(400, 500, 200, 0), new Platform(400,200, 400,2)];
var startScreen= 0


////START//////
function start(){
     canvas= document.getElementById("c");
     ctx= canvas.getContext("2d");
     window.setInterval(update, 20);
    
    //bilder
    pinkLeftPic= document.getElementById("pplBild");
    pinkRightPic= document.getElementById("pprBild");
    blueLeftPic= document.getElementById("pblBild");
    blueRightPic= document.getElementById("pbrBild");
    bulletPic= document.getElementById("bulletBild");
    bulletRightPic= document.getElementById("bulletRightBild");
    sixBulletsPic=document.getElementById("sixBullets");
    fiveBulletsPic=document.getElementById("fiveBullets");
    fourBulletsPic=document.getElementById("fourBullets");
    threeBulletsPic=document.getElementById("threeBullets");
    twoBulletsPic=document.getElementById("twoBullets");
    oneBulletsPic=document.getElementById("oneBullets");
    zeroBulletsPic=document.getElementById("zeroBullets");
    arrowUpPic=document.getElementById("arrowUp");
    victoryBluePic=document.getElementById("victoryBlue");
    victoryPinkPic=document.getElementById("victoryPink");
    blueHeartPic=document.getElementById("blueHeart");
    pinkHeartPic=document.getElementById("pinkHeart");
    pinkShieldPic=document.getElementById("pinkShield");
    blueShieldPic=document.getElementById("blueShield");
    bluePlatformPic=document.getElementById("bluePlatform");
    startScreenPic= document.getElementById("startScreen");
    
        
}

  /////UPDATE/////
function update(){
    
    //Sudda
    ctx.clearRect(0,0, canvas.width, canvas.height);
    
        //////////RÄKNA//////////
    //kalla på metoder från klassen Player
        
    for(i=0; i < player.length; i++){
        player[i].updatePosition();
        player[i].stopPlayer();
        player[i].jumpCounting();
        player[i].shield();
        player[i].ammoReload();
    }
   
    //kalla på metoder från klassen Bullet
    for(i=0; i < bullets.length; i++){
        bullets[i].updatePosition();
    }
    //hindra bullets[] från att bli överbelastad
    if(bullets.length>15){
        bullets.shift();
    }
    //hit detection player 0
    for(i=0; i < bullets.length; i++){
        if(bullets[i].xPos> player[0].xPos +90 && bullets[i].xPos< player[0].xPos +135 && bullets[i].yPos> player[0].yPos + 10 && bullets[i].yPos < player[0].yPos + 70){
            player[0].hurt();
        }
    }
    //hit detection player 1
    for(i=0; i < bullets.length; i++){
        if(bullets[i].xPos> player[1].xPos +90 && bullets[i].xPos< player[1].xPos +135 && bullets[i].yPos> player[1].yPos + 10 && bullets[i].yPos < player[1].yPos + 70){
            player[1].hurt();
        }
    }
   
    
    //kalla på metoder från PLatform
    for(i=0; i < platforms.length; i++){
        platforms[i].solidGround();
    }
    
        
        
        //////////MÅLA//////////
    //måla up spelare
    for(i=0; i < player.length; i++){
        player[i].render();
    }
    //måla ut skott
    for(i=0; i < bullets.length; i++){
        bullets[i].render();
    }
    //måla ut platformer
    for(i=0; i < platforms.length; i++){
        platforms[i].render();
    }
    //startskärm
    if(startScreen==0){
        ctx.fillRect(0,0,1000,600);
        ctx.drawImage(startScreenPic,0,0);
    }
    
    
    //hitta hitboxes
/*
    ctx.fillStyle= "rgba(255,255,0,0.7)";
    ctx.fillRect(player[0].xPos+ 90, player[0].yPos + 10, 45, 60);
    ctx.fillRect(player[1].xPos+ 90, player[1].yPos + 10, 45, 60);
    */
    
}

function keyDown(e){
    
    //vänster player 0
    if(e.keyCode== 37){
        player[0].Vx= -10;
    }
    //höger player 0
    if(e.keyCode== 39){
        player[0].Vx= 10;
    }
    //hopp player 0
    if(e.keyCode== 38 && player[0].doubleJump.length > 0){
        player[0].Vy=-20;
        player[0].doubleJump.shift();
    }
    //skott player 0 åt höger
    if(e.keyCode==13 &&  player[0].facing == "right" && player[0].ammo.length >0 && player[0].hp>0 ){
        bullets.push(new Bullet(player[0].xPos + 133, player[0].yPos +49, 30));
        player[0].ammo.shift();
        
    }
    //skott player 0 åt vänster
    if(e.keyCode==13 &&  player[0].facing == "left" && player[0].ammo.length >0 && player[0].hp>0){
        bullets.push(new Bullet(player[0].xPos + 80, player[0].yPos +49, -30));
        player[0].ammo.shift();
    }
    
    
    //vänster player 1
    if(e.keyCode== 65){
        player[1].Vx= -10;
    }
    //höger player 0
    if(e.keyCode== 68){
        player[1].Vx= 10;
    }
    //hopp player 1
    if(e.keyCode== 87 && player[1].doubleJump.length > 0){
        player[1].Vy=-20;
        player[1].doubleJump.shift();
    }
    //skott player 1 åt höger
    if(e.keyCode==32 &&  player[1].facing == "right" && player[1].ammo.length >0 && player[1].hp>0){
        bullets.push(new Bullet(player[1].xPos + 133, player[1].yPos +49, 30));
        player[1].ammo.shift();
    }
    //skott player 1 åt vänster
    if(e.keyCode==32 &&  player[1].facing == "left" && player[1].ammo.length >0 && player[1].hp>0){
        bullets.push(new Bullet(player[1].xPos + 80, player[1].yPos +49, -30));
        player[1].ammo.shift();
    
    }
    //Restart
    if(e.keyCode== 8){
        
        player= [new Player (850, "pink"), new Player(50, "blue")];
        platforms= [new Platform(0, 350, 200,0), new Platform(800,350, 200,0), new Platform(400, 500, 200, 0), new Platform(400,200, 400,2)];
        bullets= [];
        startScreen=1;
        
        
    }
}
function keyUp(f){
    //sluta gå vänster player 0
    if(f.keyCode==37 && player[0].Vx <= 0){
        player[0].Vx= 0;
    }
    //sluta gå vänster player 0
    if(f.keyCode==39 && player[0].Vx >= 0){
        player[0].Vx= 0;
    }
    //sluta gå vänster player 1
    if(f.keyCode==65 && player[1].Vx <= 0){
        player[1].Vx= 0;
    }
    //sluta gå höger player 1
    if(f.keyCode==68 && player[1].Vx >= 0){
        player[1].Vx= 0;
    }
}

     