import AdminLayouts from "@/components/AdminLayouts";
import React from "react";

type Props = {};

function customer({}: Props) {
  return (
    <AdminLayouts title="Customers">
      <h1 className="text-2xl font-bold sm:text-3xl mb-6">Customers</h1>
      <table className="w-full table-fixed border border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="w-1/4 px-4 py-2 border">Customer ID</th>
            <th className="w-1/4 px-4 py-2 border">Name</th>
            <th className="w-1/4 px-4 py-2 border">Total Purchase</th>
            <th className="w-1/4 px-4 py-2 border">Date of Registration</th>
            <th className="w-1/4 px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="px-4 py-2 border">001</td>
            <td className="px-4 py-2 border">Shakib Al Hasan</td>
            <td className="px-4 py-2 border">BDT 100.00</td>
            <td className="px-4 py-2 border">24-05-2022</td>
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
            <td className="px-4 py-2 border">26-02-2022</td>

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
            <td className="px-4 py-2 border">24-15-2023</td>

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

export default customer;
