import AddProduct from "@/components/AddProduct";
import AdminLayouts from "@/components/AdminLayouts";
import React, {useState} from "react";

type Props = {};

function Product({}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <AdminLayouts title="Product">
      <h1 className="text-2xl font-bold sm:text-3xl mb-6">Products</h1>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2  mb-6"
        onClick={openModal}
      >
        Add Product
      </button>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:max-w-md"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <AddProduct closeModal={closeModal} />
            </div>
          </div>
        </div>
      )}
      <table className="w-full table-fixed border border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="w-1/4 px-4 py-2 border">Product ID</th>
            <th className="w-1/4 px-4 py-2 border">Product Name</th>
            <th className="w-1/4 px-4 py-2 border">Product Price</th>
            <th className="w-1/4 px-4 py-2 border">Product Sales</th>
            <th className="w-1/4 px-4 py-2 border">In Stock</th>
            <th className="w-1/4 px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="px-4 py-2 border">001</td>
            <td className="px-4 py-2 border">Jacket</td>
            <td className="px-4 py-2 border">BDT 100.00</td>
            <td className="px-4 py-2 border">BDT 16100.00</td>
            <td className="px-4 py-2 border">1500</td>
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
            <td className="px-4 py-2 border">001</td>
            <td className="px-4 py-2 border">Saree</td>
            <td className="px-4 py-2 border">BDT 1006.00</td>
            <td className="px-4 py-2 border">BDT 161300.00</td>
            <td className="px-4 py-2 border">500</td>
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
            <td className="px-4 py-2 border">001</td>
            <td className="px-4 py-2 border">Show</td>
            <td className="px-4 py-2 border">BDT 1090.00</td>
            <td className="px-4 py-2 border">BDT 6500.00</td>
            <td className="px-4 py-2 border">2600</td>
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

export default Product;
