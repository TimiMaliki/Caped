import { Button } from "@/components/ui/button";
import { StaticImageData } from "next/image";
import Image from "next/image";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  productName: string;
  image: StaticImageData;
  url: string;
  description: string;
  price: number;
};

const ProductCard = ({
  productName,
  image,
  url,
  description,
  price,
}: Props) => {
  return (
    <Card className="w-full rounded-xl border shadow-sm transition hover:shadow-md mb-10">
      {/* Image wrapper */}
      <div className="w-full h-45 sm:h-50 md:h-56 overflow-hidden">
        <Image
          src={image}
          alt={productName}
          className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      <CardHeader className="pb-2">
        <CardTitle>{productName}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardFooter>
        <Button className="w-full cursor-pointer bg-yellow-500">View Product</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
