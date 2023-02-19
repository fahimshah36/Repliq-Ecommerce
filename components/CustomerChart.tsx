import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Props = {};

const data = [
  {
    name: "Dhaka",
    orders: 4000,
    customer: 650,
  },
  {
    name: "Chittagong",
    orders: 1560,
    customer: 450,
  },
  {
    name: "Rajshahi",
    orders: 850,
    customer: 360,
  },
  {
    name: "Sylhet",
    orders: 1100,
    customer: 349,
  },
  {
    name: "Barisal",
    orders: 1490,
    customer: 650,
  },
];

function CustomerChart({}: Props) {
  return (
    <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
      <strong className="text-gray-700 font-medium mb-4">
        Location based Customer & Orders
      </strong>
      <div className="w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="orders"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="customer"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default CustomerChart;
