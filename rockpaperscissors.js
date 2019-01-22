function add7 (x, y) {
   var z = x + y;
   console.log(z);
   console.log("Hello World");
}

function game() {
   var wins = 0;
   var games = 0;

   do {
      const computerSelection = computerPlay();
      var playerSelection = prompt("Rock, paper, scissors!");

      while (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors' && playerSelection != 'q')
         playerSelection = prompt("Not a valid move (rock, paper, scissors). Type q to quit.");

      if (playerSelection == 'q') {
         window.alert("Wins: " + wins + "\nGames played: " + games);
         console.log("Wins: " + wins);
         console.log("Games played: " + games);
         break;
      }

      games++;
      var result = playRound(playerSelection, computerSelection);

      if (result == 1) {
         window.alert("You win!");
         console.log("You win!");
         wins ++;
      }
      else if (result = 0) {
         window.alert("You lose.");
         console.log("You lose.");
      }
      else {
         window.alert("Tie.");
         console.log("Tie.");
      }

      window.alert("Wins: " + wins + "\nGames played: " + games);
      console.log("Wins: " + wins);
      console.log("Games played: " + games);
   } while (window.confirm("Again?"));
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
