class Game {
  constructor(player1, player2) {
    this.players = [];
    this.table = new Array(9).fill("%");
    this.turn = 0;
    this.allMoves = [];
    this.getCurrentPlayerName = this.getCurrentPlayerName.bind(this);
    this.winningCombinations = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 5, 9],
      [1, 5, 9],
      [3, 5, 7]
    ];
    this.players.push({ name: player1, turn: 0, symbol: "X", moves: [] });
    this.players.push({ name: player2, turn: 1, symbol: "O", moves: [] });
  }

  getCurrentPlayerName() {
    return this.getCurrentPlayer.name;
  }

  getCurrentPlayer() {
    return this.players[this.turn];
  }
  getTurn() {
    this.turn = 1 - this.turn;
  }

  validatePosition(position) {
    if (0 >= position && position > 10) return false;
    if (this.allMoves.includes(position)) {
      return false;
    }
    return true;
  }

  showWin() {
    console.log(this.getCurrentPlayer().name + " won the game");
  }

  hasWon() {
    const moves = this.getCurrentPlayer().moves;
    return this.winningCombinations.some(combination => {
      console.log(
        combination,
        combination.every(position => moves.includes(position)),
        moves
      );
      return combination.every(position => moves.includes(position));
    });
  }

  placeSymbol(move) {
    const position = +move;

    if (this.validatePosition(position)) {
      this.getTurn();
      this.getCurrentPlayer().moves.push(position);
      this.table[position - 1] = this.getCurrentPlayer().symbol;
      this.allMoves.push(position);
      // this.hasWon(this.getCurrentPlayer());
      return true;
    }
    return false;
  }
}

export default Game;
