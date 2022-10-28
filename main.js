Webcam.set({
width:350,
height:250,
image_formet:"png",
png_quality:90
})
Webcam.attach("camera")

function capture(){
    Webcam.snap(function(data_uri){
        
        document.getElementById("results").innerHTML="<img src='"+ data_uri+"' id='captured_image'>"

    })
}



console.log("ml5.version : " + ml5.version)
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/GdBNmX8wz/model.json",modelloaded)

function modelloaded(){
    console.log("model loded Successfully")
}
function check(){
    img= document.getElementById("captured_image")
    classifier.classify(img,gotResult)
  }
function gotResult(error,results){
    if(error){
        console.log(error)
    }else{
     console.log(results)
     document.getElementById("first").innerHTML= results[0].label
     prediction_1=  results[0].label
     speak()
     if( results[0].label=="Victory"){
        document.getElementById("emoji").innerHTML= "✌️"
     }else if( results[0].label=="Best"){
        document.getElementById("emoji").innerHTML= "✌️"
     }
    }
}


function speak(){
    var synth= window.speechSynthesis
    var speak_data_1= "Your Prediction is: " + prediction_1

    var utterthis= new SpeechSynthesisUtterance(speak_data_1)
    synth.speak(utterthis)
}