"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import photo from "../../assets/Hero-Home-Imagies/billionaireFashion.jpeg";
import blackCar from "../../assets/Hero-Home-Imagies/2026.jpeg";
import { Button } from "@/components/ui/button";

export default function StoryPage() {
  return (
    <main className="relative w-full overflow-hidden bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background */}
        <Image
          src={photo}
          alt="Caped Story Background"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-black" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl px-6 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            This is not just clothing.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80">
            This is armor for the everyday grind.
          </p>
        </motion.div>
      </section>

      {/* ORIGIN STORY */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold mb-6">Where CAPED began</h2>
            <p className="text-white/80 leading-relaxed text-lg">
              CAPED was born from pressure — the kind you feel when the world
              expects more from you every single day.
              <br /><br />
              We saw people waking up early, pushing through doubt, building
              dreams quietly while the world scrolled past them.
              <br /><br />
              CAPED exists for those people.
            </p>
          </div>

          <div className="relative h-170 rounded-2xl overflow-hidden">
            <Image
              src={blackCar}
              alt="Caped origin"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-white text-black py-32 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8">Our Philosophy</h2>
          <p className="text-lg leading-relaxed text-black/80">
            A cape doesn’t make you a hero.
            <br />
            It reminds you that you already are one.
            <br /><br />
            Every stitch, every fabric choice, every silhouette is designed
            to make you feel confident, protected, and unapologetically bold.
          </p>
        </motion.div>
      </section>

      {/* VALUES */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: "Built with Purpose",
              text: "We don’t chase trends. We design timeless pieces that feel powerful today and five years from now.",
            },
            {
              title: "Designed for Movement",
              text: "CAPED is made for real life — long days, late nights, and everything in between.",
            },
            {
              title: "Confidence is the Fit",
              text: "If it doesn’t make you stand taller, it doesn’t make the cut.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="border border-white/10 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-white/70">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-40 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Wear your mindset.
          </h2>
          <p className="text-white/80 text-lg mb-10">
            CAPED is more than a brand — it’s a reminder of who you are becoming.
          </p>
          <Button className="px-10 py-6 text-lg rounded-full">
            Shop CAPED
          </Button>
        </motion.div>
      </section>
    </main>
  );
}
