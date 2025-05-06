import { useEffect, useState } from 'react';
import { AgeCalculatorByLength } from '../../Util/Calculator';
import styled from 'styled-components';

type AgeCalculatorProps = {};

const AgeCalculator = ({}: AgeCalculatorProps) => {
  const [length, setLength] = useState<number | undefined>();

  const [result, setResult] = useState<number | undefined>();

  useEffect(() => {
    if (length) {
      setResult(AgeCalculatorByLength(length));
    }
  }, [length]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    // console.log(e.target.value);
    setLength(parseFloat(e.target.value));
  };

  return (
    <>
      <EmptyDiv />
      <p>단위 cm 입력</p>
      <input
        type="number"
        min="0"
        max="51"
        step="0.001"
        onChange={handleChange}
        value={length}
        inputMode="decimal"
      />

      <Result>
        {!!result
          ? result
          : '**50cm가 넘어가는 감성돔은 이 계산식으로 측정할 수 없습니다.'}
        {/* {result
          ? result > 0
            ? result
            : ''
          : '**50cm가 넘어가는 감성돔은 이 계산식으로 측정할 수 없습니다.'} */}
      </Result>
    </>
  );
};

export default AgeCalculator;

const Result = styled.p``;

const EmptyDiv = styled.div`
  height: 30px;
  width: 20px;
`;
