/* Expanding text field section*/

(function(){

    var min = 100, max = window.innerWidth*0.75, pad_right = 5, input = document.getElementById('adjinput');

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




var inputPhrase = localStorage.getItem("phrase");
var letters = inputPhrase.split("");

var nsLet = inputPhrase.replace(/\s+/g, '').split("");
console.log(nsLet);
var numLetRm = Math.round(nsLet.length*.6);
console.log(inputPhrase);
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
for (i = 0; i < letters.length; i++)
{
    $("#iD").append(letters[i]);
}

function saveWords(){
    var inputPhrase= document.getElementById("adjinput").value;
    localStorage.setItem("guessPhrase", inputPhrase);
}