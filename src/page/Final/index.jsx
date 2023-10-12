import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Banner from '../../assets/Banner.png';

const Final = () => {
  const blueK = [2, 8, 7, 0, 2];
  const redK = [0, 1, 2, 4, 4, 0];

  const blueD = [1, 2, 3, 2, 3];
  const redD = [3, 3, 2, 5, 6];

  const blueA = [8,10,10,13,11];
  const redA = [3,4,5,5,7];

  const blueM = [252,182,219,264,30];
  const redM = [201,164,243,234,27];
  
  const [blueTeamData, setBlueTeamData] = useState([]);
  const [redTeamData, setRedTeamData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // GET 요청 보내기
    axios
      .get('https://daitda.jeongho.dev/data/champion')
      .then((response) => {
        // 서버로부터 받은 데이터를 처리
        const personData = response.data.personInfoList;
        const teamData = response.data.teamInfoList;

        // Blue 팀과 Red 팀 데이터 분리
        const blueTeam = personData.slice(0, 5);
        const redTeam = personData.slice(5);
        setBlueTeamData(blueTeam);
        setRedTeamData(redTeam);
        setLoading(false);
      })
      .catch((error) => {
        console.error('GET 요청 중 오류 발생:', error);
      });
  }, []);

  return (
    <Body>
      <div>
        <img
          src={Banner}
          alt="error"
          style={{ width: '100.5%', marginLeft: '-4px', marginTop: '-25px' }}
        />
        <form>
          <Table>
            <tr>
              <th>Team</th>
              <th>Player</th>
              <th>Kill</th>
              <th>Death</th>
              <th>Assistance</th>
              <th>Damage</th>
              <th>Attack</th>
              <th>Minion Kill</th>
              <th>CurrentGold</th>
              <th>TotalGold</th>
            </tr>
            {blueTeamData.map((data, index) => (
              <tr>
                <td style={{ background: '#227BE2' }}>blue</td>
                <td>
                  {data.personId == 1
                    ? 'Kiin'
                    : data.personId == 2
                    ? 'Cuzz'
                    : data.personId == 3
                    ? 'Bdd'
                    : data.personId == 4
                    ? 'Aiming'
                    : data.personId == 5
                    ? 'Lehends'
                    : data.personId == 6
                    ? 'Clear'
                    : data.personId == 7
                    ? 'Willer'
                    : data.personId == 8
                    ? 'Clozer'
                    : data.personId == 9
                    ? 'Teddy'
                    : 'Kael'}
                </td>
                <td>{blueK[index]}</td>
                <td>{blueD[index]}</td>
                <td>{blueA[index]}</td>
                <td>{data.totalDamageDone}</td>
                <td>{data.totalDamageTaken}</td>
                <td>{redM[index]}</td>
                <td>{data.currentGold}</td>
                <td>{data.totalGold}</td>
              </tr>
            ))}
            {redTeamData.map((data, index) => (
              <tr>
                <td style={{ background: '#F50564' }}>red</td>
                <td>
                  {data.personId == 1
                    ? 'Kiin'
                    : data.personId == 2
                    ? 'Cuzz'
                    : data.personId == 3
                    ? 'Bdd'
                    : data.personId == 4
                    ? 'Aiming'
                    : data.personId == 5
                    ? 'Lehends'
                    : data.personId == 6
                    ? 'Clear'
                    : data.personId == 7
                    ? 'Willer'
                    : data.personId == 8
                    ? 'Clozer'
                    : data.personId == 9
                    ? 'Teddy'
                    : 'Kael'}
                </td>
                <td>{redK[index]}</td>
                <td>{blueD[index]}</td>
                <td>{blueA[index]}</td>
                <td>{data.totalDamageDone}</td>
                <td>{data.totalDamageTaken}</td>
                <td>{blueM[index]}</td>
                <td>{data.currentGold}</td>
                <td>{data.totalGold}</td>
              </tr>
            ))}
          </Table>
        </form>
      </div>
    </Body>
  );
};

export default Final;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 24px;

  background: #0d2527;
`;

const Table = styled.table`
  width: 100vw;
  height: auto;
  background: #000;
  color: #fff;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.88px;
  margin-top: -12px;

  th,
  td {
    text-align: center;
    padding: 38px 10px;
  }
`;
