/*global abs,angleMode,append,background,beginShape,bezier,box,camera,ceil,CENTER,color,cone,cos,createCanvas,createCanvas,createGraphics,curveVertex,cylinder,DEGREES,displayHeight,displayWidth,dist,div,DOWN_ARROW,ellipse,endShape,fill,floor,frameCount,frameRate,height,image,key,keyCode,keyIsDown,keyIsPressed,keyIsPressed,keyPressed,LEFT,LEFT_ARROW,lerpColor,line,loadImage,loadJSON,loadSound,map,mouseIsPressed,mouseX,mouseY,noFill,noLoop,normalMaterial,noStroke,p5,plane,point,pointLight,pop,push,push,RADIANS,radians,random,rect,resizeCanvas,resizeCanvas,RIGHT,RIGHT_ARROW,rotate,rotateX,rotateY,rotateZ,round,round,scale,shuffle,sin,sphere,stroke,strokeWeight,text,textAlign,textFont,textSize,texture,textWidth,torus,translate,triangle,UP_ARROW,WEBGL,width,windowHeight,windowHeight,windowWidth,world */

// create global variables up here
var sourceText = "yes, and?";
var words = sourceText.split(" ");
// var pdf;


function setup() {
  var canvas = createCanvas(1200, 1700);
  canvas.parent('main');
  background(255);
  frameRate(1000);
  // pdf = createPDF();
}


function draw() {
  textFont("Courier");
  
  let xpos = getpos(1, 1200);
  let ypos = getpos(1, 1200);
  
  function getpos(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  if(frameCount < 20) {
    
    for (var i=0; i<5000; i++) {
      rotate(-45);
      text(sourceText, xpos, ypos);
    }
    
  } else {
    noLoop();
  }
  
}