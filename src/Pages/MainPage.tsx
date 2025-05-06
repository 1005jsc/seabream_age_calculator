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
        측정해서 얻어낸 계산식임
      </Exp3P>
      <EmptyDiv />
      <Exp3P>
        본 연구에서는 감성돔의 가장 적절한 연령사정법을 모색하였다.그 결과 이석
        을 얇게 절단하여 판독하는 방법(Thinsectionmethod)이 적절하며,핵을 기준으
        로 세로방향으로 절단하였을 경우가 윤문판독이 가장 용이하였다.또한 연령을
        이미 알고 있는 양식산 감성돔의 연령형질과 비교하여 윤문이 실제 연령을
        나타 낸다는 것을 확인하였다. 체장(FL)과 체중(BW)간의 관계는
        BW=0.027FL2.927(r2=0.978)로 나타 났으며,vonBertalanffydml성장식은 로
        이론 적 최대체장(L∞)이 50.60cm,성장계수(K)가 0.147/year,체장이 0일 때의
        이론적 연령(t0) 은-3.263세로추정되었다.체중성장식은 W t= 1945.7(1- e -
        0.147(t+ 3.263)) 2.927 로서 최대체중(W∞)은 1945.7g이었다.
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
const EmptyDiv = styled.div`
  height: 30px;
  width: 20px;
`;
