"use client";

import ProductCard from "@/components/component/ProductCard/ProductCard";
import { useState, useEffect } from "react";
import { DB } from "@/lib/Utils/appwrite";

const NewInCategory = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
 

  const fetchProducts = async () => {
    try {
      const { total, rows } = await DB.listRows({
        databaseId: process.env.NEXT_PUBLIC_APPWRITE_DB_ID as string,
        tableId: process.env.NEXT_PUBLIC_APPWRITE_TABLE_PRODUCTS as string
      });
      
      console.log("Fetched products:", rows);
      setProducts(rows);
  
      
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

 

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-64">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-yellow-300 rounded-full animate-spin"></div>
    </div>;
  }

  return (
    <div className="w-full grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 md:gap-6 lg:grid-cols-4 justify-items-center">
      {products.map((product: any) => {
        
        return (
          <ProductCard
            key={product.$id}
            productName={product.productName}
            image={product.productImage}
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