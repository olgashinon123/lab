import React, { useEffect, useState } from "react";
import { CardComponent } from "./CardComponent";
import GoodCards from "./ChainOfR/GoodCards";
import OneCard from "./ChainOfR/OneCard";
import TwoCard from "./ChainOfR/TwoCard";
import { createBoard } from "./createBoard";
import "./styles.css";
let list = [];
let twice = [];
let score = 50;
let tiempo = [];

/*let oneCard = new OneCard();
let twoCard = new TwoCard();
let goodCard = new GoodCards();
oneCard.setNext(twoCard);
twoCard.setNext(goodCard);*/

export const MemoryComponent = () => {
  useEffect(() => {
    list = createBoard(10);
    setStateBoard(list);
    console.log(list);
  }, []);
  const [stateBoard, setStateBoard] = useState(list);
  const handlerClick = ({ id }) => {
    if (twice.length == 2) {
      twice = [];
    }
    const item = stateBoard.find((item) => item.id === id);
    //      oneCard.process(twice, item, stateBoard, setStateBoard);
    if (twice.length == 0) {
      twice = [...twice, item];
    } else if (twice.length == 1) {
      twice = [...twice, item];
      const [item1] = twice;
      if (item1.key !== item.key) {
        console.log("are different");
        setTimeout(() => {
          const newStateBoard = stateBoard.map((item) => {
            if (item.done === false) {
              item.state = false;
              item.styles = "item";
              item.score = "score";

              if (score === 0) {
                item.backend = "??";
                score = 55;

                alert("GAME OVER");
              }
              score = score - 0.5;
            }
            return item;
          });
          setStateBoard(newStateBoard);
        }, 1000);
      } else {
        const [item1, item2] = twice;
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
    const newStateBoard = stateBoard.map((item) => {
      if (item.id === id) {
        item.state = true;
        item.styles = "itemColor";
      }
      return item;
    });
    setStateBoard(newStateBoard);
  };
  return (
    <>
      <div>
        <h1>Memory app</h1>
        <hr />
        <div>
          <button className="container">SCORE..({score})</button>
        </div>
        <div className="container">
          {stateBoard.map((item) => (
            <CardComponent
              key={item.id}
              item={item}
              handlerClick={handlerClick}
            />
          ))}
        </div>
      </div>
    </>
  );
};
