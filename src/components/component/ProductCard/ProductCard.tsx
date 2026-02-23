"use client";



"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  productName: string;
  image: string;
  url: string;
  href?: string;
  description: string;
  price: number;
};

const ProductCard = ({
  productName,
  image,
  url,
  href,
  description,
  price,
}: Props) => {
  const [imgError, setImgError] = useState(false);
  const [imgLoading, setImgLoading] = useState(true);
  
  // Log when image prop changes
  useEffect(() => {
    console.log(`ProductCard ${productName} received image:`, image);
  }, [image, productName]);

  // If no image URL, show placeholder
  if (!image) {
    return (
      <Card className="w-full rounded-xl border shadow-sm transition hover:shadow-md mb-10">
        <div className="w-full h-45 sm:h-50 md:h-56 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-400">No image</span>
        </div>
        <CardHeader className="pb-2">
          <CardTitle>{productName}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <CardDescription>${price.toFixed(2)}</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button className="w-full cursor-pointer bg-yellow-300 text-black/90">View Product</Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full rounded-xl border shadow-sm transition hover:shadow-md mb-10">
      {/* Image wrapper */}
      <div className="w-full h-45 sm:h-50 md:h-56 overflow-hidden bg-gray-100 relative">
        {imgLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-gray-300 border-t-yellow-300 rounded-full animate-spin"></div>
          </div>
        )}
        <Image
          src={imgError ? '/placeholder-image.jpg' : image}
          alt={productName}
          width={400}
          height={400}
          className={`h-full w-full object-contain transition-transform duration-300 hover:scale-105 ${imgLoading ? 'opacity-0' : 'opacity-100'}`}
          onError={(e) => {
            console.error(`Image failed to load for ${productName}:`, image, e);
            setImgError(true);
            setImgLoading(false);
          }}
          onLoad={() => {
            console.log(`Image loaded successfully for ${productName}`);
            setImgLoading(false);
          }}
          unoptimized={true}
          priority={false}
        />
      </div>

      <CardHeader className="pb-2">
        <CardTitle>{productName}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardDescription className="text-lg font-semibold text-yellow-600">
          ${price.toFixed(2)}
        </CardDescription>
      </CardHeader>

      <CardFooter>
        <Button className="w-full cursor-pointer bg-yellow-300 text-black/90 hover:bg-yellow-400">
          View Product
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;