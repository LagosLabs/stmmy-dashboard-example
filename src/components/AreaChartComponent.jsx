import React from "react";
import { Card, Title, AreaChart } from '@tremor/react';

const chartdata = [
  {
    date: 'Sep 22',
    NFTSales: 2890,
    'E-Commerce Revenue': 2338,
  },
  {
    date: 'Oct 22',
    NFTSales: 2756,
    'E-Commerce Revenue': 2103,
  },
  {
    date: 'Nov 22',
    NFTSales: 3322,
    'E-Commerce Revenue': 2194,
  },
  {
    date: 'Dec 22',
    NFTSales: 3470,
    'E-Commerce Revenue': 2108,
  },
  {
    date: 'Jan 23',
    NFTSales: 3475,
    'E-Commerce Revenue': 1812,
  },
  {
    date: 'Feb 23',
    NFTSales: 3129,
    'E-Commerce Revenue': 1726,
  },
  {
    date: 'Mar 23',
    NFTSales: 3490,
    'E-Commerce Revenue': 1982,
  },
  {
    date: 'Apr 23',
    NFTSales: 2903,
    'E-Commerce Revenue': 2012,
  },
  {
    date: 'May 23',
    NFTSales: 2643,
    'E-Commerce Revenue': 2342,
  },
  {
    date: 'Jun 23',
    NFTSales: 2837,
    'E-Commerce Revenue': 2473,
  },
  {
    date: 'Jul 23',
    NFTSales: 2954,
    'E-Commerce Revenue': 3848,
  },
  {
    date: 'Aug 23',
    NFTSales: 3239,
    'E-Commerce Revenue': 3736,
  },
];

const dataFormatter = (number) =>
  `$${Intl.NumberFormat('us').format(number).toString()}`;

const AreaChartComponent = () => {
  return (
    <Card className="mt-4">
      <Title>NFT Revenue Over Time (USD)</Title>
      <AreaChart
        className="h-80"
        data={chartdata}
        index="date"
        categories={["NFTSales", "E-Commerce Revenue"]}
        colors={["indigo", "rose"]}
        valueFormatter={dataFormatter}
        yAxisWidth={60}
        onValueChange={(v) => console.log(v)}
      />
    </Card>
  );
};

export default AreaChartComponent;
