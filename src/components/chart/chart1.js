import styled from 'styled-components';
import BarChart from './barChart';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

const Chart1 = () => {
  // const [blueTeamData, setBlueTeamData] = useState([]);
  // const [redTeamData, setRedTeamData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // GET 요청 보내기
  //   axios
  //     .get('https://daitda.jeongho.dev/data/champion')
  //     .then((response) => {
  //       // 서버로부터 받은 데이터를 처리
  //       const personData = response.data.personInfoList;
  //       const teamData = response.data.teamInfoList;

  //       // Blue 팀과 Red 팀 데이터 분리
  //       const blueTeam = personData.slice(0, 5);
  //       const redTeam = personData.slice(5);

  //       setBlueTeamData(blueTeam);
  //       setRedTeamData(redTeam);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error('GET 요청 중 오류 발생:', error);
  //     });
  // }, []);

  return (
    <BackArea>
      <Backgound>
        <Title>
          <SP1>|</SP1>
          <SP2>팀별 킬 횟수</SP2>
        </Title>
        <Text>각 팀의 킬 수를 나타냅니다.</Text>
        <DIV>
          <BarChart labels={['blue', 'red']} pdata={[19, 11]} color={["#227BE2","#F50564"]}/>
        </DIV>
      </Backgound>
      <Backgound2>
        <Title>
          <SP1>|</SP1>
          <SP2>선수별 킬 횟수</SP2>
        </Title>
        <Text>각 팀에 속한 선수별 킬 수를 나타냅니다.</Text>
        <DIV>
          <BarChart
            labels={[
              'Kiin',
              'Cuzz',
              'Bdd',
              'Aiming',
              'Lehends'
            ]}

            pdata={[2,8,7,0,2]}

            color="#227BE2"
          />
          <BarChart
            labels={[
              'Clear',
              'Willer',
              'Clozer',
              'Teddy',
              'Kael',
            ]}

            pdata={[1,2,4,4,0]}

            color="#F50564"
          />
        </DIV>
      </Backgound2>
    </BackArea>
  );
};

export default Chart1;

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

const Backgound2 = styled.div`
  width: 953px;
  height: 900px;
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
  line-height: 150%;
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
  line-height: 150%;
  letter-spacing: 0.6px;
  padding: 0 0 0 29px;

  width: 100%;
  text-align: left;
`;

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  gap: 50px;
`;
