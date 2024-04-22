import { useState } from "react";
import ShowResult from "../ShowResult";

const Form = () => {

  const [number, setNumber] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResult(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Number
        <input type="number" onChange={e => setNumber(parseInt(e.target.value))}/>
      </label>
      <button type="submit">Calcular</button>
      {showResult ? <ShowResult number={number} /> : null}
    </form>
  );
};

export default Form;