export const AgeCalculatorByLength = (length: number) => {
  if (length > 51)
    //'50cm가 넘어가는 감성돔은 이 계산식으로 측정할 수 없습니다. ';
    return;

  const yo = (-1000 / 147) * Math.log(1 - length / 50.6) - 3.263;

  return yo;
};
