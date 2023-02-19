import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type Props = {};

const data = [
  {
    name: "Jan",
    expense: 4000,
    income: 2400,
  },
  {
    name: "Feb",
    expense: 1560,
    income: 1800,
  },
  {
    name: "Mar",
    expense: 4506,
    income: 1560,
  },
  {
    name: "Apr",
    expense: 1465,
    income: 891,
  },
  {
    name: "May",
    expense: 4566,
    income: 1551,
  },
  {
    name: "Jun",
    expense: 1456,
    income: 880,
  },
  {
    name: "July",
    expense: 512,
    income: 1500,
  },
  {
    name: "Aug",
    expense: 1560,
    income: 850,
  },
  {
    name: "Sep",
    expense: 2500,
    income: 4600,
  },
  {
    name: "Oct",
    expense: 1400,
    income: 7800,
  },
  {
    name: "Nov",
    expense: 1566,
    income: 3506,
  },
  {
    name: "Dec",
    expense: 850,
    income: 5600,
  },
];

function SalesChart({}: Props) {
  return (
    <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
      <strong className="text-gray-700 font-medium mb-4">
        Income & Transactions
      </strong>
      <div className="w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="expense" fill="#8884d8" />
            <Bar dataKey="income" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SalesChart;
