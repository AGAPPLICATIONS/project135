function preload(){

}
function setup(){
canvas= createCanvas(470,360);
canvas.center();
video = createCapture(VIDEO);
video.hide();
}
function draw(){
image(video,0,0,470,360);
}
function start(){
model= ml5.objectDetector('cocoSSD',modelloaded);
document.getElementById("modelstatus").innerHTML="Status:Detecting Objects";
input= document.getElementById("objinput").value;
}
function modelloaded(){
    console.log("Model is loaded");
    status1=true;
    console.log(input);

}