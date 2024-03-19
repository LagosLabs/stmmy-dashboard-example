import React from "react";
import CardItems from "./CardItems";
import CardItem from "./CardItem";
import CardItemss from "./CardItemss";
import AreaChartComponent from "./AreaChartComponent";
import TableComponent from "./TableComponent";
  
const getCurrentYear = new Date().getFullYear;

const LeftColumn = () => {
  return (
    <div className="w-full flex flex-col justify-between p-2">
      <div className="flex flex-col lg:flex-row gap-2 w-full">
        <CardItem />
        <CardItems />
        <CardItemss />
      </div>
      <div className="flex-auto w-full">
        <AreaChartComponent />
        <TableComponent />
      </div>
    </div>
  );
};

export default LeftColumn;
