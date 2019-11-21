/*global abs,angleMode,append,background,beginShape,bezier,box,camera,ceil,CENTER,color,cone,cos,createCanvas,createCanvas,createGraphics,curveVertex,cylinder,DEGREES,displayHeight,displayWidth,dist,div,DOWN_ARROW,ellipse,endShape,fill,floor,frameCount,frameRate,height,image,key,keyCode,keyIsDown,keyIsPressed,keyIsPressed,keyPressed,LEFT,LEFT_ARROW,lerpColor,line,loadImage,loadJSON,loadSound,map,mouseIsPressed,mouseX,mouseY,noFill,noLoop,normalMaterial,noStroke,p5,plane,point,pointLight,pop,push,push,RADIANS,radians,random,rect,resizeCanvas,resizeCanvas,RIGHT,RIGHT_ARROW,rotate,rotateX,rotateY,rotateZ,round,round,scale,shuffle,sin,sphere,stroke,strokeWeight,text,textAlign,textFont,textSize,texture,textWidth,torus,translate,triangle,UP_ARROW,WEBGL,width,windowHeight,windowHeight,windowWidth,world */

// create global variables up here
var sourceText = "🖤🖤🖤, 🖤🖤🖤?";
var words = sourceText.split(" ");
let xpos = 10;
let ypos = 300;
let xposheart = 10;
let j=0;
let jmax = 74;
let jmin = 43;
let heart = " ";
let eachline = 120;

// var pdf;

function setup() {
  var canvas = createCanvas(1200, 1700);
  canvas.parent('main');
  background(255);
  frameRate(1000);
  textFont("Courier");
  // pdf = createPDF();
}
function draw() {
  
  for (var i=0; i < 20000; i++) {
    
    
    xpos += 10;
    
    
    textSize(8);
    text(heart, xpos, ypos);
    
    j++;
    
    if (
      i > 4967 && i < 4974 ||
      i > 4982 && i < 4990 ||
      i > 5086 && i < 5096 ||
      i > 5101 && i < 5111 ||
      i > 5204 && i < 5218 ||
      i > 5219 && i < 5233 ||
      i > 5323 && i < 5354 ||
      i > 5360 && i < 9000 && j < jmax && j > jmin 
    ) {
      
      heart = " ";
      
    } else {
      heart = "🖤";
    }
    
    if (i % eachline == 0) {
        xpos = 0;
        ypos += 10;
        j = 0;
    }
    
    if (i > 6500 && i % eachline == 0) {
      jmax --;
      jmin ++;
    }
    
  }
  
  textSize(12);
  text(sourceText, 550, 830);
}