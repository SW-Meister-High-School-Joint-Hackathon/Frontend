import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Chart from 'chart.js/auto';

function BarChart({labels, pdata, color}) {
  const chartRef = useRef();
  const chartInstance = useRef(null);
  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // 이미 생성된 Chart가 있다면 파기
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Canvas 초기화
    ctx.clearRect(0, 0, chartRef.current.width, chartRef.current.height);

    // 데이터 준비
    const data = {
      labels: labels,
      datasets: [
        {
          label: '막대 그래프',
          data: pdata,
          backgroundColor: color ?? 'steelblue',
        },
      ],
    };

    // Chart.js 그래프 생성
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, [labels, pdata, color]);

  return <DIV><canvas ref={chartRef} /></DIV>;
}

export default BarChart;

const DIV = styled.div`
    width: 700px;
    height: auto;
`;
