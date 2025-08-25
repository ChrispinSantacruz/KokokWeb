import HeroCarousel from "@/components/HeroCarousel"
import GameLogos from "@/components/GameLogos"
import GamesSection from "@/components/GamesSection"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <GameLogos />
      <HeroCarousel />
      <GamesSection />
    </main>
  )
}
