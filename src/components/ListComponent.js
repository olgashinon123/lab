import { useState } from "react";

const ListComponent = () => {
    const listData = [
        {name: "Goku", age: 56},
        {name: "Vegeta", age: 70},
        {name: "Mark", age: 17},
];
    const [list, setList] = useState(listData);
    const addName = () => {
        const newList = [...list, {name: "Flash", age: 34}];
        setList(newList);
    };
    return (
    <div>
        <ol>
            {list.map((item) => (
                <li key={item.name}>{item.name} age {item.age}</li>
            ))}
        </ol>
        <button onClick={addName}>add Name</button>
    </div>
    );
};
export default ListComponent;