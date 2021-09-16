import LogicGame from "./LogicGame";

class TwoCard extends LogicGame {
  process(twice, item, stateBoard, setStateBoard, score) {
    if (twice.length == 1) {
      twice.push(item);
      const [item1] = twice;
      //let score = 50;
      if (item1.key !== item.key) {
        setTimeout(() => {
          const newStateBoard = stateBoard.map((item) => {
            if (item.done === false) {
              item.state = false;
              item.styles = "item";

              if (score === 0) {
                item.backend = "??";
                score = 55;
                alert("GAME OVER");
              }
            }
            return item;
          });
          setStateBoard(newStateBoard);
        }, 1000);
      } else {
        this.next.process(twice, item, stateBoard, setStateBoard, score);
      }
    }
  }
}
export default TwoCard;
