import React, { useState } from "react";
//DOM Document, Objest, Mapping
const CounterComponent = () => {
const [counter, setCounter] = useState({
    name: "Pedro",
    skills: ["java", "javascript"],
    age: 10,
});
console.log(counter);

const add = () => {
    const { age } = counter;
    setCounter({...counter, age: age + 1 });
};
const subtract = () => {
    const { age } = counter;
    setCounter({...counter, age: age - 1 });
};
return (
    <>
        {JSON.stringify(counter)}
        <button onClick={add}>+1</button>
        <button onClick={subtract}>-1</button>
    </>
);
};
export default CounterComponent;