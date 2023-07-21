
import { useState } from "react";
import "./style.css";


function Itemlist({ greetings }) {
    const [saludo, setSaludo] = useState(greetings);

    function changeGreeting() {
        setSaludo("Hello people");
    }

    return (
        <div className="item-list-container">
            <Content saludo={saludo} changeGreeting={changeGreeting} />
        </div>
    );
}

function Content({ saludo, changeGreeting }) {
    return (
        <>
            <p>{saludo}</p>
            <button onClick={changeGreeting}>Press me</button>
        </>
    );
}
export default Itemlist;