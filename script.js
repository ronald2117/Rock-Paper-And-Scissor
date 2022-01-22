var playerPlay = '';
var myScore = 0;
var comScore = 0;
var round = 0;

function scissor() {
	playerPlay = "Scissor";
	document.getElementById('myBet').src = "scissor.jpg";}
function rock() {
	playerPlay = "Rock";
	document.getElementById('myBet').src = 'rock.jpg';
}
function paper() {
	playerPlay = "Paper";
	document.getElementById('myBet').src = 'paper.jpg';
}

function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

//Display Score
function displayScore() {
	document.getElementById('comScore').innerHTML = comScore;
	document.getElementById('myScore').innerHTML = myScore;
}
function computerPlay() {
	let randNumber = randomNumber(1, 4);
		if (randNumber == 1) { //Rock
			if (playerPlay == "Scissor") {
				document.getElementById('result').innerHTML = "You Lose";
				document.getElementById('comBet').src = 'rock.jpg'
				comScore++;
				displayScore();
				final();
			} else if (playerPlay == "Paper") {
				document.getElementById('result').innerHTML = "You Win"
				document.getElementById('comBet').src = 'rock.jpg';
				myScore++;
				displayScore();
				final();

			} else if (playerPlay == "Rock"){
				document.getElementById('result').innerHTML = "Draw";
				document.getElementById('comBet').src = 'rock.jpg';
			} else {
				document.getElementById('result').innerHTML = "Pick first";
			}
		} else if (randNumber == 2) { //Paper
			if (playerPlay == "Scissor") { 
				document.getElementById('result').innerHTML = "You Win";
				document.getElementById('comBet').src = 'paper.jpg';
				myScore++;
				displayScore();
				final();
			} else if (playerPlay == "Paper") {
				document.getElementById('result').innerHTML = "Draw"
				document.getElementById('comBet').src = 'paper.jpg';
			} else if (playerPlay == "Rock") {
				document.getElementById('result').innerHTML = "You Lose";
				document.getElementById('comBet').src = 'paper.jpg';
				comScore++;
				displayScore();
				final();
			} else {
				document.getElementById('result').innerHTML = "Pick first";
			}
		} else {
			if (playerPlay == "Scissor") { //Scissor
				document.getElementById('result').innerHTML = "Draw";
				document.getElementById('comBet').src = 'scissor.jpg';
			} else if (playerPlay == "Paper") {
				document.getElementById('result').innerHTML = "You Lose"
				document.getElementById('comBet').src = 'scissor.jpg';
				comScore++;
				displayScore();
				final();
			} else if (playerPlay == "Rock") {
				document.getElementById('result').innerHTML = "You Win";
				document.getElementById('comBet').src = 'scissor.jpg';
				myScore++;
				displayScore();
				final();
			} else {
				document.getElementById('result').innerHTML = "Pick first";
			}
		}
	}

function final() {
	if (myScore == 5 || comScore == 5) {
 		document.getElementById('submit').disabled = true;
		if (myScore == 5) {
			if(confirm("Galing nak lablabss! \n Alabyuuuu \nUsa pa?") == true) {
        location.reload()
      } else {
        alert('OK')
      }
		} else {
			if(confirm("Pordi ka! \nUsa pa?") == true) {
        location.reload()
      } else {
        alert('OK')
      }
		}
	}
}

function reload() {
  location.reload();
}

