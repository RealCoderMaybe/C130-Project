song_1 = "music.mp3";
song_2 = "music2.mp3";

leftwrist.x = 0;
rightwrist.x = 0;
leftwrist.y = 0;
rightwrist.y = 0;
leftwrist.score = 0;
rightwrist.score = 0;
song = "";

function preload(){
    song_1 = loadSound("music.mp3")
    song_2 = loadSound("music2.mp3")
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 500);

    fill('#FF0000');
    stroke('#FF0000');

    circle(leftwrist.x, leftwrist.y, 20);

    if(rightwrist.y >0 && rightwrist.y <= 100){

    }
    
    if (leftwrist.score > 0.2){
        circle(leftwrist.x, leftwrist.y,20);
        InNumberleftwrist.y = Number(leftwrist.y);
        removeDecimals = floor(InNumberleftwrist.y);
        volume = remove_decimals/500;
        document.getElementById("volume").innerHTML = "Volume = " + volume;
        song.setVolume(volume);
        }
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(){
    if(results.length > 0){
        console.log(results);
        leftwrist.score = results[0].pose.keypoints[9].score;
console.log("leftwrist.score = "+ leftwrist.score)

        leftwrist.x = results[0].pose.leftwrist.x;
        leftwrist.y = results[0].pose.leftwrist.y;
        console.log("leftwrist.x = " + leftwrist.x + "leftwrist.y" + leftwrist.y);

        rightwrist.x = results[0].pose.rightwrist.x;
        rightwrist.y = results[0].pose.rightwrist.y;
        console.log("rightwrist.x = " + rightwrist.x + "rightwrist.y" + rightwrist.y);
    }
}

function isPlaying(){
    song_1.isPlaying()
    song_2.isPlaying()
    
    if(rightwrist.score > 0.2){
        circle(leftwrist.x, leftwrist.y, 20);
    }
    if(song_2 == 'false'){
        song_2.isPlaying();
    }
}

function stop(){
    song_1.stop();
}