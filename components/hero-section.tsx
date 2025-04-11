"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  const [text, setText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "Selamat Datang di Portofolio Saya"
  const typingSpeed = 100
  const typingDelay = 1000
  const textRef = useRef(0)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (textRef.current < fullText.length) {
          setText((prev) => prev + fullText.charAt(textRef.current))
          textRef.current += 1
        } else {
          // Blink cursor for a while after typing is complete
          setTimeout(() => {
            setShowCursor(false)
          }, 3000)
        }
      },
      textRef.current === 0 ? typingDelay : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [text])

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("tentang")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-pink-light rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-dark rounded-full opacity-20 blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 z-10 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-poppins">
              <span className="block mb-2">Eh Haloww ><!!, Akuu</span>
              <span className="text-primary text-glow">Airaa Cheisyaaa!:3</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium mb-8 h-8">
              {text}
              {showCursor && <span className="typing-cursor"></span>}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Selamat datang di portofolio simple kuu. silahkann di scroll yaa, btw buat yang bilang aku punya cowo, ku tamparr kau yah!!!!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-light to-pink-dark rounded-full opacity-20 blur-md animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="/aira.jpg"
                  alt="Airaa Cheisyaa"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToNextSection}
        >
          <ChevronDown size={32} className="text-primary scroll-indicator" />
        </motion.div>
      </div>
    </section>
  )
}
