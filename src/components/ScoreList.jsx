import React from 'react';
import { Card, List, ListItem, Title } from '@tremor/react';

const cities = [
    {
      city: 'Lagos',
      rating: '2 open PR',
    },
    {
      city: 'Johannesburg',
      rating: '1 open PR',
    },
    {
      city: 'Zurich',
      rating: '0 open PR',
    },
    {
      city: 'Chicago',
      rating: '1 open PR',
    },
    {
      city: 'London',
      rating: '0 open PR',
    },
  ];


const ScoreList = () => {
  return (
    <Card className="max-w-full">
    <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">Top Sales by Cities</h3>
    <List className="mt-2">
      {cities.map((item) => (
        <ListItem key={item.city}>
          <span>{item.city}</span>
          <span>{item.rating}</span>
        </ListItem>
      ))}
    </List>
  </Card>
  )
}

export default ScoreList