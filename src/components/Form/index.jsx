import { useState } from "react";
import ShowResult from "../ShowResult";
import styles from '../Form/Form.module.css';
import formulaImg from '../../assets/formula.png';

const Form = () => {

  const [number, setNumber] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResult(true);
  };

  const handleOnChange = (e) => {
    setNumber(parseInt(e.target.value));
    setShowResult(false);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.form__title}>SNGULAR Challenge</h2>
      <img src={formulaImg} alt="Fórmula del reto" className={styles.form__image} />
      <div className={styles.form__controls}>
        <label className={styles.form__label}>Ingresa el número a calcular: </label>
        <input type="number" onChange={handleOnChange} className={styles.form__input}/>
        <button type="submit" className={styles.form__button}>Calcular</button>
      </div>
      {showResult ? <ShowResult number={number} /> : null}
    </form>
  );
};

export default Form;