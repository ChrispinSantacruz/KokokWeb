"use client"

import { useState, useEffect } from "react"
import { videos } from "@/data/videos"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % videos.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % videos.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length)
  }

  const getLogoForGame = (title) => {
    const logoMap = {
      "Game Kokok": "/game-kokok-logo.png",
      "Kokok Shot": "/kokok-shot-logo.png",
      "Kokok Space": "/kokok-space-logo.png",
      "Kokok-Pot": "/kokok-pot-logo.png",
    }
    return logoMap[title] || null
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-30" : "opacity-0"
            }`}
          >
            <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
              <source src={video.src} type="video/mp4" />
            </video>
          </div>
        ))}

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white max-w-4xl px-4">
          <div className="transition-all duration-1000 ease-in-out">
            <div className="mb-6 flex justify-center">
              <img
                src={getLogoForGame(videos[currentSlide].title) || "/placeholder.svg"}
                alt={videos[currentSlide].title}
                className="h-20 md:h-28 lg:h-32 object-contain drop-shadow-2xl"
              />
            </div>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 drop-shadow-lg leading-relaxed">
              {videos[currentSlide].description}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-orange-500 scale-125" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
