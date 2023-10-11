import styled from 'styled-components';

const Button = ({ onClick, icon, text, selection }) => {
  return (
    <Sbutton onClick={onClick}>
      {icon}
      <p>{text}</p>
    </Sbutton>
  );
};

export default Button;

const Sbutton = styled.button`
  width: 348px;
  height: 87px;

  background: #071314;
  border-radius: 5px;
  padding: 21px 18px;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 116px;
  > p {
    color: #fff;
    text-align: center;
    font-family: Pretendard;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 45px */
    letter-spacing: 1.2px;
  }
`;
