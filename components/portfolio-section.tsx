"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

const categories = ["Semua", "Codex", "Editing", "Achievement"]

const portfolioItems = [
  {
    id: 1,
    title: "Simple Bot Whatsapp With Baileys",
    category: "Codex",
    image: "/bot.jpg", // belum
  },
  {
    id: 2,
    title: "Problem Solfing Eror Bot Whatsapp",
    category: "Codex",
    image: "/image.png",
  },
  {
    id: 3,
    title: "GFX Editing",
    category: "Editing",
    image: "/gfx.png",
  },
  {
    id: 4,
    title: "ColorGrading Edit",
    category: "Editing",
    image: "/grading.png",
  },
  {
    id: 5,
    title: "Hasil kegabutan part 1",
    category: "Achievement",
    image: "/prestasi.png",
  },
  {
    id: 6,
    title: "Hasil Kegabutan Part 2",
    category: "Achievement",
    image: "/gabut.png",
  },
]

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("Semua")
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const filteredItems =
    activeCategory === "Semua" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section id="portofolio" className="py-20 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4 font-poppins inline-flex items-center justify-center"
          >
            <Sparkles className="mr-2 text-primary" size={28} />
            Portofolio
            <Sparkles className="ml-2 text-primary" size={28} />
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></motion.div>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Berikut adalah beberapa karya dan proyek yang telah saya kerjakan waktu gabut hehehe. Klik kategori untuk memfilter.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.div key={category} variants={itemVariants}>
              <Button
                variant={activeCategory === category ? "default" : "outline"}
                className={`rounded-full px-6 ${
                  activeCategory === category ? "bg-primary hover:bg-pink-dark" : "hover:text-primary"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item) => (
            <motion.div key={item.id} variants={itemVariants} className="portfolio-item group" layout>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-white text-xl font-bold">{item.title}</h3>
                      <p className="text-white/80 text-sm">{item.category}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{item.category}</p>
                  <Button variant="outline" className="w-full hover:bg-primary hover:text-white transition-colors">
                    Lihat Detail
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
