"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Apple from "../../assets/authLayout-image/Apple-logo.png";
import Logo from "../../assets/authLayout-image/Logo.png";
import photo from "../../assets/authLayout-image/Photo.png";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {account , IDGenerator } from "../../lib/Utils/appwrite"

export default function SignUpPage() {
    const router = useRouter();
      const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
  
    const authSignUp = async () => {
      try {
        setLoading(true);
  
        await account.create(IDGenerator.unique(), email, password, name);
  
        router.push("/"); // redirect after login
   console.log(email , password , name)
      } 
    
      catch (error) {
        console.error("Signup error:", error);
        alert("Failed to create account");
      } finally {
        setLoading(false);
      }
    };
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 min-h-screen w-full grid place-items-center px-4">
        <div className="w-full max-w-md space-y-8 bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-xl">
          {/* ================= HEADING ================= */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl sm:text-4xl font-medium text-black font-poppins">
              Create account
            </h1>

            <p className="text-xs text-black/70">
              Let’s get started with your 30 days trial
            </p>
          </div>

          {/* ================= FORM ================= */}
          <div className="grid gap-5">
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-15 rounded-lg border-black/40"
            />

            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-15 rounded-lg border-black/40"
            />

            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-15 rounded-lg border-black/40"
            />

            <Button className="h-15 rounded-lg bg-black text-white hover:bg-black/90 cursor-pointer" onClick={authSignUp} disabled={loading}>
              Create account
            </Button>
          </div>

          {/* ================= LOGIN LINK ================= */}
          <div className="flex justify-center items-center gap-1 text-xs">
            <span className="text-black/50">
              Already have an account?
            </span>
            <Link href="/Login">
             <span className="underline cursor-pointer text-black">
              Log in
            </span>
            </Link>
          </div>

          {/* ================= SOCIAL SIGNUP ================= */}
          <div className="grid gap-4 pt-2">
            <Button className="h-15 rounded-lg bg-black text-white hover:bg-black/90 flex gap-2">
              <Image src={Apple} alt="Apple" width={20} height={20} />
              <span className="text-sm font-medium">
                Sign up with Apple
              </span>
            </Button>

            <Button
              variant="outline"
              className="h-15 rounded-lg border-black flex gap-2"
            >
              <Image src={Logo} alt="Google" width={20} height={20} />
              <span className="text-sm font-medium text-black">
                Sign up with Google
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
