//credit to chatgpt for assisting with issues in images stacking/overlaying and in looping audio!

//It assisted in rewriting both of the keyIsPressed sections for clarity/efficiency, and for helping me write out the parameters for where the Buttons would be using mousepressed!


let sound1,sound2,sound3,sound4,sound5,sound6,sound7;
let img1,img2,img3,img4,img5,img6,img7;
let x = 220;
let sketch,intro;

let isDay;
let isNight;
let isRain;

let rectHeight = 40;
let rectWidth = 40;

let isGameActive = false;

function preload() {
  sound1 = loadSound("Sounds/GrassStep.wav");
  sound2 = loadSound("Sounds/GrassBite.wav");
  sound3 = loadSound("Sounds/LookUp.wav");
  sound4 = loadSound("Sounds/BirdSong.wav");
  sound5 = loadSound("Sounds/AmbientNight.mp3");
  sound6 = loadSound("Sounds/Rainsound.wav");
  sound7 = loadSound("Sounds/Jumpy.mp3");

  img1 = loadImage("Image/DeerBase.png");
  img2 = loadImage("Image/DeerDown.gif");
  img3 = loadImage("Image/DeerUp.png");
  img4 = loadImage("Image/DeerLeft.gif");
  img5 = loadImage("Image/DeerRight.gif");
  img6 = loadImage("Image/GrassTop.png");
  img7 = loadImage("Image/DeerBounce.gif");
}


function setup() {
  createCanvas(600, 400);
  background(0);
  fill(255)
  text("Click anywhere to Begin the Game!",200,200)

}

function draw(){
if (isGameActive) {

if (isDay) {
  background(235, 207, 52);
}
else if (isNight) {
  background(16, 33, 51);
}
else if (isRain) {
  background(124, 161, 153);
}
else {
  background(
    172, 230, 228);
}
fill(0);
rect(0,0,600,50);
textSize();
fill(255);
text(' Click the square buttons to change the time of day, and click anywhere else/reclick to go back to normal!',20,20);;
text(' Use LEFT and RIGHT arrows to move, UP and DOWN arrows to look up and down, and SPACE to hop!',20,40);
  //program to be time/ambience slection buttons. debating on if i want colored strokes, so theyre commented out.
//daytime
strokeWeight(4);
//stroke(204, 138, 31);
fill(255, 247, 135);
rect(20, 60, rectWidth, rectHeight);
//nightime
//stroke(4, 16, 31);
fill(80, 83, 140);
rect(80, 60, rectWidth, rectHeight);
//raintime
//stroke(96, 135, 128);
fill(136, 191, 182);
rect(140, 60, rectWidth, rectHeight);

//background grass
  image(img6,-200,300);
  image(img6,320,300);


  //figure out how to lock to directional keys rather than all. EDIT: locked :D
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(LEFT_ARROW) || keyIsDown(UP_ARROW) || keyIsDown(DOWN_ARROW)|| keyIsDown (32)) {
    if (keyIsDown(RIGHT_ARROW)) {
      image(img5, x, 230);
      x += 2;
    } else if (keyIsDown(LEFT_ARROW)) {
      image(img4, x, 230);
      x -= 2;
    } else if (keyIsDown(DOWN_ARROW)) {
      image(img2, x, 230);
    } else if (keyIsDown(UP_ARROW)) {
      image(img3, x, 230); }
      else if (keyIsDown(32)) {
      image(img7,x,230);
    }
  } else {
    image(img1, x, 230);
  }

//grass
  image(img6,0,320);
}
else {

}
}

function keyPressed() {
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(LEFT_ARROW)) {
    sound1.rate();
    sound1.play();
    sound2.stop();
    sound3.stop();
    sound7.stop();
  }

  if (keyIsDown(DOWN_ARROW)) { 
    sound2.rate();
    sound2.play();
    sound2.setVolume(0.5);
    sound2.outputVolume(0.1);
    sound1.stop();
    sound7.stop();
  
  }

  if (keyIsDown(UP_ARROW)) {
    sound3.rate();
    sound3.play();
    sound2.stop();
    sound1.stop();
    sound7.stop();
  }

  if (keyIsDown(32)) {
    sound7.rate();
    sound7.play();
    sound7.setVolume(0.3);
    sound2.stop();
    sound1.stop();
  }

  else {
  }
}

function mousePressed() {
  if (!isGameActive) {
    isGameActive = true; //makes Game Active true/sets flag
    }
  if (mouseX > 20 && mouseX < 20 + rectWidth && mouseY > 60 && mouseY < 60 + rectHeight) {
    isDay = !isDay;
    isNight = false;
    isRain = false; 
  }

  else if (mouseX > 80 && mouseX < 80 + rectWidth && mouseY > 60 && mouseY < 60 + rectHeight) {
    isNight = !isNight; 
    isDay = false;
    isRain = false; 
  }

  else if (mouseX > 140 && mouseX < 140 + rectWidth && mouseY > 60 && mouseY < 60 + rectHeight) {
    isRain = !isRain; 
    isDay = false; 
    isNight = false; 
  }

  else {
    isRain = false; 
    isDay = false; 
    isNight = false; 
  }

  if (isDay) {
    sound4.rate();
    sound4.setVolume(0.1);
    sound4.loop();
    sound5.stop();
    sound6.stop();
    background(yellow);
  } else if (isNight) {
    sound5.rate();
    sound5.setVolume();
    sound5.loop();
    sound4.stop();
    sound6.stop();
  } else if (isRain) {
    sound6.rate();
    sound6.setVolume(0.2);
    sound6.loop();
    sound4.stop();
    sound5.stop();
  } else {
    sound4.stop();
    sound5.stop();
    sound6.stop();
  }
}