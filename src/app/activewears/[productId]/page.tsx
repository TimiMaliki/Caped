
"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { DatabasesDB} from "@/lib/Utils/appwrite";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Heart, ArrowLeft } from "lucide-react";
import Link from "next/link";

const ActivewearsDetailPage = () => {
  const params = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [imgError, setImgError] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const fetchProduct = async () => {
    try {
      const productId = params.productId as string;
      
    
      const response = await DatabasesDB.getDocument({
        databaseId: process.env.NEXT_PUBLIC_APPWRITE_DB_ID as string,
         collectionId: process.env.NEXT_PUBLIC_APPWRITE_TABLE_CLOTHES as string, 
       documentId: productId
      });
      
      setProduct(response);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (params.productId) {
      fetchProduct();
    }
  }, [params.productId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-yellow-300 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Link href="/activewears">
          <Button className="bg-yellow-300 text-black/90 hover:bg-yellow-400">
            Back to Activewears
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back button - goes back to Activewears page */}
      <Link href="/activewears" className="inline-block mb-6">
        <Button variant="ghost" className="flex items-center gap-2">
          <ArrowLeft size={20} />
          Back to Activewears
        </Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Image Section */}
        <div className="relative">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-square bg-gray-100">
                {product.productImage && !imgError ? (
                  <Image
                    src={product.productImage}
                    alt={product.productName || "Product image"}
                    fill
                    className="object-contain p-4"
                    onError={() => setImgError(true)}
                    unoptimized={true}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-400">No image available</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Product Details Section */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-2">
              {product.productName || "Untitled Product"}
            </h1>
            <p className="text-2xl font-semibold text-yellow-600">
              ${product.price || "0.00"}
            </p>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-600 leading-relaxed">
              {product.productDescription || "No description available"}
            </p>
          </div>

          {/* Quantity Selector */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quantity</h3>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="h-10 w-10"
              >
                -
              </Button>
              <span className="text-lg font-medium w-12 text-center">
                {quantity}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
                className="h-10 w-10"
              >
                +
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="flex-1 bg-yellow-300 text-black/90 hover:bg-yellow-400 h-12 text-lg">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            <Button variant="outline" className="flex-1 h-12 text-lg">
              <Heart className="mr-2 h-5 w-5" />
              Add to Wishlist
            </Button>
          </div>

          {/* Additional Details */}
          <div className="border-t pt-6 mt-6">
            <h3 className="text-lg font-semibold mb-4">Product Details</h3>
            <div className="space-y-2 text-gray-600">
              <p>Product ID: {product.$id}</p>
              {product.category && <p>Category: {product.category}</p>}
              {product.brand && <p>Brand: {product.brand}</p>}
              {product.inStock !== undefined && (
                <p>Availability: {product.inStock ? "In Stock" : "Out of Stock"}</p>
              )}
              {product.material && <p>Material: {product.material}</p>}
              {product.careInstructions && <p>Care: {product.careInstructions}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivewearsDetailPage;