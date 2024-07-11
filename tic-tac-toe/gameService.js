// gameService.js
angular.module('ticTacToeApp')
  .service('GameService', function() {
    var board = ['', '', '', '', '', '', '', '', ''];
    var currentPlayer = 'X';
    var statusMessage = "Player X's turn";

    var winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    function checkWinner() {
      for (var i = 0; i < winningCombinations.length; i++) {
        var [a, b, c] = winningCombinations[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          return board[a];
        }
      }
      return null;
    }

    this.getBoard = function() {
      return board;
    };

    this.makeMove = function(index) {
      if (board[index] === '' && !checkWinner()) {
        board[index] = currentPlayer;
        var winner = checkWinner();
        if (winner) {
          statusMessage = "Player " + winner + " wins!";
        } else if (board.every(cell => cell !== '')) {
          statusMessage = "It's a draw!";
        } else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
          statusMessage = "Player " + currentPlayer + "'s turn";
        }
        return true;
      }
      return false;
    };

    this.getStatusMessage = function() {
      return statusMessage;
    };

    this.resetGame = function() {
      board = ['', '', '', '', '', '', '', '', ''];
      currentPlayer = 'X';
      statusMessage = "Player X's turn";
    };
  });
