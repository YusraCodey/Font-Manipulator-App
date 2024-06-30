noseX = 0
noseY = 0
difference = 0
rightWristX = 0
leftWristX = 0

function setup() {
    video = createCapture(VIDEO)
    video.size(550, 500)

    canvas = createCanvas(550, 500)
    canvas.position(700, 80)

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}


function modelLoaded() {
    console.log('Posenet Is Iniatialized')
}

function draw() {
    background("lightblue")
    fill('white')
    stroke('blue')
    textSize(difference)
    text('Yusra', 30, 300)
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y

        leftWristX = results[0].pose.leftWrist.x
        rightWristX = results[0].pose.rightWrist.x
        difference = floor(leftWristX - rightWristX)

        console, log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + " difference = " + difference)
    }
}
