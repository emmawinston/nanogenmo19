/*global abs,angleMode,append,background,beginShape,bezier,box,camera,ceil,CENTER,color,cone,cos,createCanvas,createCanvas,createGraphics,curveVertex,cylinder,DEGREES,displayHeight,displayWidth,dist,div,DOWN_ARROW,ellipse,endShape,fill,floor,frameCount,frameRate,height,image,key,keyCode,keyIsDown,keyIsPressed,keyIsPressed,keyPressed,LEFT,LEFT_ARROW,lerpColor,line,loadImage,loadJSON,loadSound,map,mouseIsPressed,mouseX,mouseY,noFill,noLoop,normalMaterial,noStroke,p5,plane,point,pointLight,pop,push,push,RADIANS,radians,random,rect,resizeCanvas,resizeCanvas,RIGHT,RIGHT_ARROW,rotate,rotateX,rotateY,rotateZ,round,round,scale,shuffle,sin,sphere,stroke,strokeWeight,text,textAlign,textFont,textSize,texture,textWidth,torus,translate,triangle,UP_ARROW,WEBGL,width,windowHeight,windowHeight,windowWidth,world */

// create global variables up here
var sourceText = "yes, and?";
var words = sourceText.split(" ");
let xpos = 10;
let ypos = 470;
// var pdf;

function setup() {
  var canvas = createCanvas(1200, 1700);
  canvas.parent('main');
  background(255);
  frameRate(20000);
  // pdf = createPDF();
}
function draw() {
  textFont("Courier");
  textSize(12);
  textAlign(CENTER, CENTER);
  
  
  for (let i=0; i < 11000; i++) {
    xpos = ((i % 60) * 20) + 10;
    
    for (var j=0; j < words.length; j++) {
      fill(0 + (j * 10));
      text(words[j], xpos, ypos);
    }
    
    if (i % 120 == 0) {
      rotate(45);
      ypos += 6.4;
    }
  }
  
}