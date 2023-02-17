import Layouts from "@/components/Layouts";
import {IProductType} from "@/types/productTypes";
import {productData} from "@/utils/productData";
import Link from "next/link";
import {useRouter} from "next/router";
import React from "react";

type Props = {product: IProductType};

function ProductDetails({product}: Props) {
  const {query} = useRouter();
  const {productSlug} = query;
  const productItem = productData.products.find(
    (item) => item.slug === productSlug
  );

  if (!productItem) {
    return <div>Product Not Found</div>;
  }
  return (
    <Layouts title={productItem.name}>
      <div className="inline-flex items-center mt-2">
        <Link href={`/`}>
          <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
            Go Back To Products
          </button>
        </Link>
      </div>
      <h1>{productItem.name}</h1>
    </Layouts>
  );
}

export default ProductDetails;
