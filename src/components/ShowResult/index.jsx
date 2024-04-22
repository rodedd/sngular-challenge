import serieCalculator from "../../utils/serieCalculator";

const ShowResult = ({ number }) => {

  const result = serieCalculator(number);

  return (
    <p>El resultado de la serie es: {result}</p>
  );
};

export default ShowResult;