import styled from 'styled-components';
import AgeCalculator from '../Components/Main/AgeCalculator';

type MainPageProps = {};

const MainPage = ({}: MainPageProps) => {
  return (
    <MainPageSec>
      <TitleH1>야생 감성돔 나이 계산기 </TitleH1>
      <Exp1P>
        이 계산식의 바탕이 되는 자료는 감성돔 나이 측정에 관해 부경대학교 김광훈
        선생님이 2009월 작성하셨다{' '}
      </Exp1P>
      <Exp2P>
        연구대상의 야생 감성돔 시료는 2007년 1월 부터 2008년 9월까지 여수
        위판장에서 월 30마리 이상씩 채집함, 이들의 이석을 실험군으로 삼음
      </Exp2P>
      <Exp2P>
        연령을 정확하게 아는 0~4세의 양식 감성돔의 이석 윤문을 대조군으로 삼음{' '}
      </Exp2P>

      <Exp3P>
        거의 1년 9개월동안 13cm~48cm 체장의 총 1545마리의 야생 감성돔의 이석을
        측정해본 결과
      </Exp3P>
      <AgeCalculator />
    </MainPageSec>
  );
};

export default MainPage;

const MainPageSec = styled.section`
  padding: 40px 40px;
  /* border: 1px solid black; */
`;

const TitleH1 = styled.h1``;
const Exp1P = styled.p``;
const Exp2P = styled.p``;

const Exp3P = styled.p``;
