import femaleSketch from "../../../assets/Hero-Home-Imagies/sketch.jpeg";
import dark from "../../../assets/Hero-Home-Imagies/men-black-fashion.jpeg";
import shorts from "../../../assets/Hero-Home-Imagies/shorts.jpeg";
import yellow from "../../../assets/Hero-Home-Imagies/yellow-girl.jpeg";

import ProductCard from "@/app/component/ProductCard/ProductCard";


type Props = {};

const BestSellerComponent = (props: Props) => {
  return (
<div
  className="
    w-full
    grid
    grid-cols-2
    gap-4
    sm:gap-5
    md:grid-cols-3
    md:gap-6
    lg:grid-cols-4
    justify-items-center
  "
>
      <ProductCard
        productName="Best Sells"
        image={femaleSketch}
        url="#"
        description="A beautiful blonde hair product"
        price={29.99}
      />
      <ProductCard
        productName="Whitie"
        image={dark}
        url="#"
        description="A premium white hair product"
        price={39.99}
      />
      <ProductCard
        productName="Blondie"
        image={shorts}
        url="#"
        description="A beautiful blonde hair product"
        price={29.99}
      />
      <ProductCard
        productName="Whitie"
        image={yellow}
        url="#"
        description="A premium white hair product"
        price={39.99}
      />
    </div>
  );
};

export default BestSellerComponent;
