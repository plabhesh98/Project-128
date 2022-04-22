left_wrist_x = 0;
left_wrist_y = 0;
right_wrist_x =0;
right_wrist_y = 0;

function preload(){
    song1 = loadSound("music1.mp3");
    song2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(400, 500);
    canvas.position(550, 190);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function modelLoaded(){
    console.log("Posenet is Inititalized!");
}

function draw(){
    image(video, 0, 0, 400, 500)
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        left_wrist_x = results[0].pose.leftWrist.x;
        left_wrist_y = results[0].pose.leftWrist.y;
        console.log("Left wrist x is " + left_wrist_x + "left wrist y is " + left_wrist_y);
        right_wrist_x = results[0].pose.rightWrist.x;
        right_wrist_y = results[0].pose.rightWrist.y;
        console.log("Right wrist x is " + right_wrist_x + "right wrist y is " + right_wrist_y);
    }
}