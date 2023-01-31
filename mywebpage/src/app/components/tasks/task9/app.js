const squares = document.querySelectorAll(".square");
let currentPlayer = "X";

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", function () {
    if (this.textContent === "") {
      this.textContent = currentPlayer;

      if (currentPlayer === "X") {
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }
    }

    checkForWinner();
  });
}

function checkForWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (
      squares[a].textContent === squares[b].textContent &&
      squares[b].textContent === squares[c].textContent &&
      squares[a].textContent !== ""
    ) {
      alert(`Player ${squares[a].textContent} wins!`);
    }
  }
}
