import {loadingIndicator} from "@/components/Comps/LoadingIndicator";
import Layouts from "@/components/Layouts";
import ProductItem from "@/components/Products/ProductItem";
import {IProductType} from "@/types/productTypes";
import axios from "axios";
import {useState} from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<IProductType[]>();
  axios
    .get("https://api.jsonbin.io/v3/b/63f25707ebd26539d0814f48")
    .then((response) => {
      setData(response.data.record);
      setIsLoading(false);
    })
    .catch((error) => {
      console.error(error);
      setIsLoading(false);
    });
  return (
    <>
      <Layouts title="Home">
        <div className="w-full mb-8">
          <img
            className="object-center object-cover h-full w-full"
            src="https://i.ibb.co/q9NNvC0/HNH-banner.jpg"
            alt="Full-width image"
          />
        </div>
        {isLoading ? (
          loadingIndicator
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {data &&
              data.map((item) => (
                <ProductItem key={item.slug} product={item} />
              ))}
          </div>
        )}
      </Layouts>
    </>
  );
}
