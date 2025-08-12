import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [resultado, setResultado] = useState("");


  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };


  const calcular = () => {
    try {
      setResultado(eval(input)); 
    } catch (error) {
      setResultado("Erro");
    }
  };


  const limpar = () => {
    setInput("");
    setResultado("");
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input || "0"} </div>
        <div className="result"> {resultado}</div>
      </div>

      <div className="buttons">
        <button onClick={limpar}>C</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={calcular}>=</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("0")}>0</button>
      </div>
    </div>
  );
}

export default App;
