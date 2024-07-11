
angular.module('ticTacToeApp')
  .controller('GameController', ['$scope', 'GameService', function($scope, GameService) {
    $scope.board = GameService.getBoard();
    $scope.statusMessage = "Player X's turn";

    $scope.makeMove = function(index) {
      if (GameService.makeMove(index)) {
        $scope.statusMessage = GameService.getStatusMessage();
      }
    };

    $scope.resetGame = function() {
      GameService.resetGame();
      $scope.board = GameService.getBoard();  // Ensure board is updated
      $scope.statusMessage = GameService.getStatusMessage();  // Ensure statusMessage is updated
    };
  }]);
