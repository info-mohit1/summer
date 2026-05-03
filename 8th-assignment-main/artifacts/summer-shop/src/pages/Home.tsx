import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Sun, Droplets, Wind, Shield } from "lucide-react";
import Lottie from "lottie-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import productsData from "@/data/products.json";

// A simple sun animation placeholder if we can't load external
const sunAnimation = {
  v: "5.5.2",
  fr: 60,
  ip: 0,
  op: 180,
  w: 500,
  h: 500,
  nm: "Sun",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "SunCore",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [0] }, { t: 180, s: [360] }], ix: 10 },
        p: { a: 0, k: [250, 250, 0], ix: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 }
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              d: 1,
              ty: "el",
              s: { a: 0, k: [200, 200], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              nm: "Ellipse Path 1",
              mn: "ADBE Vector Shape - Ellipse",
              hd: false
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 0.6, 0.1, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform"
            }
          ],
          nm: "Ellipse 1",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false
        }
      ],
      ip: 0,
      op: 180,
      st: 0,
      bm: 0
    }
  ]
};

export default function Home() {
  const popularProducts = productsData.slice(0, 3);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 z-0" />
        <div className="container relative z-10 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start text-left"
          >
            <div className="inline-flex items-center rounded-full px-3 py-1 mb-6 text-sm font-semibold text-primary bg-primary/10 border border-primary/20">
              <Sun className="w-4 h-4 mr-2" />
              Summer Sale 50% OFF
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
              Chase the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Sun.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-md leading-relaxed">
              Curated essentials for your best summer yet. Beach, pool, or backyard — we've got you covered.
            </p>
            <Link href="/products">
              <Button size="lg" className="h-14 px-8 text-base rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                Shop the Collection <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full" />
            <div className="w-full max-w-[400px] aspect-square relative z-10">
              <Lottie animationData={sunAnimation} loop={true} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-20 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-3">Trending Now</h2>
              <p className="text-muted-foreground">What everyone is bringing to the beach.</p>
            </div>
            <Link href="/products">
              <Button variant="ghost" className="hidden md:flex group">
                View all <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/products">
              <Button variant="outline" className="w-full">
                View all products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Summer Care Tips */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Summer Care Tips</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-16">
            Make the most of the season while staying protected and hydrated.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "UV Protection", desc: "Reapply sunscreen every 2 hours, especially after swimming." },
              { icon: Droplets, title: "Hydration", desc: "Drink at least 8 glasses of water a day in the heat." },
              { icon: Sun, title: "Peak Hours", desc: "Avoid direct sun exposure between 10 AM and 4 PM." },
              { icon: Wind, title: "Stay Cool", desc: "Wear loose, light-colored clothing to reflect heat." },
            ].map((tip, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-card p-6 rounded-2xl shadow-sm border border-border"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <tip.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">{tip.title}</h3>
                <p className="text-sm text-muted-foreground">{tip.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Brands Grid */}
      <section className="py-20 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Featured Brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {["WaveRider", "SunGuard", "LazyDays", "SolarLens", "FloatLife", "ShellCo"].map((brand) => (
              <div key={brand} className="text-xl font-black tracking-tighter text-foreground py-4 px-6 border border-border/50 rounded-xl bg-card">
                {brand.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
