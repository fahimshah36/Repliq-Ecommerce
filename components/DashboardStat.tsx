import {ShoppingFilled} from "@ant-design/icons";
import React from "react";

type Props = {children?: React.ReactNode};

function Card({children}: Props) {
  return (
    <div className="shadow bg-white rounded p-4 flex-1 border border-gray-200 flex items-center">
      {children}
    </div>
  );
}

function DashboardStat({}: Props) {
  return (
    <div className="flex gap-4 w-full">
      <Card>
        {
          <>
            <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
              <ShoppingFilled className="text-2xl text-white" />
            </div>
            <div className="pl-4">
              <span className="text-sm text-gray-500 font-light">
                Total Sales
              </span>
              <div className="flex items-center">
                <strong className="text-xl text-gray-700 font-semibold">
                  BDT 45000
                </strong>
                <span className="text-sm text-green-500 pl-2">+5200</span>
              </div>
            </div>
          </>
        }
      </Card>
      <Card>
        {
          <>
            <div className="rounded-full h-12 w-12 flex items-center justify-center bg-pink-500">
              <ShoppingFilled className="text-2xl text-white" />
            </div>
            <div className="pl-4">
              <span className="text-sm text-gray-500 font-light">
                Total Orders
              </span>
              <div className="flex items-center">
                <strong className="text-xl text-gray-700 font-semibold">
                  1560
                </strong>
                <span className="text-sm text-green-500 pl-2">+23</span>
              </div>
            </div>
          </>
        }
      </Card>
      <Card>
        {
          <>
            <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-500">
              <ShoppingFilled className="text-2xl text-white" />
            </div>
            <div className="pl-4">
              <span className="text-sm text-gray-500 font-light">
                Total Customers
              </span>
              <div className="flex items-center">
                <strong className="text-xl text-gray-700 font-semibold">
                  890
                </strong>
                <span className="text-sm text-green-500 pl-2">+56</span>
              </div>
            </div>
          </>
        }
      </Card>
      <Card>
        {
          <>
            <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500">
              <ShoppingFilled className="text-2xl text-white" />
            </div>
            <div className="pl-4">
              <span className="text-sm text-gray-500 font-light">
                Total Products
              </span>
              <div className="flex items-center">
                <strong className="text-xl text-gray-700 font-semibold">
                  1450
                </strong>
                <span className="text-sm text-green-500 pl-2">+120</span>
              </div>
            </div>
          </>
        }
      </Card>
    </div>
  );
}

export default DashboardStat;
