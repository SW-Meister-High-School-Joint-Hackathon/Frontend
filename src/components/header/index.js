import styled from 'styled-components';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Head>
      <img src={Logo} alt="logo"></img>
      <LogoText>
        <p>LoLViz</p>
        <p style={{ color: '#1DF659' }}>.</p>
      </LogoText>
      <Link to="/">Home</Link>
      <Link to="/main">Game replay</Link>
    </Head>
  );
};

export default Header;

const Head = styled.header`
  width: 100%;
  height: 84px;
  background: #0d2527;
  display: flex;
  flex-direction: row;
  align-items: center;

  > img {
    z-index: 1;
    margin-left: 12px;
  }

  a {
    color: #fff;
    font-family: 'Inter';
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.18px;
    opacity: 1; //흐린 거 때문에 넣음
    z-index: 1; //흐린 거 때문에 넣음

    margin: 47px;
    text-decoration: none;
  }
`;
const LogoText = styled.p`
  display: flex;
  color: #fff;
  font-family: 'Inter';
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.18px;
  z-index: 1; //흐린 거 때문에 넣음
  margin-left: 100px;
  margin-right: 1050px;
`;
