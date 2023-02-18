import Layouts from "@/components/Layouts";
import {ICartItem} from "@/types/cartTypes";
import {Store} from "@/utils/store";
import {Button, Select} from "antd";
import Link from "next/link";
import React, {useContext, useState, useEffect} from "react";

type Props = {};

function Cart({}: Props) {
  const {state, dispatch} = useContext(Store);
  const [subTotal, setSubTotal] = useState<number>();

  const {
    cart: {cartItems},
  } = state;

  useEffect(() => {
    setSubTotal(
      cartItems &&
        cartItems.reduce(
          (total, current) => total + current.price * current.quantity,
          0
        )
    );
  }, cartItems);
  console.log(cartItems);

  const handleRemove = (item: ICartItem) => {
    dispatch({type: "REMOVE_ITEM", payload: item});
  };

  const updateCartHandler = (item: ICartItem, e: number) => {
    const quantity = e;
    dispatch({type: "CART_ADD_PRODUCT", payload: {...item, quantity}});
  };

  return (
    <Layouts title="Shopping Cart">
      {cartItems && cartItems.length === 0 ? (
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
          <div className="border rounded-md p-4">
            <h2 className="text-lg font-bold mb-4">
              Your shopping cart is empty.
            </h2>
            <p className="text-gray-500 mb-4">
              Browse our products and start shopping now.
            </p>
            <Link href={"/"}>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Start Shopping
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            {cartItems &&
              cartItems.map((item) => (
                <div className="border rounded-md p-4">
                  <div className="flex items-center mb-4">
                    <img
                      width={100}
                      src={item.image}
                      alt="Product"
                      className="mr-8"
                    />
                    <div>
                      <h2 className="text-lg font-bold">{item.name}</h2>
                      <span className="text-gray-500">
                        BDT {item.price.toFixed(2)}
                      </span>
                    </div>
                    <Button
                      className="ml-auto"
                      danger
                      onClick={() => {
                        handleRemove(item);
                      }}
                    >
                      Remove
                    </Button>
                  </div>
                  <div className="flex items-center mb-4">
                    <label htmlFor="quantity" className="mr-4">
                      Quantity:
                    </label>
                    <Select
                      size="large"
                      value={item.quantity}
                      onChange={(e) => {
                        updateCartHandler(item, e);
                      }}
                    >
                      {[...Array(item.countInStock).keys()].map((item) => (
                        <Select.Option key={item + 1} value={item + 1}>
                          {item + 1}
                        </Select.Option>
                      ))}
                    </Select>
                  </div>
                  <hr className="my-4" />
                </div>
              ))}

            <div className="border rounded-md p-4 mt-4">
              <h2 className="text-lg font-bold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                {subTotal && <span>BDT {subTotal.toFixed(2)}</span>}
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Tax:</span>
                <span>BDT 0.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Total:</span>
                {subTotal && <span>BDT {subTotal.toFixed(2)}</span>}
              </div>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </Layouts>
  );
}

export default Cart;
