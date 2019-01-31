function add7 (x, y) {
   var z = x + y;
   console.log(z);
   console.log("Hello World");
}


const results = document.querySelector('#result');
const printResult = document.createElement('p');
const score = document.createElement('p');
score.setAttribute('style', 'white-space: pre;'); // Allows for white space

results.appendChild(printResult);
results.appendChild(score);

var wins = 0;
var losses = 0;
var ties = 0;
var games = 0;
var result;

const btns = document.querySelectorAll('button');

btns.forEach((button) => {
   button.addEventListener('click', (e) => {
      const compSel = computerPlay();
      var result = playRound(button.id, compSel);
      games++;

      if (result == 1) {
         printResult.textContent = "You win!";
         wins++;
      }
      else if (result == 0) {
         printResult.textContent = "Tie.";
         ties++;
      }
      else {
         printResult.textContent = "You lose.";
         losses++;
      }
      printScore(wins, losses, ties, games);
      
   });
});

function printScore (wins, losses, ties, games) {
   score.textContent = "Wins: " + wins + "\r\n";
   score.textContent += "Losses: " + losses + "\r\n";
   score.textContent += "Ties: " + ties + "\r\n";
   score.textContent += "Games played: " + games;
}

function playRound(playerSel, compSel) {
   var p1 = '';

   if (playerSel == compSel) {
      return 0;
   }
   else {
      if (playerSel == 'rock')
         if (compSel == 'scissors')
            return 1;
         else
            return -1;
      else if (playerSel == 'paper')
         if (compSel == 'rock')
            return 1;
         else
            return -1;
      else if (playerSel == 'scissors')
         if (compSel == 'paper')
            return 1;
         else
            return -1;
    }

}

function computerPlay() {
   var choice = Math.floor((Math.random() * 3));

   if (choice == 0)
      return 'rock';
   else if (choice == 1)
      return 'paper';
   else
      return 'scissors';
}
