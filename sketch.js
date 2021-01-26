var garden, gardenImg;
var tomCat, jerryMouse;
var catImg1, catImg2, catImg3;
var mouseImg1, mouseImg2, mouseImg3;

function preload() {
    //load the images here
    catImg1 = loadImage("tomOne.png");
    catImg2 = loadAnimation("tomTwo.png","tomThree.png");
    catImg3 = loadAnimation("tomFour.png");

    mouseImg1 = loadImage("jerryOne.png");
    mouseImg2 = loadAnimation("jerryTwo.png","jerryThree.png");
    mouseImg3 = loadAnimation("jerryFour.png");

    gardenImg = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500,400,1000,800);
    garden.addImage(gardenImg);

    tomCat = createSprite(700,650,10,10);
    tomCat.addImage(catImg1);
    tomCat.scale = 0.1;

    jerryMouse = createSprite(200,630,10,10);
    jerryMouse.addImage(mouseImg1);
    jerryMouse.scale = 0.1;
}

function draw() {

    background(255);
    
    //console.log("horizontal", tomCat.x - jerryMouse.x);
    //console.log("horizontal+70", (tomCat.x - jerryMouse.x)+120);
    //console.log("sum of halves of the widths", tomCat.width/2 + jerryMouse.width/2)
    if(keyDown("left_arrow")){
        tomCat.velocityX = -5;
        tomCat.addAnimation("catRunning",catImg2);
        tomCat.changeAnimation("catRunning");
 
        jerryMouse.addAnimation("mouseTeasing",mouseImg2);
        jerryMouse.changeAnimation("mouseTeasing");
    }
    if((tomCat.x - jerryMouse.x)+70 < (tomCat.width + jerryMouse.width)/2-50){

        tomCat.velocityX = 0;
        tomCat.addAnimation("catStop",catImg3);
        tomCat.changeAnimation("catStop");
        
        jerryMouse.addAnimation("mouseStop",mouseImg3);
        jerryMouse.changeAnimation("mouseStop");
    }

    drawSprites();
}