var btnDothraki = document.querySelector("#btn-dothraki")
var txtInput=document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function translatedURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error occurred: ", error)
}

function clickHandler(){
    var inputText=txtInput.value;

    fetch(translatedURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated
        outputDiv.innerText=translatedText})
    .catch(errorHandler)
}

btnDothraki.addEventListener("click", clickHandler)
