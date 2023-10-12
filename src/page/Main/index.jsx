import styled from 'styled-components';
import Button from '../../components/button';
import Heart from '../../assets/svg/heart';
import Home from '../../assets/svg/home';
import Location from '../../assets/svg/location';
import Face from '../../assets/svg/face';
import { useState } from 'react';
import Image from '../../assets/img2.png';
import Chart1 from '../../components/chart/chart1';
import Chart2 from '../../components/chart/chart2';
import Chart3 from '../../components/chart/chart3';
import Chart4 from '../../components/chart/chart4';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const [select, setSelect] = useState(1);
  const navigate = useNavigate();

  // 선택된 차트를 렌더링할 변수
  let selectedChart;

  // select 상태에 따라 선택된 차트를 설정
  if (select === 1) {
    selectedChart = <Chart1 />;
  } else if (select === 2) {
    selectedChart = <Chart2 />;
  } else if (select === 3) {
    selectedChart = <Chart3 />;
  } else {
    selectedChart = <Chart4 />;
  }

  return (
    <Body>
      {selectedChart}
      <ButtonArea>
        <Button
          onClick={() => {
            setSelect(1);
          }}
          text="Kill event"
          icon={<Heart />}
          selection={1}
          state={select}
        />
        <Button
          onClick={() => {
            setSelect(2);
          }}
          text="Tower event"
          icon={<Home />}
          selection={2}
          state={select}
        />
        <Button
          onClick={() => {
            setSelect(3);
          }}
          text="Suppressor event"
          icon={<Location />}
          selection={3}
          state={select}
        />
        <Button
          onClick={() => {
            setSelect(4);
          }}
          text="Monster event"
          icon={<Face />}
          selection={4}
          state={select}
        />
        <div></div>
        <img width="348px" height="245px" src={Image} alt="img"></img>
        <div></div>
        <FinalButton
          onClick={() => {
            navigate('/AllResult');
          }}
        >
          Final results
        </FinalButton>
      </ButtonArea>
    </Body>
  );
};

export default Main;

const Body = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 24px;

  background: #0d2527;
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-right: 160px;
`;

const FinalButton = styled.button`
  width: 194px;
  height: 61px;

  border-radius: 10px;
  background: linear-gradient(
    180deg,
    rgba(29, 246, 89, 0.7) 0%,
    rgba(47, 108, 113, 0.7) 100%
  );
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 30px */
  letter-spacing: 0.8px;
`;
