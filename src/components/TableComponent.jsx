import React from "react";
import { StatusOnlineIcon } from "@heroicons/react/solid";
import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";

const data = [
  {
    name: "0x12345...",
    Role: "Fashion",
    departement:
      "The Streamillonaire NFTs",
    status: "active",
  },
  {
    name: "0x33154...",
    Role: "Food",
    departement:
      "The Peoples NFT Collection",
    status: "active",
  },
  {
    name: "0x67890...",
    Role: "Household Items",
    departement: "Asian Girl Boss",
    status: "active",
  },
  {
    name: "0x78910...",
    Role: "Packaging",
    departement: "Bored Apes Yatch Club",
    status: "active",
  },
  {
    name: "0x89101...",
    Role: "Coffee",
    departement: "South Side Chicago",
    status: "active",
  },
  {
    name: "0x91012...",
    Role: "Nuts",
    departement:
      "Broke Artists Crypto Collection",
    status: "active",
  },
  {
    name: "0x24320...",
    Role: "Palm Oil",
    departement: "Food is a Living Thing NFT",
    status: "active",
  },
  {
    name: "0x14232...",
    Role: "Palm Oil",
    departement: "Food is a Living Thing NFT",
    status: "active",
  },
];


const TableComponent = () => {
  return (
    <Card className="mt-4">
      <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
        Top NFT Holders and Licensed Merchandises
      </h3>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Owner</TableHeaderCell>
            <TableHeaderCell>Category</TableHeaderCell>
            <TableHeaderCell>Collection</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.name}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.Role}</TableCell>
              <TableCell>{item.departement}</TableCell>
              <TableCell>
                <Badge color="emerald">
                  {item.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default TableComponent;
