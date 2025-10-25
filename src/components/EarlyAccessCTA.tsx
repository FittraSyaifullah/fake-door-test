import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

interface EarlyAccessCTAProps {
  onReserveClick: () => void;
}

export function EarlyAccessCTA({ onReserveClick }: EarlyAccessCTAProps) {
  return (
    <section className="py-32 px-6 bg-[#FAFAFA]">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-6xl text-[#0F172A]">
            Reserve your spot — $99
          </h2>
          
          <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
            Early testers will receive priority access and 1-on-1 onboarding.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Button
            onClick={onReserveClick}
            className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-12 py-7 rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Reserve Spot
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <p className="text-sm text-[#94A3B8] mt-6">
            100% refundable. You'll be notified before the charge.
          </p>
        </motion.div>

        {/* Social proof indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center gap-2 text-sm text-[#64748B] pt-8"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#2563EB] border-2 border-white"
              />
            ))}
          </div>
          <span>12 builders have already reserved their spots</span>
        </motion.div>
      </div>
    </section>
  );
}
