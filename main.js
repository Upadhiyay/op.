img = "";
status="";
objects=[];

function preload(){
  img = loadImage('dog_cat.jpg');
}

function setup() {
  canvas = createCanvas(380, 380);
  canvas.center();
video = createCapture(VIDEO);
video.size(380, 380)
video.hide();
  objectDetection = ml5.objectDetector('cocossd' , modelLoded)
  document.getElementById("status").innerHTML = "STATUS : DETECTING OBJECT";
}


function draw() {
  image(video, 0, 0, 380, 380);
  if (status !="") {
}

r=random(255);
g=random(255);
b=random(255);

//objectDetection.detect(video, gotResult);
for (i = 0; i < objects.length; i++) {
    document.getElementById("status").innerHTML = "STATUS : OBJECT DETECTED";
    document.getElementById("number").innerHTML = "num of deteced object are:"+objects.length;
    fill(r,g,b);
    percent = floor(objects[i].confidence * 100);
    text(objects[i].label +"" +percent +"%",objects[i].x+15,objects[i].y+15);
    noFill();
    stroke(r,g,b);
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}
}


function modelLoded ()
 {
console.log("Model Loded!")
status = true;
objectDetection.detect(video, gotResult);
}

function gotResult (error, result) 
{
if (error){
console.log(error)
}
console.log(result)

objects= result;

}