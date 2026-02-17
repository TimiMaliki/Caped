import Image from "next/image";
import { ArrowLeft} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import photo from "@/assets/authLayout-image/Photo.png";
import Link from "next/link";


const Forgot = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <Image
        src={photo}
        alt="Auth background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay (optional but recommended) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 grid min-h-screen place-content-center px-4">
        <div className="grid w-full place-content-center">
          {/* Heading */}
          <h1
            className="
              mt-12 mb-20
              text-center
              text-[3.125rem]
              font-medium
              text-black
              font-poppins
            "
          >
            Forgot password?
          </h1>

          {/* Description */}
          <p
            className="
              mb-8
              text-[0.813rem]
              font-medium
              text-black
              font-poppins
              max-w-md
              text-center
            "
          >
            Enter the email address you used when you joined and we’ll send you
            code to reset your password.
          </p>

          {/* Input */}
          <Input
            type="email"
            placeholder="Email"
            className="
              mb-6
              h-15
              w-100
              rounded-[0.625rem]
              border border-black/40
              px-5
              text-sm
            "
          />

          {/* Button */}
          <Button
            className="
              h-15
              w-100
              rounded-[0.625rem]
              bg-white
              text-black
              text-[1.063rem]
              font-medium
              hover:bg-black/90
            "
          >
            Continue
          </Button>

          {/* Back */}
          <Link href="/Login">
          <div className="mt-40 flex items-center gap-3 ml-24 cursor-pointer">
              <ArrowLeft className="h-6 w-6" />
              <span className="text-sm font-medium">Back</span>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
