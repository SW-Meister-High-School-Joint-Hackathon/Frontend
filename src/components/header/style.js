import styled from 'styled-components';

export const Head = styled.header`
  width: 100%;
  height: 84px;
  background: #071314;
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
    font-weight: 700;
    opacity: 1; //흐린 거 때문에 넣음
    z-index: 1; //흐린 거 때문에 넣음

    text-decoration: none;
    margin-right: 40px;
  }
`;

export const LogoText = styled.p`
  display: flex;
  color: #fff;
  font-family: 'Inter';
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  z-index: 1; //흐린 거 때문에 넣음
  margin-left: 40px;
  margin-right: 1050px;
  margin-top: 5px;
`;

export const LinkBox = styled.div`
  margin-right: 30px;
`;
