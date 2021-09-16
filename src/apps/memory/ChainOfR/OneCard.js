import LogicGame from "./LogicGame";

class OneCard extends LogicGame {
  process(twice, item, stateBoard, setStateBoard) {
    if (twice.length === 0) {
      twice.push(item);
      //twice = [...twice, item];
    } else {
      this.next.process(twice, item, stateBoard, setStateBoard);
    }

    const newStateBoard = stateBoard.map((loop) => {
      //para voltear las cartas
      if (loop.id === item.id) {
        loop.state = true;
        loop.styles = "itemColor";
      }
      return loop;
    });
    setStateBoard(newStateBoard);
  }
}
export default OneCard;