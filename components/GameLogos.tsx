"use client"

import { motion } from "framer-motion"

const gameLogos = [
  {
    id: 1,
    name: "Game Kokok",
    image: "/game-kokok-logo.png",
    url: "https://game.kokoktheroach.com/",
  },
  {
    id: 2,
    name: "Kokok Shot",
    image: "/kokok-shot-logo.png",
    url: "https://www.kokoktheroach.fun/",
  },
  {
    id: 3,
    name: "Kokok Space",
    image: "/kokok-space-logo.png",
    url: "https://www.kokokspace.fun/",
  },
  {
    id: 4,
    name: "Kokok Pot",
    image: "/kokok-pot-logo.png",
    url: "https://kokokpot1.vercel.app/",
  },
]

export default function GameLogos() {
  const handleLogoClick = (url: string | null) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <nav className="bg-black/40 backdrop-blur-md border-b border-orange-500/20 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-center space-x-12 md:space-x-16 lg:space-x-20">
          {gameLogos.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex items-center justify-center hover:scale-110 transition-transform duration-300 ${
                logo.url ? "cursor-pointer" : "cursor-default opacity-75"
              }`}
              onClick={() => handleLogoClick(logo.url)}
            >
              <img
                src={logo.image || "/placeholder.svg"}
                alt={logo.name}
                className="h-16 md:h-20 w-auto object-contain filter drop-shadow-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </nav>
  )
}
