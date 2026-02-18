"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import packageImg from "../../assets/Hero-Home-Imagies/package.jpeg";

const steps = [
  {
    step: "01",
    title: "Order Confirmed",
    text: "Once your order is placed, you’ll receive a confirmation email instantly. Our system prepares your item for final inspection and packaging.",
  },
  {
    step: "02",
    title: "Quality Inspection",
    text: "Every CAPED piece is carefully inspected to ensure it meets our royal standards — stitching, fabric, structure, and finish.",
  },
  {
    step: "03",
    title: "Luxury Packaging",
    text: "Your item is wrapped in premium protective packaging, designed to preserve quality and deliver an unforgettable unboxing experience.",
  },
  {
    step: "04",
    title: "Shipped from New York",
    text: "Your package is dispatched directly from New York and handed to our trusted delivery partners.",
  },
  {
    step: "05",
    title: "Tracking Number Sent",
    text: "A tracking number is sent to your email so you can follow your package in real time — from our hands to yours.",
  },
  {
    step: "06",
    title: "Delivered with Care",
    text: "Your CAPED order arrives safely at your doorstep, ready to be worn with confidence and authority.",
  },
];

export default function PackagingPage() {
  return (
    <main className="relative bg-black text-white overflow-hidden mb-44">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center">
        <Image
          src={packageImg}
          alt="Caped Packaging"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/70 to-black" />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl px-6 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            From Our Hands to Yours.
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-white/80">
            Precision packaging. Full transparency. Royal delivery.
          </p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="py-28 px-6 max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg text-white/80 leading-relaxed"
        >
          At CAPED, delivery is part of the experience.
          <br /><br />
          We don’t just ship products — we deliver confidence, craftsmanship,
          and control. Every order is handled with precision and communicated
          clearly every step of the way.
        </motion.p>
      </section>

      {/* STEPS */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="border border-white/10 rounded-2xl p-8 bg-black/50"
            >
              <span className="text-sm tracking-widest text-white/50">
                STEP {item.step}
              </span>
              <h3 className="text-2xl font-semibold mt-3 mb-4">
                {item.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TRACKING */}
      <section className="bg-white text-black py-32 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">
            Track Every Move
          </h2>
          <p className="text-lg text-black/80 leading-relaxed">
            Once shipped, you’ll receive a tracking number by email.
            <br />
            You’ll know exactly where your order is — no guessing, no waiting in the dark.
            <br /><br />
            Transparency is power.
          </p>
        </motion.div>
      </section>

      {/* FINAL STATEMENT */}
      <section className="py-40 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Delivery Fit for Royalty
          </h2>
          <p className="text-white/80 text-lg mb-10">
            CAPED ensures every order arrives with care, precision,
            and the respect your style deserves.
          </p>
          <Button className="px-12 py-6 text-lg rounded-full">
            Shop CAPED
          </Button>
        </motion.div>
      </section>
    </main>
  );
}
