"use client";

import ProductCard from "@/components/component/ProductCard/ProductCard";
import { useState, useEffect } from "react";
import { DB, storage } from "@/lib/Utils/appwrite";

const NewInCategory = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [imageUrls, setImageUrls] = useState<Record<string, string>>({});

  const fetchProducts = async () => {
    try {
      const { total, rows } = await DB.listRows({
        databaseId: process.env.NEXT_PUBLIC_APPWRITE_DB_ID as string,
        tableId: process.env.NEXT_PUBLIC_APPWRITE_TABLE_PRODUCTS as string
      });
      
      console.log("Fetched products:", rows);
      setProducts(rows);
      
      // Generate preview URLs for each product
      // await generateImagePreviews(rows);
      
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  // const generateImagePreviews = async (products: any[]) => {
  //   const urlMap: Record<string, string> = {};
    
  //   // Use Promise.all to fetch all images concurrently
  //   await Promise.all(products.map(async (product) => {
  //     if (product.productImage) {
  //       try {
  //         // Extract file ID from the stored URL
  //         let fileId = product.productImage;
          
  //         if (typeof product.productImage === 'string') {
  //           // If it's a full URL, extract the file ID
  //           if (product.productImage.includes('files/')) {
  //             const matches = product.productImage.match(/\/files\/([a-zA-Z0-9]+)/);
  //             if (matches && matches[1]) {
  //               fileId = matches[1];
  //             }
  //           }
            
  //           console.log(`Processing product ${product.$id} with fileId: ${fileId}`);
            
  //           // Generate preview URL with parameters for better images
  //           const previewUrl = storage.getFilePreview(
  //             process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID as string,
  //             fileId,
  //           );
            
  //           const urlString = previewUrl.toString();
  //           console.log(`Generated URL for product ${product.$id}:`, urlString);
  //           urlMap[product.$id] = urlString;
  //         }
  //       } catch (error) {
  //         console.error(`Error generating preview for product ${product.$id}:`, error);
  //         urlMap[product.$id] = ''; // Set empty string or placeholder
  //       }
  //     }
  //   }));
    
  //   console.log("Final URL map:", urlMap);
  //   setImageUrls(urlMap);
  // };

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
        const imageUrl = imageUrls[product.$id];
        console.log(`Rendering product ${product.$id} with image:`, imageUrl);
        
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