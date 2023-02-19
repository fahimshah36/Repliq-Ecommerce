import AdminLayouts from "@/components/AdminLayouts";
import React from "react";

type Props = {};

function order({}: Props) {
  return (
    <AdminLayouts title="Orders">
      <h1 className="text-2xl font-bold sm:text-3xl mb-6">Orders</h1>
      <table className="w-full table-fixed border border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="w-1/4 px-4 py-2 border">Order ID</th>
            <th className="w-1/4 px-4 py-2 border">Customer</th>
            <th className="w-1/4 px-4 py-2 border">Total</th>
            <th className="w-1/4 px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="px-4 py-2 border">001</td>
            <td className="px-4 py-2 border">Shakib Al Hasan</td>
            <td className="px-4 py-2 border">BDT 100.00</td>
            <td className="px-4 py-2 border">
              <button
                className="bg-red-500 text-white py-2 px-4 rounded"
                type="button"
              >
                Delete
              </button>
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="px-4 py-2 border">002</td>
            <td className="px-4 py-2 border">MAshrafe</td>
            <td className="px-4 py-2 border">BDT 50.00</td>
            <td className="px-4 py-2 border">
              <button
                className="bg-red-500 text-white py-2 px-4 rounded"
                type="button"
              >
                Delete
              </button>
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="px-4 py-2 border">003</td>
            <td className="px-4 py-2 border">Ashraful</td>
            <td className="px-4 py-2 border">BDT 650.00</td>
            <td className="px-4 py-2 border">
              <button
                className="bg-red-500 text-white py-2 px-4 rounded"
                type="button"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </AdminLayouts>
  );
}

export default order;
