import styled from 'styled-components';

const Button = ({ onClick, icon, text, selection, state }) => {
  return (
    <Sbutton
      onClick={onClick}
      style={
        selection === state
          ? { border: '2px solid #1DF659' }
          : { border: 'none' }
      }
    >
      {icon}
      <p>{text}</p>
    </Sbutton>
  );
};

export default Button;

const Sbutton = styled.button`
  width: 348px;
  height: 87px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: #071314;
  border-radius: 5px;
  padding: 21px 18px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
