var character;
var wall1, wall2, wall3, wall4, wall5;
var block1, block2, block3, block4, block5, block6;
var characterImg;
var song;
var quac;

function preload(){
  characterImg = loadImage("red.png");
  song = loadSound("music.mp3");
  quac = loadSound("quac.mp3");
}

function setup() {
  block1 = createCanvas(800, 800);
  wall1 = createSprite(400, 200, 20, 325);
  wall3 = createSprite(515, 370, 250, 20);
  block2 = createSprite(645, 325, 20, 100);
  block2.shapeColor = ("yellow");
  wall2 = createSprite(650, 47, 500, 20);
  wall4 = createSprite(800, 215, 50, 350);
  wall5 = createSprite(700, 370, 200, 20);
  block4 = createSprite(600, 120, 100, 20);
  block4.shapeColor = rgb(150,110,130)
  block5 = createSprite(600, 140, 20, 200);
  block5.shapeColor = ("blue");
  block6 = createSprite(750, 220, 100, 20);
  block6.shapeColor = ("green");

  character = createSprite(420, 110, 30, 30);
  character.addImage(characterImg);
  character.scale = (0.04);
character.shapeColor = ("red");

//song.loop();


}

function draw() {

  textSize(25)
  fill("black")
  text("IF YOU TOUCH THE MAZE WALLS YOUR COLOUR WILL CHANGE ",0,470 );
  text("AND YOU HAVE TO COLOUR THE WHOLE THING AGAIN!",0,500 );


  if (keyDown("a") && character.x > 425 && (!character.isTouching(block2))){
    character.x = character.x - 1;
  }

  else if (keyDown("d") && character.x < 760 && (!character.isTouching(block4)) && (!character.isTouching(block6)) && (!character.isTouching(block5)) && (!character.isTouching(block2))) {
    character.x = character.x + 1;
  }

  else if (keyDown("w") && character.y > 65 && (!character.isTouching(block4)) && (!character.isTouching(block6)) && (!character.isTouching(block5))) {
    character.y = character.y - 1;
  }
  else if (keyDown("s") && character.y < 345 && (!character.isTouching(block4)) && (!character.isTouching(block6)) && (!character.isTouching(block2))){
    character.y = character.y + 1;
  }
if(character.isTouching (block2)){
background("white");
quac.play();
character.collide(block2);
}

if(character.isTouching (block4)){
  background("white");
  quac.play();
  character.collide(block4);
  }

  if(character.isTouching (block5)){
    background("white");
    quac.play();
    character.collide(block5);
    }
    
    if(character.isTouching (block6)){
      background("white");
      quac.play();
      character.collide(block6);
      }
      


  drawSprites();
}