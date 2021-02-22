var dog1, dog2



function preload(){
  dog1=loadImage("Images/dog1.png");
  dog2=loadImage("Images/dog2.png");
  milk = loadImage("Images/Milk.png");
  milkImage = loadImage("Images/milkImage.png");

}

function setup() {
  createCanvas(1000,400);
  
  dog1=createSprite(800,200,150,150);
  
}


function draw() {
  background(46,139,87);
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
