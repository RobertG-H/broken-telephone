$("#actualPhrase").append(localStorage.getItem("phrase"));
$("#guessPhrase").append(localStorage.getItem("guessPhrase"));

if(localStorage.getItem("phrase") == localStorage.getItem("guessPhrase")){
	$("#answer").append("YOU WIN");
}
else{
	$("#answer").append("YOU LOSE");
}