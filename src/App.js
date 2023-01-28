import Calculator from "./component/Calculator";
import { useState } from "react";

function App() {
  const [result, setResult] = useState('');


  const getValue = (text) => {
    setResult(result.concat(text));
  }


  const calculate = () => {
    
    setResult(eval(result));
  }

  const clear = () => {
    setResult('');
  }

  const del = () => {
    setResult(result.slice(0, result.length - 1))
  }

  return (
    <div className="App">
      <Calculator getValue={getValue} result={result} calc={calculate} clear={clear} del={del} />
    </div>
  );
}

export default App;
