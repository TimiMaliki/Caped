import { Button } from "@/components/ui/button"
 import { StaticImageData } from "next/image";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type Props = {
   productName: string;
      image: StaticImageData;
      url : string;
      description : string;
      price : number;
}

const ProductCard = ({productName, image, url, description, price}: Props) => {
  return (
   <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={image.src}
        alt={productName}
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
        </CardAction>
        <CardTitle>{productName}</CardTitle>
        <CardDescription>
        {description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">View Event</Button>
      </CardFooter>
    </Card>
  )
}

export default ProductCard