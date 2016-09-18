(function(){
    var min = 100, max = 900, pad_right = 5, input = document.getElementById('adjinput');

    input.style.width = min+'px';
    input.onkeypress = input.onkeydown = input.onkeyup = function(){
        var input = this;
        setTimeout(function(){
            var tmp = document.createElement('div');
            tmp.style.padding = '0';
            if(getComputedStyle)
                tmp.style.cssText = getComputedStyle(input, null).cssText;
            if(input.currentStyle)
                tmp.style.cssText = input.currentStyle.cssText;
            tmp.style.width = '';
            tmp.style.position = 'absolute';
            tmp.innerHTML = input.value.replace(/&/g, "&amp;")
                                       .replace(/</g, "&lt;")
                                       .replace(/>/g, "&gt;")
                                       .replace(/"/g, "&quot;")
                                       .replace(/'/g, "&#039;")
                                       .replace(/ /g, '&nbsp;');
            input.parentNode.appendChild(tmp);
            var width = tmp.clientWidth+pad_right+1;
            tmp.parentNode.removeChild(tmp);
            if(min <= width && width <= max)
                input.style.width = width+'px';
        }, 1);
    }
})();




document.getElementById("adjinput")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {

        document.location.href = "enterPhrase.html";
    }
    else if (event.keyCode == 13 && document.location.href == "enterPhrase.html"){
        rnd();
        document.location.href = "shareScreen.html";
    }

});



function numbersOnly(input){
    var regex = /[^2-6]/g;
    input.value = input.value.replace(regex, "");


} 







// Below is code from test 

var pointer=0;
var inputPhrase= document.getElementById("adjinput").value;
var numPlayers = document.getElementById("players").value;
var guesses =[numPlayers];


function rnd() {

    var iS = document.getElementById("adjinput").value;
    var letters = iS.split("");
    var nsLet = iS.replace(/\s+/g, '').split("");
    console.log(nsLet);
    var numLetRm = Math.round(nsLet.length*.6);
    document.getElementById("adjinput").value = "";
    console.log(iS);
    console.log(numLetRm);
    
    for (i = 0; i < numLetRm; i++){
        
        var chosenNum = Math.floor((Math.random() * letters.length) + 1);
        var chosenLet =letters[chosenNum];
        
        while(chosenLet==" "){
            chosenNum = Math.floor((Math.random() * letters.length) + 1);
            chosenLet=letters[chosenNum];
        }

    letters[chosenNum]="_";
    
    }

    for (i = 0; i < letters.length; i++){
        $("#iD").append(letters[i]);
    }
}

function storeGuess(){
    guesses[pointer]=document.getElementById("playerGuess").value;

    if(pointer<numPlayers){
        pointer++;
    }
}