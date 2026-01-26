"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Latest Electronics</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in-delay">
            Discover cutting-edge technology at unbeatable prices
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Shop Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
