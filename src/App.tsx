import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { OnboardingDialog } from './components/OnboardingDialog';
import { StripeModal } from './components/StripeModal';
import { ThankYouState } from './components/ThankYouState';
import { HowItWorks } from './components/HowItWorks';
import { BuiltForBuilders } from './components/BuiltForBuilders';
import { WhyItMatters } from './components/WhyItMatters';
import { EarlyAccessCTA } from './components/EarlyAccessCTA';
import { Footer } from './components/Footer';

export default function App() {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showStripeModal, setShowStripeModal] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleGenerateClick = () => {
    setShowOnboarding(true);
  };

  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
    setShowStripeModal(true);
  };

  const handleReserveClick = () => {
    setShowStripeModal(false);
    setShowThankYou(true);
  };

  const handleEarlyAccessClick = () => {
    setShowOnboarding(true);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navigation onEarlyAccessClick={handleEarlyAccessClick} />
      
      <main className="pt-16">
        <Hero onGenerateClick={handleGenerateClick} />
        <HowItWorks />
        <BuiltForBuilders />
        <WhyItMatters />
        <EarlyAccessCTA onReserveClick={handleEarlyAccessClick} />
      </main>

      <Footer />

      <OnboardingDialog
        open={showOnboarding}
        onOpenChange={setShowOnboarding}
        onComplete={handleOnboardingComplete}
      />

      <StripeModal
        open={showStripeModal}
        onOpenChange={setShowStripeModal}
        onReserve={handleReserveClick}
      />

      <ThankYouState
        open={showThankYou}
        onOpenChange={setShowThankYou}
      />
    </div>
  );
}
