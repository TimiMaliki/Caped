"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Apple from "../../assets/authLayout-image/Apple-logo.png";
import Logo from "../../assets/authLayout-image/Logo.png";
import photo from "../../assets/authLayout-image/Photo.png";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen w-full">
      {/* ================= BACKGROUND IMAGE ================= */}
      <Image
        src={photo}
        alt="Authentication background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 min-h-screen w-full grid place-items-center px-4">
        <div className="w-full max-w-md space-y-8 bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-xl">
          {/* ================= HEADING ================= */}
          <h1 className="text-center text-3xl sm:text-4xl font-medium text-black font-poppins">
            Welcome back
          </h1>

          {/* ================= FORM ================= */}
          <div className="grid gap-6">
            <Input
              type="email"
              placeholder="Email"
              className="h-15 rounded-lg border-black/40"
            />

            <Input
              type="password"
              placeholder="Password"
              className="h-15 rounded-lg border-black/40"
            />

            <Button className="h-15 rounded-lg bg-black text-white hover:bg-black/90">
              Create account
            </Button>

            <div className="text-right">
              <span className="text-xs text-black/40 underline cursor-pointer">
                Forgot Password?
              </span>
            </div>
          </div>

          {/* ================= LOGIN CTA ================= */}
          <div className="grid gap-4">
            <Button className="h-15 rounded-lg bg-black text-white hover:bg-black/90">
              Log In
            </Button>

            <div className="flex justify-end items-center gap-1 text-xs">
              <span className="text-black/40">Don’t have an account?</span>
              <span className="underline cursor-pointer text-black">
                Sign up
              </span>
            </div>
          </div>

          {/* ================= SOCIAL LOGIN ================= */}
          <div className="grid gap-4 pt-4">
            <Button className="h-15 rounded-lg bg-black text-white hover:bg-black/90 flex gap-2">
              <Image src={Apple} alt="Apple" width={20} height={20} />
              <span className="text-sm font-medium">Log in with Apple</span>
            </Button>

            <Button
              variant="outline"
              className="h-15 rounded-lg border-black flex gap-2"
            >
              <Image src={Logo} alt="Google" width={20} height={20} />
              <span className="text-sm font-medium text-black">
                Log in with Google
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
