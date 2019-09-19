
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const socreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
	const choices = ['r','p','s'];
	const randomNumber = Math.floor(Math.random()*3);
	// console.log(randomNumber);
	return choices[randomNumber];
}
function convertToWord(letter){
	if(letter === "r") return "Rock";
	if(letter === "p") return "Paper";
	return "Scissor";
}
function win(userChoice,computerChoice){
	userScore++;
	console.log(userScore);
	userScore_span.innerHTML=userScore;
	computerScore_span.innerHTML=computerScore;
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	result_div.innerHTML=`${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} . You Win !!! &#9924`;
	document.getElementById(userChoice).classList.add('green-glow');
	// setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')}, 300);
	setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 300);
}
function lose(userChoice,computerChoice){
	computerScore++;
	userScore_span.innerHTML=userScore;
	computerScore_span.innerHTML=computerScore;
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	result_div.innerHTML=`${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord} . You Lost... &#9940`;
	document.getElementById(userChoice).classList.add('red-glow');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')}, 300);
}
function draw(userChoice,computerChoice){
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	result_div.innerHTML=`${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord} . It's a draw. &#9889`;
	document.getElementById(userChoice).classList.add('gray-glow');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('gray-glow')}, 300);
}
// console.log(getComputerChoice());
function game(userChoice){
// console.log(":poop  "+userChoice);
const computerChoice = getComputerChoice();
switch (userChoice+computerChoice){
	case "rs":
	case "pr" :
	case "sp":
	// console.log("User Wins!!");
	win(userChoice,computerChoice);
	break;
	case "rp":
	case "ps":
	case "sr":
	// console.log("Computer wins!!!");
	lose(userChoice,computerChoice);
	break;
	case "rr":
	case "pp":
	case "ss":
	// console.log("It is draw");
	draw(userChoice,computerChoice);
	break;
}
}
function main(){

rock_div.addEventListener('click',function(){
	game("r");
})

// paper_div.addEventListener('click',function(){
// 	game("p");
// })
paper_div.addEventListener('click',() => game("p"));

scissor_div.addEventListener('click',function(){
	game("s");
})
}

main();