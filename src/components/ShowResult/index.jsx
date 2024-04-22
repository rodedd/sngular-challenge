import serieCalculator from "../../utils/serieCalculator";
import styles from './ShowResult.module.css';

const ShowResult = ({ number }) => {

  const resultData = serieCalculator(number);

  if(!resultData.error) {
    return (<p className={styles.paragraph}>El resultado de la serie es: <span>{resultData.value}</span></p>);
  } else {
    return (<p className={styles.error}><span>ERROR: </span>{resultData.message}</p>);
  }
};

export default ShowResult;