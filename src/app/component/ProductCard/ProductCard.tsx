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
   <Card className="w-full max-w-sm pt-0 border border-red-900 rounded-lg shadow-md">
      <img
        src={image.src}
        alt={productName}
        className="object-cover w-full object-center rounded-lg shadow-md pt-0"
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
        <Button className="w-full cusor-pointer">View Event</Button>
      </CardFooter>
    </Card>
  )
}

export default ProductCard