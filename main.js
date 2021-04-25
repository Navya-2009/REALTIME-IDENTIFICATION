function preload(){
}

function setup(){

    canvas= createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/RHAong9dc/model.json', modelLoaded);
}

function draw(){

    image(video, 0, 0, 400, 400);
    classifier.classify(video, gotResult);
}

function gotResult(error, result){

    if(error){

        console.error(error);
    }

    else{

        console.log(result);
        document.getElementById("object_name").innerHTML = result[0].label;
        document.getElementById("object_accuracy").innerHTML = result[0].confidence.toFixed(3)*100 + "%";
    }
}

function modelLoaded(){

    console.log("Model Loaded !");
}