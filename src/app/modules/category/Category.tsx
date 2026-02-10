import blondie from "../../../assets/CategoriesLayout-imagies/blondie.png";
import whitie from "../../../assets/CategoriesLayout-imagies/whitie.png";
import ProductCard from "@/app/component/ProductCard/ProductCard";


type Props = {}

const Category = (props: Props) => {
  return (
    <div className="
        grid
        grid-cols-2
        md:grid-cols-4
        gap-4
        mt-12
        ml-[8.2rem]
        lg:ml-[12rem]
        px-[0.625rem]
        sm:px-10
        lg:px-[4.375rem]
      ">
     <ProductCard productName="Blondie" image={blondie} url="#" description="A beautiful blonde hair product" price={29.99}/>
     <ProductCard productName="Whitie" image={whitie} url="#" description="A premium white hair product" price={39.99}/>

      </div>
  )
}

export default Category