"use client";

import blondie from "../../../assets/CategoriesLayout-imagies/blondie.png";
import whitie from "../../../assets/CategoriesLayout-imagies/whitie.png";

import ProductCard from "@/components/component/ProductCard/ProductCard";
import {useState , useEffect} from "react";
import {DB} from "@/app/Utils/appwrite";



type Props = {};

const NewInCategory = (props: Props) => {
  const [products, setProducts] = useState<any[]>([]);;

const fetchProducts = async () => {
  try{
    const {total,rows} = await DB.listRows({databaseId:process.env.NEXT_PUBLIC_APPWRITE_DB_ID as string , tableId:process.env.NEXT_PUBLIC_APPWRITE_TABLE_PRODUCTS as string})
    setProducts(rows );
  }

  catch(error){
    console.error("Error fetching products:", error);
  }
}

useEffect(() => {
  fetchProducts();
}, [])

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
  
  {products.map((product: any) => {
    return (
      <ProductCard
        key={product.$id}
        productName={product.productName}
        image={product.productImage.src}
        url="#"
        description={product.productDescription}
        price={product.price}
      />
    );
  })}


    </div>
  );
};

export default NewInCategory;



      // <ProductCard
      //   productName="New Pam Bondi"
      //   image={blondie}
      //   url="#"
      //   description="A beautiful hoodies"
      //   price={29.99}
      // />
      // <ProductCard
      //   productName="Whitie"
      //   image={whitie}
      //   url="#"
      //   description="A premium white hair product"
      //   price={39.99}
      // />
      // <ProductCard
      //   productName="Blondie"
      //   image={blondie}
      //   url="#"
      //   description="A beautiful blonde hair product"
      //   price={29.99}
      // />
      // <ProductCard
      //   productName="Whitie"
      //   image={whitie}
      //   url="#"
      //   description="A premium white hair product"
      //   price={39.99}
      // />


//       Create row


// $id
// productName
// productImage
// productDescription
// price
// stockQuantity