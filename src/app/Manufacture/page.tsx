"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import photo from "../../assets/Hero-Home-Imagies/ny.jpeg";
import { Button } from "@/components/ui/button";

export default function ManufacturingPage() {
  return (
    <main className="relative w-full bg-black text-white overflow-hidden mb-44">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center">
        <Image
          src={photo}
          alt="Caped Manufacturing"
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/70 to-black" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl px-6 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Crafted in New York.
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-white/80">
            Built with precision. Worn like royalty.
          </p>
        </motion.div>
      </section>

      {/* MADE IN NY */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Manufactured in New York
            </h2>
            <p className="text-lg leading-relaxed text-white/80">
              CAPED is proudly designed and manufactured in New York —
              where ambition is loud, standards are high, and excellence
              is expected.
              <br /><br />
              Every garment is crafted by skilled hands that understand
              precision, durability, and detail. This isn’t mass production.
              This is intentional creation.
            </p>
          </div>

          <div className="relative h-170 rounded-2xl overflow-hidden border border-white/10">
            <Image
              src={photo}
              alt="New York manufacturing"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* ROYAL QUALITY */}
      <section className="bg-white text-black py-32 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8">
            Designed for Royalty
          </h2>
          <p className="text-lg leading-relaxed text-black/80">
            Royalty isn’t about crowns.
            <br />
            It’s about how you carry yourself.
            <br /><br />
            CAPED garments are built to make you feel powerful —
            structured silhouettes, premium fabrics, and a fit
            that commands respect the moment you walk in.
          </p>
        </motion.div>
      </section>

      {/* PROCESS */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: "Premium Materials",
              text: "We source high-grade fabrics chosen for comfort, durability, and timeless appeal.",
            },
            {
              title: "Precision Craftsmanship",
              text: "Each piece goes through strict quality control — cut, stitched, and finished with intent.",
            },
            {
              title: "Built to Last",
              text: "CAPED is not fast fashion. It’s fashion with authority.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="border border-white/10 rounded-2xl p-8 bg-black/40"
            >
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-white/70">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STATEMENT */}
      <section className="relative py-40 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Power is in the details.
          </h2>
          <p className="text-white/80 text-lg mb-10">
            From New York to the world — CAPED delivers fashion
            that feels authoritative, elevated, and undeniably royal.
          </p>
          <Button className="px-12 py-6 text-lg rounded-full">
            Experience CAPED
          </Button>
        </motion.div>
      </section>
    </main>
  );
}
