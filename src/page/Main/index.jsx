import styled from 'styled-components';
import Button from '../../components/button';
import Heart from '../../assets/svg/heart';
import Home from '../../assets/svg/home';
import Location from '../../assets/svg/location';
import Face from '../../assets/svg/face';
import { useState } from 'react';
import Chart from '../../components/chart/chart';

const Main = () => {
  const [select, setSelect] = useState(0);
  return (
    <Body>
      <Chart />
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
      </ButtonArea>
    </Body>
  );
};

export default Main;

const Body = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 24px;
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-right: 90px;
`;

