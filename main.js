function preload(){
    clown_nose = loadImage('background.jpg')
}
function setup(){
    canvas = createCanvas(375,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(375,300)
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses)
}
function draw(){
    image(video,0,0,375,300);
    fill(255,0,0);
    stroke(255,0,0);
    circle(noseX,noseY,20);
}
function takeSnapshot(){
    save('myFilterImage.png');
}

function modelLoaded(){
    console.log('poseNet initialised');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}
