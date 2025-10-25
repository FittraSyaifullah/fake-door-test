import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { CheckCircle2, CreditCard, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface StripeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onReserve?: () => void;
}

const STRIPE_CHECKOUT_URL = 'https://buy.stripe.com/5kQfZh8e3g7Fcb7bKa3sI06';

export function StripeModal({ open, onOpenChange, onReserve }: StripeModalProps) {
  const handleReserveClick = () => {
    // Redirect to Stripe checkout
    window.location.href = STRIPE_CHECKOUT_URL;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-white border-[#E2E8F0] rounded-2xl p-8">
        <DialogHeader>
          <DialogTitle className="text-3xl text-[#0F172A]">
            Reserve Early Access
          </DialogTitle>
          <DialogDescription className="text-lg text-[#64748B] mt-2">
            Reserve early access for $99 (fully refundable). Spots are limited to 50 people.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-6">
          <div className="bg-[#F9FAFB] rounded-xl p-6 space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#06B6D4] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[#334155]">Priority access to the platform</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#06B6D4] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[#334155]">1-on-1 onboarding session with our team</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#06B6D4] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[#334155]">First 5 projects free</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#06B6D4] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[#334155]">100% refundable if you change your mind</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-[#64748B]">
            <ShieldCheck className="w-4 h-4" />
            <span>Secure payment powered by Stripe</span>
          </div>

          <div className="border-t border-[#E2E8F0] pt-6 space-y-4">
            <Button
              onClick={handleReserveClick}
              className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-6 rounded-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <CreditCard className="w-5 h-5 mr-2" />
              Reserve for $99
            </Button>
            
            <p className="text-center text-sm text-[#94A3B8]">
              You'll be notified before the charge
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
