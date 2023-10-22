status1="";
objects=[];
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
if(status1 == true){
    model.detect(video,gotResults);
    for (let i = 0; i < objects.length; i++) {
        document.getElementById("modelstatus").innerHTML="Status:Objects Detected";
        fill("yellow");
        confidence=floor(objects[i].confidence*100);
        text(objects[i].label+" "+ confidence+"%",objects[i].x+15,objects[i].y+15);
        noFill();
        stroke("red");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        if (objects[i].label == input) {
            document.getElementById("objectstatus").innerHTML="Object found";
            synth=window.speechSynthesis;
           var utterThis= new SpeechSynthesisUtterance(input+" found in image");
           synth.speak(utterThis);
        }else{
            document.getElementById("objectstatus").innerHTML="Object not found";
            synth=window.speechSynthesis;
           var utterThis= new SpeechSynthesisUtterance(input+" not found in image");
           synth.speak(utterThis);
        }
    }
}
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
function gotResults(error,results){
if(error){
    console.log(error);

}else{
    console.log(results);
    objects=results;
}

}