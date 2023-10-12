import { styled } from 'styled-components';
import { useState, useEffect } from 'react';

const ChampionOptions = ({ onChange, value }) => {
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
  // 챔피언 옵션을 생성

  const championOptions = championsWithNumbers.map((data) => (
    <option key={data.number} value={data.number}>
      {data.champion}
    </option>
  ));

  return (
    <Select id="championSelect" onChange={onChange} value={value}>
      <option value="">선택하세요</option>
      {championOptions}
    </Select>
  );
};

export default ChampionOptions;

const Select = styled.select`
  width: 200px;
  height: 70px;
  border-radius: 10px;
  background: #071314;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;
  color: white;
  font-size: 20px;
  padding-left: 8px;
`;
