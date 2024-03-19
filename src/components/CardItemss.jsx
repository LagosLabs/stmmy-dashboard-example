import React from "react";
import { BadgeDelta, Card, Flex, Metric, Text } from "@tremor/react";

const CardItemss = () => {
  return (
    <Card className="w-xs" decoration="top" decorationColor="indigo">
      <Flex justifyContent="between" alignItems="center">
        <Text>Licensed Collections</Text>
        <BadgeDelta deltaType="decrease">-21.5%</BadgeDelta>
      </Flex>
      <Metric>$114,743</Metric>
    </Card>
  );
};

export default CardItemss;
