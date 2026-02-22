import blondie from "../../../assets/CategoriesLayout-imagies/blondie.png";
import whitie from "../../../assets/CategoriesLayout-imagies/whitie.png";
import ProductCard from "@/components/component/ProductCard/ProductCard";

type Props = {};

const AccessoriesCategory = (props: Props) => {
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
        productName="Accessories"
        image={blondie}
        url="#"
        description="A beautiful blonde hair product"
        price={29.99}
      />
      <ProductCard
        productName="Whitie"
        image={whitie}
        url="#"
        description="A premium white hair product"
        price={39.99}
      />
      <ProductCard
        productName="Blondie"
        image={blondie}
        url="#"
        description="A beautiful blonde hair product"
        price={29.99}
      />
      <ProductCard
        productName="Whitie"
        image={whitie}
        url="#"
        description="A premium white hair product"
        price={39.99}
      />
    </div>
  );
};

export default AccessoriesCategory;
