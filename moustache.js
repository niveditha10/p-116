
nose_x=0;
nose_y=0;

function preload() {
nose=loadImage("https://i.postimg.cc/rs2qhZJz/moustache.png");
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.position(500,230)
    video=createCapture(VIDEO);
  video.size(300,300);
  video.hide();

posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
}
function modelLoaded()
{
  console.log("posenet loaded");
}

function gotPoses(results){
  if(results.length>0){
    console.log(results);
    nose_x=results[0].pose.nose.x-50;
    nose_y=results[0].pose.nose.y+10;
  }
}

function draw() {
image(video,0,0,300,300);
image(nose,nose_x,nose_y,100,30);
}

function take_snapshot(){    
  save('myFilterImage.png');
}