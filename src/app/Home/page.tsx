"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Category from "../../app/Clothes/page";

import heroImg from "../../assets/Hero-Home-Imagies/white-fashion-girl.jpeg";
import shoeImg from "../../assets/Hero-Home-Imagies/Hero-prada.jpeg";
import accessoriesImg from "../../assets/Hero-Home-Imagies/Hero-prada.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="w-full h-full rounded-2xl -mt-32 md:-mt-0">
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen bg-white text-black flex items-center justify-center rounded-2xl">
        <Image
          src={heroImg}
          alt="Caped fashion"
          fill
          priority
          className="object-contain  opacity-60 rounded-2xl"
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 text-center px-6 max-w-3xl"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight">
            Designed for the <span className="text-black/70">Fearless</span>
          </h1>

          <p className="mt-6 text-sm sm:text-base text-black/80">
            Premium fashion crafted to empower confidence, individuality, and
            bold self-expression.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Link href="/clothes">
              <button className="px-4 md:px-8 py-2 md:py-3 bg-yellow-500 cursor-pointer text-black font-semibold rounded-full hover:scale-105 transition">
                Shop Now
              </button>
            </Link>

            <Link href="/story">
              <button className="px-8 py-3 border border-white/40 rounded-full cursor-pointer hover:bg-black hover:text-white transition">
                Our Story
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ================= CATEGORY SHOWCASE ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-center mb-16"
          >
            Explore Categories
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[shoeImg, heroImg, accessoriesImg].map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="relative h-105 rounded-2xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={img}
                  alt="Category"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                  <h3 className="text-white text-xl font-bold uppercase">
                    {i === 0 ? "Shoes" : i === 1 ? "Clothing" : "Accessories"}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold text-center mb-12"
          >
            Best Sellers
          </motion.h2>

          <Category />
        </div>
      </section>

      {/* ================= BRAND STORY ================= */}
      <section className="py-24 bg-black text-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center px-6"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase">
            More Than Fashion
          </h2>

          <p className="mt-8 text-white/70 leading-relaxed">
            Caped is a movement. Every piece is designed with intention —
            balancing bold aesthetics, premium quality, and cultural relevance.
            This is clothing that speaks before you do.
          </p>
        </motion.div>
      </section>

      {/* ================= TRUST / BENEFITS ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            {[
              "Ethically Produced",
              "Premium Materials",
              "Worldwide Shipping",
            ].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="font-bold text-lg">{item}</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Designed with integrity and built to last.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-28 bg-yellow-500 text-white mb-24">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center px-6"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase">
            Step Into Your Power
          </h2>

          <Link href="/new-in">
            <button className="mt-10 px-10 py-4 bg-white  cursor-pointer text-black rounded-full font-semibold hover:scale-105 transition">
              Discover New Arrivals
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
