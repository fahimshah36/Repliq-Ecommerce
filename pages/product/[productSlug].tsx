import Layouts from "@/components/Layouts";
import {Image} from "antd";
import {productData} from "@/utils/productData";
import Link from "next/link";
import {useRouter} from "next/router";
import React, {useContext} from "react";
import {ArrowLeftOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import {Store} from "@/utils/store";
import {toasterNotification} from "@/components/Comps/ToasterNotification";

type Props = {};

function ProductDetails({}: Props) {
  const {state, dispatch} = useContext(Store);
  const {query} = useRouter();
  const {productSlug} = query;
  const productItem = productData.products.find(
    (item) => item.slug === productSlug
  );

  if (!productItem) {
    return <div>Product Not Found</div>;
  }

  const addToCart = () => {
    const existItem =
      state.cart.cartItems &&
      state.cart.cartItems.find((item) => item.slug === productItem.slug);

    let quantity = existItem ? existItem.quantity + 1 : 1;
    if (productItem.countInStock < quantity) {
      quantity = quantity - 1;
      toasterNotification(
        "error",
        "Product is out of stock, Please check again!!!"
      );
    }
    dispatch({
      type: "CART_ADD_PRODUCT",
      payload: {...productItem, quantity: quantity},
    });
  };

  return (
    <Layouts title={productItem.name}>
      <div className="inline-flex items-center mt-2">
        <Link href={`/`}>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <ArrowLeftOutlined className="mr-2" />
            Go Back To Products
          </button>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center mt-8">
        <div className="w-full sm:max-w-2xl lg:max-w-4xl flex flex-col sm:flex-row sm:items-center sm:justify-center space-y-4 sm:space-y-0 sm:space-x-8 p-8 bg-white rounded-lg shadow-lg">
          <div className="flex-shrink-0">
            <Image
              src={productItem.image}
              alt={productItem.name}
              width={500}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col flex-1 space-y-4">
            <h2 className="text-3xl font-semibold text-gray-800">
              {productItem.name}
            </h2>
            <div className="flex items-center">
              <p className="text-gray-700">
                {productItem.rating} ({Math.floor(Math.random() * 100) + 1}
                Reviews)
              </p>
            </div>
            <p className="text-gray-700">{productItem.description}</p>
            <div className="flex items-center justify-between">
              <p className="text-gray-700 text-xl font-semibold">
                Price : BDT {productItem.price}
              </p>
            </div>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={addToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Layouts>
  );
}

export default ProductDetails;
