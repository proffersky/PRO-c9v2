var bola;
function setup() {
  createCanvas(400,400);
bola = createSprite(200,200,30,30);
}

function draw() 
{
   background(30);
   if (keyIsDown(RIGHT_ARROW)){
     bola.position.x = bola.position.x +5;
       }
       if (keyIsDown(LEFT_ARROW)){
        bola.position.x = bola.position.x +5;
          }
          if (keyIsDown(UP_ARROW)){
            bola.position.x = bola.position.x +5;
              }
              if (keyIsDown(DOWB_ARROW)){
                bola.position.x = bola.position.x +5;
                  }
drawSprites();

}




