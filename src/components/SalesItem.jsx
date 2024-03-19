import React, { useState } from "react";
import {
  BadgeDelta,
  Button,
  Card,
  DonutChart,
  Flex,
  TabGroup,
  Tab,
  TabList,
  Bold,
  Divider,
  List,
  ListItem,
  Metric,
  Text,
  Title,
} from "@tremor/react";
import {
  ArrowRightIcon,
  ChartPieIcon,
  ViewListIcon,
} from "@heroicons/react/outline";

const stocks = [
  {
    name: "Baggies",
    value: 1025,
    performance: "6.1%",
    deltaType: "increase",
  },
  {
    name: "Jerseys",
    value: 5765,
    performance: "1.2%",
    deltaType: "moderateDecrease",
  },
  {
    name: "Snapbacks",
    value: 4376,
    performance: "2.3%",
    deltaType: "moderateIncrease",
  },
  {
    name: "Hoodies",
    value: 1534,
    performance: "3.4%",
    deltaType: "moderateDecrease",
  },
  {
    name: "Notepad",
    value: 3341,
    performance: "0.5%",
    deltaType: "decrease",
  },
];

const dataFormatter = (number) => {
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;
};

const SalesItem = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <Card className="max-w-full mx-auto">
      <Flex className="space-x-8 flex-col lg:flex-row">
        <Title>Overview</Title>
        <TabGroup index={selectedIndex} onIndexChange={setSelectedIndex}>
          <TabList variant="solid">
            <Tab icon={ChartPieIcon}>Chart</Tab>
            <Tab icon={ViewListIcon}>List</Tab>
          </TabList>
        </TabGroup>
      </Flex>
      <Text className="mt-8">Portfolio Value</Text>
      <Metric>$ 27,777</Metric>
      <Divider />
      <Text className="mt-8">
        <Bold>Asset Allocation</Bold>
      </Text>
      <Text>1 Asset class - 5 Holdings</Text>
      {selectedIndex === 0 ? (
        <DonutChart
          data={stocks}
          valueFormatter={dataFormatter}
          showAnimation={false}
          category="value"
          index="name"
          className="mt-6"
        />
      ) : (
        <>
          <Flex className="mt-8" justifyContent="between">
            <Text className="truncate">
              <Bold>Stocks</Bold>
            </Text>
            <Text>Since transaction</Text>
          </Flex>
          <List className="mt-4">
            {stocks.map((stock) => (
              <ListItem key={stock.name}>
                <Text>{stock.name}</Text>
                <Flex className="space-x-2" justifyContent="end">
                  <Text>
                    $ {Intl.NumberFormat("us").format(stock.value).toString()}
                  </Text>
                </Flex>
              </ListItem>
            ))}
          </List>
        </>
      )}
      <Flex className="mt-6 pt-4 border-t">
        <Button
          size="xs"
          variant="light"
          icon={ArrowRightIcon}
          iconPosition="right"
        >
          View more
        </Button>
      </Flex>
    </Card>
  );
};

export default SalesItem;
