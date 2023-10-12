import styled from 'styled-components';
import BarChart from './barChart';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Chart4 = () => {
  const [data, setData] = useState({
    blueKillSpecific: [
      'RIFTHERALD',
      'RIFTHERALD',
      'FIRE_DRAGON',
      'BARON_NASHOR',
    ],
    redKillSpecific: ['HEXTECH_DRAGON'],
    blueKillCount: 4,
    redKillCount: 1,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // GET 요청 보내기
    axios
      .get('https://daitda.jeongho.dev/data/monster?timeStamp=2000000')
      .then((response) => {
        // 서버로부터 받은 데이터를 처리
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('GET 요청 중 오류 발생:', error);
      });
  }, []);
  return (
    <BackArea>
      <Backgound>
        <Title>
          <SP1>|</SP1>
          <SP2>팀별 중요 몬스터 킬 수</SP2>
        </Title>
        <Text>각 플레이 팀의 중요 몬스터 킬 수를 나타냅니다.</Text>
        <DIV>
          <BarChart labels={["blue", "red"]} pdata={[data.blueKillCount, data.redKillCount]} color={["#227BE2","#F50564"]}/>
        </DIV>
      </Backgound>
    </BackArea>
  );
};

export default Chart4;

const Backgound = styled.div`
  width: 953px;
  height: 658px;
  border-radius: 5px;
  background: #071314;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-left: 140px;

  display: flex;
  flex-direction: column;
`;

const BackArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
`;

const SP1 = styled.div`
  color: #1df659;
  text-align: center;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: 150%; /* 45px */
  letter-spacing: 1.2px;
`;

const SP2 = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 1.2px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  padding: 24px 0 0 29px;
`;

const Text = styled.div`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 22.5px */
  letter-spacing: 0.6px;
  padding: 0 0 0 29px;

  width: 100%;
  text-align: left;
`;

const DIV = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;
