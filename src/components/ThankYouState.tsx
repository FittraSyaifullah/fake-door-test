import { motion } from 'motion/react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { Dialog, DialogContent } from './ui/dialog';

interface ThankYouStateProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ThankYouState({ open, onOpenChange }: ThankYouStateProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-white border-[#E2E8F0] rounded-2xl p-12">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-6"
        >
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-[#06B6D4] to-[#2563EB] rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 bg-gradient-to-br from-[#06B6D4] to-[#2563EB] rounded-full -z-10"
            />
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl text-[#0F172A]">
              You're all set!
            </h2>
            <p className="text-lg text-[#64748B]">
              We'll contact you for a demo soon.
            </p>
          </div>

          <div className="bg-[#F9FAFB] rounded-xl p-6 w-full">
            <div className="flex items-center gap-3 text-sm text-[#64748B]">
              <Sparkles className="w-5 h-5 text-[#06B6D4]" />
              <p className="text-left">
                Keep an eye on your inbox. We'll reach out within 48 hours to schedule your onboarding session.
              </p>
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
