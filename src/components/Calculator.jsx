import React, { useState } from 'react';
import Display from './Display';
import RowButtons from './RowButtons';
import calculate from '../logic/calculate';
import FetchApi from './Fetch';

const Calculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  return (
    <div className="container">
      <div className="row justify-content-center my-3">
        <Display calculatorData={calculatorData} />
        <RowButtons
          calculatorData={calculatorData}
          setCalculatorData={setCalculatorData}
          calculate={calculate}
        />
        <FetchApi />
      </div>
    </div>
  );
};

export default Calculator;
