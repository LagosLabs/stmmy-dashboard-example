import React from "react";
import { BadgeDelta, Card, Flex, Metric, Text } from "@tremor/react";

const CardItem = () => {
  return (
    <Card className="w-xs" decoration="top" decorationColor="indigo">
      <Flex justifyContent="between" alignItems="center">
        <Text>Collection</Text>
        <BadgeDelta deltaType="moderateDecrease">-10.8%</BadgeDelta>
      </Flex>
      <Metric>$14,743</Metric>
    </Card>
  );
};

export default CardItem;
