var bg, bgimg, ground_invisible; 
var player, playerimg;
var coin, coinimg, coinsGroup;


function preload(){
    bgimg= loadImage("Images/image.jpg")
    playerimg= loadAnimation("Images/player0.png","Images/player1.png","Images/player2.png",
    "Images/player3.png","Images/player4.png","Images/player5.png","Images/player6.png","Images/player7.png",
    "Images/player8.png","Images/player9.png","Images/player10.png","Images/player11.png",
    "Images/player12.png","Images/player13.png","Images/player14.png","Images/player15.png")

    coinimg= loadAnimation("Images/coin1.png","Images/coin2.png",
    "Images/coin3.png","Images/coin4.png","Images/coin5.png")
}

function setup(){
    createCanvas(1400,700)

    bg = createSprite(0,0,1400,700)
    bg.addImage("bg",bgimg)
    bg.scale=2

    player = createSprite(80,550,20,20)
    player.addAnimation("player",playerimg)

    ground_invisible=createSprite(700,690,1400,5);
    ground_invisible.visible = false;  

    coinsGroup = new Group();
}

function draw(){
    background("black")

    if(keyDown("space")){
        player.velocityY=-10; 
      
      }

      player.velocityY=player.velocityY+0.8;

    bg.velocityX=-5

    if(bg.x<0){
        bg.x = bg.width/2;
    }  


    player.collide(ground_invisible)
    spawnCoins();

    drawSprites()
}

function spawnCoins() {
    if (frameCount % 160 === 0) {
      var coin = createSprite(600,150,40,10);
      coin.y = Math.round(random(200,500));
      coin.addAnimation("coin",coinimg);
      coin.scale = 0.5;
      coin.velocityX = -3;
      
      coin.lifetime = 200;
      
      coinsGroup.add(coin);
    } 
  }