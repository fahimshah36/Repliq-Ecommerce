import Layouts from "@/components/Layouts";
import ProductItem from "@/components/Products/ProductItem";
import {productData} from "@/utils/productData";

export default function Home() {
  return (
    <>
      <Layouts title="Home">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {productData.products.map((item) => (
            <ProductItem key={item.slug} product={item} />
          ))}
        </div>
      </Layouts>
    </>
  );
}
