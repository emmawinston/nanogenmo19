/*global abs,angleMode,append,background,beginShape,bezier,box,camera,ceil,CENTER,color,cone,cos,createCanvas,createCanvas,createGraphics,curveVertex,cylinder,DEGREES,displayHeight,displayWidth,dist,div,DOWN_ARROW,ellipse,endShape,fill,floor,frameCount,frameRate,height,image,key,keyCode,keyIsDown,keyIsPressed,keyIsPressed,keyPressed,LEFT,LEFT_ARROW,lerpColor,line,loadImage,loadJSON,loadSound,map,mouseIsPressed,mouseX,mouseY,noFill,noLoop,normalMaterial,noStroke,p5,plane,point,pointLight,pop,push,push,RADIANS,radians,random,rect,resizeCanvas,resizeCanvas,RIGHT,RIGHT_ARROW,rotate,rotateX,rotateY,rotateZ,round,round,scale,shuffle,sin,sphere,stroke,strokeWeight,text,textAlign,textFont,textSize,texture,textWidth,torus,translate,triangle,UP_ARROW,WEBGL,width,windowHeight,windowHeight,windowWidth,world */

// create global variables up here
var sourceText = "yes, and?";
var words = sourceText.split(" ");
var array = ["!", "%", "#", "£", "?"];
let xpos = 100;
let ypos = 500;
let xpos2 = 10;
let ypos2 = 500
let eachline = 120;
// var pdf;


function setup() {
  
  createCanvas(1200, 1700);
  background(255);
  frameRate(5000);
  textFont("Courier");
  // pdf = createPDF();
}


function draw() {
  
  if(frameCount < 20) {
  
    let ypos = getpos(1, 170);
    let ypos2 = getpos(20, 180)

    function getpos(min, max) {
      return (Math.floor(Math.random() * (max - min + 1) + min)) * 10;
    }

    function getpunc() {
      return array[Math.floor(Math.random() * array.length)];
    }

    for (var i=0; i<5000; i++) {

      xpos += 10;
      xpos2 += 10;

      textSize(12);
      text("!", xpos, ypos);
      
      text(getpunc(), xpos2, ypos2);

      if (i % eachline == 0) {
          xpos = 0;
          ypos += 100;
          xpos2 = 100;
          ypos2 += 100;
      }
    }
      
    } else { noLoop(); }
  
}