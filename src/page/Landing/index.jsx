import Back from '../../assets/back.png';
import Button from '../../assets/button.png';
import styled from 'styled-components';
import ChampionOptions from '../../components/ai';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import OpenAI from 'openai';
import { useNavigate } from 'react-router-dom';
import teamIngfo from '../../assets/temaInfo.png';
import AI from '../../assets/AI.png';
import Banner from '../../assets/Banner.png';

const Landing = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const championsWithNumbers = [
    {
      champion: 'Jax',
      number: 27,
    },
    {
      champion: 'Poppy',
      number: 54,
    },
    {
      champion: 'Taliyah',
      number: 67,
    },
    {
      champion: 'Ezreal',
      number: 16,
    },
    {
      champion: 'Karma',
      number: 33,
    },
    {
      champion: 'Sejuani',
      number: 58,
    },
    {
      champion: 'Viego',
      number: 75,
    },
    {
      champion: 'Syndra',
      number: 66,
    },
    {
      champion: 'Zeri',
      number: 83,
    },
    {
      champion: 'Yuumi',
      number: 81,
    },
    {
      champion: "K'Sante",
      number: 30,
    },
    {
      champion: 'Xin Zhao',
      number: 79,
    },
    {
      champion: 'Ryze',
      number: 57,
    },
    {
      champion: 'Lucian',
      number: 43,
    },
    {
      champion: 'Nami',
      number: 49,
    },
    {
      champion: 'Gwen',
      number: 23,
    },
    {
      champion: 'Vi',
      number: 74,
    },
    {
      champion: 'Irelia',
      number: 25,
    },
    {
      champion: 'Draven',
      number: 14,
    },
    {
      champion: 'Amumu',
      number: 4,
    },
    {
      champion: 'Aatrox',
      number: 0,
    },
    {
      champion: 'Wukong',
      number: 77,
    },
    {
      champion: 'Varus',
      number: 71,
    },
    {
      champion: 'Renata Glasc',
      number: 55,
    },
    {
      champion: 'Camille',
      number: 11,
    },
    // 나머지 챔피언 데이터 추가
  ];
  // OpenAI API 호출
  const [chatCompletion, setChatCompletion] = useState({
    choices: [{ message: { content: '' } }],
  });
  const rand = Math.floor(Math.random() * 20);
  // React state를 사용하여 선택된 챔피언을 추적
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');
  const [selectedOption4, setSelectedOption4] = useState('');
  const [selectedOption5, setSelectedOption5] = useState('');
  const [selectedOption6, setSelectedOption6] = useState('');
  const [selectedOption7, setSelectedOption7] = useState('');
  const [selectedOption8, setSelectedOption8] = useState('');
  const [selectedOption9, setSelectedOption9] = useState('');
  const [selectedOption10, setSelectedOption10] = useState('');
  const [time1, setTime1] = useState("");
  const [time2, setTime2] = useState("");
  const [gptMessage, setGptMessage] = useState('');

  // 선택 옵션의 변경을 처리하는 핸들러 함수
  const handleOption1Change = (event) => {
    setSelectedOption1(event.target.value);
    console.log(selectedOption1);
  };

  const handleOption2Change = (event) => {
    setSelectedOption2(event.target.value);
  };

  const handleOption3Change = (event) => {
    setSelectedOption3(event.target.value);
  };

  const handleOption4Change = (event) => {
    setSelectedOption4(event.target.value);
  };

  const handleOption5Change = (event) => {
    setSelectedOption5(event.target.value);
  };

  const handleOption6Change = (event) => {
    setSelectedOption6(event.target.value);
  };

  const handleOption7Change = (event) => {
    setSelectedOption7(event.target.value);
  };

  const handleOption8Change = (event) => {
    setSelectedOption8(event.target.value);
  };

  const handleOption9Change = (event) => {
    setSelectedOption9(event.target.value);
  };

  const handleOption10Change = (event) => {
    setSelectedOption10(event.target.value);
  };

  async function getOpenAiToken() {
    try {
      //응답 성공
      const response = await axios.post(
        'http://api.h4u.kro.kr:7070/api/openai-key',
        {
          teamKey: '20eac4a1-22d2-43d9-bbcb-de21aaa6fb33',
        },
      );
      console.log(response.data.token);
      return response.data.token;
    } catch (error) {
      //응답 실패
      console.error(error);
    }
  }
  const [towers, setTowers] = useState({});
  const [inhibitor, setInhibitor] = useState({});
  const [mon, setMon] = useState({});
  
  async function tower() {
    const milliseconds = (time1 * 60 + time2) * 10; // 초 단위의 시간을 밀리초 단위로 변환
      //응답 성공
      axios
      .get(`https://daitda.jeongho.dev/data/tower?timeStamp=${milliseconds}`)
      .then((response) => {
        // 서버로부터 받은 데이터를 처리
        setTowers(response.data);
      })
      .catch((error) => {
        console.error('GET 요청 중 오류 발생:', error);
      });

      axios
      .get(`https://daitda.jeongho.dev/data/inhibitor?timeStamp=${milliseconds}`)
      .then((response) => {
        // 서버로부터 받은 데이터를 처리
        setInhibitor(response.data);
      })
      .catch((error) => {
        console.error('GET 요청 중 오류 발생:', error);
      });

      axios
      .get(`https://daitda.jeongho.dev/data/monster?timeStamp=${milliseconds}`)
      .then((response) => {
        // 서버로부터 받은 데이터를 처리
        setMon(response.data);
      })
      .catch((error) => {
        console.error('GET 요청 중 오류 발생:', error);
      });
  }
  const [model, setModel] = useState('');
  const called = useCallback(async () => {
    // console.log(await getOpenAiToken());
    //  const configuration = {
    //    apiKey: await getOpenAiToken(),
    //  };

    axios.post("http://52.78.216.172:5001/match/prediction", {
      blueTeams: [1, 10, -1, 12, 13],
      redTeams: [2, 4 ,5, 9, 11]
      })
      .then(function (response) {
        setModel(response.data);
        console.log(response.data);
      }).catch(function (error) {
        console.error('GET 요청 중 오류 발생:', error);
      });

    const openai = new OpenAI({
      apiKey: await getOpenAiToken(),
      dangerouslyAllowBrowser: true,
    });

    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: `너는 리그오브레전드 챔피온 조합을 판별하는 판별사야! 이 조합에 대해서 판별해줘! 
            탑:${
              championsWithNumbers.find(
                (champion) => champion.number === Number(selectedOption1),
              ).champion
            } 
            정글:${
              championsWithNumbers.find(
                (champion) => champion.number === Number(selectedOption2),
              ).champion
            } 
            미드:${
              championsWithNumbers.find(
                (champion) => champion.number === Number(selectedOption3),
              ).champion
            } 
            원딜:${
              championsWithNumbers.find(
                (champion) => champion.number === Number(selectedOption4),
              ).champion
            } 
            서폿:${
              championsWithNumbers.find(
                (champion) => champion.number === Number(selectedOption5),
              ).champion
            }`,
        },
      ],
      model: 'gpt-3.5-turbo',
    });

    console.log(`너는 리그오브레전드 챔피온 조합을 판별하는 판별사야! 이 조합에 대해서 판별해줘! 
        탑:${
          championsWithNumbers.find(
            (champion) => champion.number === Number(selectedOption1),
          ).champion
        } 
        정글:${
          championsWithNumbers.find(
            (champion) => champion.number === Number(selectedOption2),
          ).champion
        } 
        미드:${
          championsWithNumbers.find(
            (champion) => champion.number === Number(selectedOption3),
          ).champion
        } 
        원딜:${
          championsWithNumbers.find(
            (champion) => champion.number === Number(selectedOption4),
          ).champion
        } 
        서폿:${
          championsWithNumbers.find(
            (champion) => champion.number === Number(selectedOption5),
          ).champion
        }`);
    setChatCompletion(chatCompletion);
    const messageContent = chatCompletion.choices[0].message.content;
    setGptMessage(messageContent);
    console.log(messageContent);
  }, [setChatCompletion, championsWithNumbers, setGptMessage]);

  useEffect(() => {
    if (gptMessage !== '' && model != '') {
      setIsLoading(false);
    }
  }, [gptMessage, model]);

  return (
    <Body>
      <img
        src={Back}
        alt="backgorund"
        style={{ marginTop: '-50px', position: 'absolute' }}
      />
      <img
        src={Button}
        alt="error"
        onClick={() => {
          navigate('/Main');
        }}
        style={{
          width: '25%',
          marginTop: '39.5%',
          float: 'right',
          position: 'relative',
        }}
      />
      <Title style={{marginTop: "200px"}}>🦾 경기 전체 한 눈에 보기</Title>
      <Back3>
        <Gro>
          <Time type="text" onChange={(e)=>(setTime1(e.target.value))} placeholder="분"></Time>
          <Time type="text" onChange={(e)=>(setTime2(e.target.value))} placeholder="초"></Time>
          <Tbutton onClick={() => tower()}>시간대 별 상황보기</Tbutton>
        </Gro>
        <Back4>
          <div>
            <p>타워</p>
            <div>
              <Sback style={{background : "#217BE2"}}>{towers.blueDestroyTowerCount}</Sback>
              <Sback style={{background : "#F50565"}}>{towers.redDestroyTowerCount}</Sback>
            </div>
          </div>
          <div>
            <p>억제기</p>
            <div>
              <Sback style={{background : "#217BE2"}}>{inhibitor.blueKillCountInhibitorBuilding}</Sback>
              <Sback style={{background : "#F50565"}}>{inhibitor.redKillCountInhibitorBuilding}</Sback>
            </div>
          </div>
          <div>
            <p>중요 몬스터 킬</p>
            <div>
              <Sback style={{background : "#217BE2"}}>{mon.blueKillCount}</Sback>
              <Sback style={{background : "#F50565"}}>{mon.redKillCount}</Sback>
            </div>
          </div>
        </Back4>
      </Back3>
      <div style={{ marginTop: '50px' }}>
        <div style={{ display: 'flex' }}>
          <Title>🦾 AI를 이용한 팀별 조합분석 </Title>
        </div>
        <Back2>
          <img
            src={teamIngfo}
            alt="error"
            style={{ width: '10%', marginLeft: '-73%', marginTop: '4%' }}
          />
          <div style={{ marginTop: '-2%', marginBottom: '3%' }}>
            <Team1>
              <Input>
                <Champion>
                  <p style={{ color: '#217BE2' }}>탑</p>
                </Champion>
                <ChampionOptions
                  onChange={handleOption1Change}
                  value={selectedOption1}
                />
              </Input>
              <Input>
                <Champion>
                  <p style={{ color: '#217BE2' }}>정글</p>
                </Champion>
                <ChampionOptions
                  onChange={handleOption2Change}
                  value={selectedOption2}
                />
              </Input>
              <Input>
                <Champion>
                  <p style={{ color: '#217BE2' }}>미드</p>
                </Champion>
                <ChampionOptions
                  onChange={handleOption3Change}
                  value={selectedOption3}
                />
              </Input>
              <Input>
                <Champion>
                  <p style={{ color: '#217BE2' }}>바텀(원딜)</p>
                </Champion>
                <ChampionOptions
                  onChange={handleOption4Change}
                  value={selectedOption4}
                />
              </Input>
              <Input>
                <Champion>
                  <p style={{ color: '#217BE2' }}>바텀(서폿)</p>
                </Champion>
                <ChampionOptions
                  onChange={handleOption5Change}
                  value={selectedOption5}
                />
              </Input>
            </Team1>
            <Team2>
              <Input>
                <Champion>탑</Champion>
                <ChampionOptions
                  onChange={handleOption6Change}
                  value={selectedOption6}
                />
              </Input>
              <Input>
                <Champion>정글</Champion>
                <ChampionOptions
                  onChange={handleOption7Change}
                  value={selectedOption7}
                />
              </Input>
              <Input>
                <Champion>미드</Champion>
                <ChampionOptions
                  onChange={handleOption8Change}
                  value={selectedOption8}
                />
              </Input>
              <Input>
                <Champion>바텀(원딜)</Champion>
                <ChampionOptions
                  onChange={handleOption9Change}
                  value={selectedOption9}
                />
              </Input>
              <Input>
                <Champion>바텀(서폿)</Champion>
                <ChampionOptions
                  onChange={handleOption10Change}
                  value={selectedOption10}
                />
              </Input>
            </Team2>
          </div>
          <TestButton onClick={called}>
            AI 경기 승률 예측 및 조합 평가
          </TestButton>
          <Result>
            {/* <img src={AI} alt="error" style={{ marginTop: '3%' }} /> */}
            <Gpt>{isLoading ? '버튼을 누르고 기다리세요' : `예측 결과, 해당 경기의 결과는 ${model?.win_percent+rand}%의 승리로 예측됩니다.`}</Gpt>
            <Gpt>{isLoading ? "" : gptMessage}</Gpt>
            {/* <Gpt>{model?.accuracy}</Gpt>
            <Gpt>{model?.winner}</Gpt> */}
          </Result>
        </Back2>
      </div>
    </Body>
  );
};

export default Landing;

const Body = styled.div`
  width: 100%;
  height: 3000px;
  padding: 50px 0;
  background: #071314;

  > img {
    width: 100%;
  }
`;

const Title = styled.div`
  color: #fff;
  font-family: Inter;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 70px; /* 140% */
  margin-left: 4%;
  margin-bottom: 2%;
`;

const Back2 = styled.div`
  width: 1400px;
  height: 1150px;

  border-radius: 10px;
  background: #0d2527;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  margin: 20px auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Back3 = styled.div`
  width: 1300px;
  height: 400px;

  border-radius: 10px;
  background: #0d2527;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  margin: 20px auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 50px;

  gap: 24px;
`;

const Champion = styled.div`
  color: #f50565;
  font-family: Open Sans;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.3px;
  margin-bottom: 10px;
`;

const Input = styled.div`
  padding: 20px;
  padding-top: 60px;
`;

const Team1 = styled.div`
  display: flex;
  flex-direction: row;
`;

const Team2 = styled.div`
  display: flex;
  flex-direction: row;
`;

const Result = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 1257px;
  height: 700px;
  border-radius: 0px 0px 10px 10px;
  background: #071314;
`;

const TestButton = styled.button`
  width: 1257px;
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

const Gpt = styled.p`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 30px */
  letter-spacing: 0.8px;
`;

const Time = styled.input`
  width: 160px;
  height: 80px;

  color: black;
  font-size: 24px;
`

const Tbutton = styled.button`
  width: 160px;
  height: 80px;

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

const Gro = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const Back4 = styled.div`
  width: 1222px;
  height: 280px;
  flex-shrink: 0;

  border-radius: 10px;  
  background: #071314;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
  > div{
    color: #FFF;
    text-align: center;
    font-family: Open Sans;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%; /* 60px */
    letter-spacing: -0.6px;

    > p{
      margin-bottom: 10px;
    }
    > div{
      gap: 15px;
      display: flex;
      flex-direction: row;
    }
  }
`;

const Sback = styled.div`
  width: 153px;
  height: 146px;
  border-radius: 5px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: center;
  align-items: center;

  color: #FFF;
  text-align: center;
  font-family: Open Sans;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 60px */
  letter-spacing: -0.6px;
`;