import React from "react";
import ReactDom from "react-dom";
import Game from "./game";
import "./main.css";

class PlayGame extends React.Component {
  constructor(props) {
    super(props);

    this.game = props.game;
    this.state = {
      table: this.game.table
    };

    this.handleOnclick = this.handleOnclick.bind(this);
    this.renderTable = this.renderTable.bind(this);
  }
  render() {
    const table = this.game.table;
    let onclickHandler = this.handleOnclick;
    const hasWon = this.game.hasWon();
    if (hasWon) {
      onclickHandler = null;
    }
    return (
      <table onClick={onclickHandler}>
        <tbody>
          <tr>
            <td id="1">{table[0]}</td>
            <td id="2">{table[1]}</td>
            <td id="3">{table[2]}</td>
          </tr>
          <tr>
            <td id="4">{table[3]}</td>
            <td id="5">{table[4]}</td>
            <td id="6">{table[5]}</td>
          </tr>
          <tr>
            <td id="7">{table[6]}</td>
            <td id="8">{table[7]}</td>
            <td id="9">{table[8]}</td>
          </tr>
        </tbody>
      </table>
    );
  }

  renderTable(table) {
    table.forEach((element, index) => {
      console.log(element, index);
    });
  }

  handleOnclick(e) {
    const id = e.target.id;
    this.game.placeSymbol(id);
    this.setState({
      table: this.game.table
    });
  }
}

const game = new Game("anu", "sai");

ReactDom.render(<PlayGame game={game} />, document.getElementById("root"));
