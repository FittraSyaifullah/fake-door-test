import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { CADWireframe } from './CADWireframe';
import { Sparkles } from 'lucide-react';

interface HeroProps {
  onGenerateClick: () => void;
}

export function Hero({ onGenerateClick }: HeroProps) {
  const [searchValue, setSearchValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <CADWireframe />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-4"
        >
          <h1 className="text-5xl md:text-7xl tracking-tight text-[#0F172A]">
            Describe what hardware you want — we'll make it for you.
          </h1>
          
          <p className="text-xl md:text-2xl text-[#64748B] max-w-2xl mx-auto">
            We use AI to turn text into working 3D models and parts lists.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative max-w-2xl mx-auto"
        >
          <div
            className={`relative rounded-2xl bg-white p-2 shadow-lg transition-all duration-300 ${
              isFocused ? 'shadow-2xl ring-2 ring-[#06B6D4] ring-opacity-50' : 'shadow-xl'
            }`}
          >
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Describe your hardware idea…"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="flex-1 border-0 bg-transparent px-6 py-6 text-lg focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#94A3B8]"
              />
              <Button
                onClick={onGenerateClick}
                className="px-8 py-6 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-xl transition-all duration-300 hover:scale-105"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Generate
              </Button>
            </div>
          </div>
          
          {isFocused && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute -inset-4 bg-gradient-to-r from-[#06B6D4]/20 to-[#2563EB]/20 rounded-3xl blur-xl -z-10"
            />
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm text-[#94A3B8]"
        >
          Try: "A custom NVMe enclosure with RGB" or "Robotic arm for PCB assembly"
        </motion.div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0F172A08_1px,transparent_1px),linear-gradient(to_bottom,#0F172A08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
    </section>
  );
}
