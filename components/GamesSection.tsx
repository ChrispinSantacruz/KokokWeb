"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

const games = [
  {
    id: 5,
    title: "Game Kokok",
    logo: "/game-kokok-logo.png",
    image: "/game-kokok-thumbnail.png",
    backgroundImage: "/kokok-background.png",
    video: "/kokokshot.mp4",
    description:
      "A fast-paced and addictive arcade game where you smash enemies before they escape, protecting KokokTheRoach—the ultimate crypto survivor.",
    genre: "Whack-a-Mole",
    year: "2025",
    url: "https://game.kokoktheroach.com/",
  },
  {
    id: 1,
    title: "Kokok The Roach",
    logo: "/kokok-shot-logo.png",
    image:
      "/kokokshot1.png",
    backgroundImage:
      "/kokokshot1.png",
    video: "/kokokshot.mp4",
    description: "You're a cockroach shooting stacks of cash to defeat outrageous bosses like Trump and Elon.",
    genre: "Shoot em up",
    year: "2025",
    url: "https://www.kokoktheroach.fun/",
  },
  {
    id: 2,
    title: "Kokok Space",
    logo: "/kokok-space-logo.png",
    image:
      "/kokokspace1.png",
    backgroundImage:
      "/kokokspace1.png",
    video: "/kokokspace.mp4",
    description: "Take your roach adventure to the next level — travel through the city and outer space.",
    genre: "Space Run",
    year: "2025",
    url: "https://www.kokokspace.fun/",
  },
  {
    id: 4,
    title: "Kokok-Pot",
    logo: "/kokok-pot-logo.png",
    image: "/kokokpot1.png",
    backgroundImage: "/kokokpot1.png",
    video: "public/gamekokok.mp4",
    description: "Kokok-Pot addictive gambling game, Ready to Win?",
    genre: "Jackpot",
    year: "2025",
    url: "https://kokokpot1.vercel.app/",
  },
]

export default function GamesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const isMobile = useIsMobile()
  const [hoveredGame, setHoveredGame] = useState<number | null>(null)

  const handleGameClick = (url: string | null) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <section
      ref={ref}
      className="min-h-screen py-12 md:py-20 px-4 relative overflow-hidden"
      style={{
        backgroundImage: isMobile
          ? `url(/backgroundresponsive.png)`
          : `url(/kokok-roach-gaming.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center justify-center mb-4 gap-4">
            <img src="/game-kokok-logo.png" alt="Kokok The Roach Logo" className="h-12 md:h-20 lg:h-24 object-contain drop-shadow-2xl" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`group relative h-64 md:h-80 rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 ${
                game.url ? "cursor-pointer" : "cursor-default"
              }`}
              onClick={() => handleGameClick(game.url)}
              onMouseEnter={() => setHoveredGame(game.id)}
              onMouseLeave={() => setHoveredGame(null)}
            >
              {/* Video on hover */}
              {hoveredGame === game.id && (
                <video
                  className="absolute inset-0 w-full h-full object-cover z-0"
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ opacity: 0.5 }}
                >
                  <source src={game.video} type="video/mp4" />
                </video>
              )}

              {/* Background Image as Mosaic */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${game.backgroundImage})` }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Orange Border Effect on Hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500/50 rounded-xl transition-all duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="transform transition-all duration-300 group-hover:translate-y-[-8px]">
                  <div className="mb-3">
                    <img
                      src={game.logo || "/placeholder.svg"}
                      alt={game.title}
                      className="h-8 md:h-10 object-contain group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                  <p className="text-orange-500 text-sm font-semibold mb-3">
                    {game.genre} • {game.year}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed transition-all duration-300">
                    {game.description}
                  </p>
                </div>
              </div>

              {/* Play Button */}
              {game.url && (
                <div className="absolute top-4 right-4 w-12 h-12 bg-orange-500/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
