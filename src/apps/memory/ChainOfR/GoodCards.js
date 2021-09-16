import LogicGame from "./LogicGame";

class GoodCards extends LogicGame {
  process(twice, item, stateBoard, setStateBoard) {
    let score = 50;
    const [item1, item2] = twice;
    //let score = 50;
    const newStateBoard = stateBoard.map((item) => {
      if (item.id === item1.id || item.id === item2.id) {
        item.done = true;

        if (item.done) {
          score = score + 12.5;
        }
      }
      return item;
    });
    setStateBoard(newStateBoard);
  }
}
export default GoodCards;
