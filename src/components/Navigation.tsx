"use client"

import { motion } from "motion/react"
import { Button } from "./ui/button"
import logo from "../assets/756361a5f076c9d4be97270265892a78e0d7cda3.png"

interface NavigationProps {
  onEarlyAccessClick: () => void
}

export function Navigation({ onEarlyAccessClick }: NavigationProps) {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-[#E2E8F0]/50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo || "/placeholder.svg"} alt="Buildables Logo" className="w-8 h-8" />
          <span className="text-xl text-[#0F172A]">Buildables</span>
        </div>

        <Button
          onClick={onEarlyAccessClick}
          variant="ghost"
          className="text-[#334155] hover:text-[#0F172A] hover:bg-white/50"
        >
          Early Access
        </Button>
      </div>
    </motion.nav>
  )
}
