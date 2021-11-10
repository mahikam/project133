img="";
var status="";
function preload(){
    img=loadImage("tv.jpeg");
}
function setup(){
    canvas= createCanvas(400,400);
    canvas.position(480,225);
    objectDetector= ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("tv_status").innerHTML="Status: Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded");
    status= true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error)
    }
    else if(results){
        console.log(results);
    }
}
function draw(){
    image(img,0,0,400,400);
}