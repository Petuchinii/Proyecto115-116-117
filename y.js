function boton() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/VcEkNcC03/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResult);
}

function gotResult(error,igual) {
    r = Math.floor(Math.random()*255)+1;
    g = Math.floor(Math.random()*255)+1;
    b = Math.floor(Math.random()*255)+1;
    document.getElementById("sescucho").innerHTML = "Se escucha" + igual[0].label;
    document.getElementById("omun").innerHTML = "La seguridad es de" + (igual[0].confidence*100).toFixed(2)+" %";
    document.getElementById("sescucho").style.color = "rgb("+r+","+g+","+b+")";
    document.getElementById("omun").style.color = "rgb("+r+","+g+","+b+")";
    img = document.getElementById("alin1");
    img1 = document.getElementById("alin2");

    if (igual[0].label == "Perro") {
        img.src = "perro.gif";
        img1.src="otrogato.jpg";
    } else if (igual[0].label == "Gato") {
        img.src = "otroperro.jpg";
        img1.src="gato.gif";
    }
}