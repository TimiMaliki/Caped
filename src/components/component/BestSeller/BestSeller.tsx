import femaleSketch from "../../../assets/Hero-Home-Imagies/sketch.jpeg";
import dark from "../../../assets/Hero-Home-Imagies/men-black-fashion.jpeg";
import shorts from "../../../assets/Hero-Home-Imagies/shorts.jpeg";
import yellow from "../../../assets/Hero-Home-Imagies/yellow-girl.jpeg";

import ProductCard from "@/components/component/ProductCard/ProductCard";


type Props = {};

const BestSellerComponent = (props: Props) => {
  return (
<div className="w-full grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 md:gap-6 lg:grid-cols-4"
>
      <ProductCard
      id="1"
        productName="Best Sells"
        image={femaleSketch}
        description="A beautiful blonde hair product"
        price={29.99}
         onPress={() => console.log("Product 1 clicked")}
      />
      <ProductCard
       id="2"
        productName="Whitie"
        image={dark}
        description="A premium white hair product"
        price={39.99}
         onPress={() => console.log("Product 2 clicked")}
      />
      <ProductCard
       id="3"
        productName="Blondie"
        image={shorts}
        description="A beautiful blonde hair product"
        price={29.99}
         onPress={() => console.log("Product 3 clicked")}
      />
      <ProductCard
       id="4"
        productName="Whitie"
        image={yellow}
        description="A premium white hair product"
        price={39.99}
        onPress={() => console.log("Product 4 clicked")}
      />
    </div>
  );
};

export default BestSellerComponent;
