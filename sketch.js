var bola;
function setup() {
  createCanvas(400,400);
bola = createSprite(200,200,30,30);
}

function draw() 
{
   background(30);
   if (keyIsDawn(RIGHT_ARROW)){
     bola.position.x = bola.position.x +5;
    
   }
drawSprites();

}




