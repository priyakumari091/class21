var canvas;
var music;
var edges;
var surface1,surface2,surface3,surface4,box
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    surface1 = createSprite(50,580,150,20);
    surface1.shapeColor = "red";
    surface2 = createSprite(210,580,150,20);
    surface2.shapeColor = "green";
    surface3 = createSprite(370,580,150,20);
    surface3.shapeColor = "blue";
    surface4 = createSprite(530,580,150,20);
    surface4.shapeColor = "orange";

    

    //create box sprite and give velocity

    box = createSprite(710,50,20,20);
    box.x = Math.round(random(20,750));
    box.shapeColor = "black";
    box.velocityY = 4;
    box.velocityX = 3;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    
    edges = createEdgeSprites();
    
    //add condition to check if box touching surface and make it box
    if(isTouching(box,surface1) && (box.bounceOff(surface1))){
        box.shapeColor = surface1.shapeColor;
        
        music.play();
    }
    else if(isTouching(box,surface2) && (box.bounceOff(surface2))){
        box.shapeColor = surface2.shapeColor;
        music.play();
    }
    else if(isTouching(box,surface3) && (box.bounceOff(surface3))){
        box.shapeColor = surface3.shapeColor;
        box.velocityY = 0;
        box.velocityX = 0;
        music.stop();
    }
    else if(isTouching(box,surface4)&& (box.bounceOff(surface4))){
        box.shapeColor = surface4.shapeColor;
        music.play();
    }
    box.bounceOff(surface1);
    box.bounceOff(surface2);
    box.bounceOff(surface3);
    box.bounceOff(surface4);
    box.bounceOff(edges);
    drawSprites();
}

function isTouching(box,surface){
    if(surface.y - box.y < (surface.height/2 + box.height/2)){
        return true;
    }
}
