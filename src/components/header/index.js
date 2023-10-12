import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import * as S from './style';

const Header = () => {
  return (
    <S.Head>
      <img src={Logo} alt="logo"></img>
      <S.LogoText>
        <p>LoLViz</p>
        <p style={{ color: '#1DF659' }}>.</p>
      </S.LogoText>
      <S.LinkBox>
        <Link to="/">Home</Link>
        <Link to="/main">Game replay</Link>
      </S.LinkBox>
    </S.Head>
  );
};

export default Header;
