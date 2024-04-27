import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function BasicBars() {
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['group A'] }]}
      series={[{ data: [3] }, { data: [1] }, { data: [ 6] }]}
      width={500}
      height={300}
    />
  );
}


