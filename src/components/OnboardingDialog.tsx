import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Input } from './ui/input';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface OnboardingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onComplete: () => void;
}

export function OnboardingDialog({ open, onOpenChange, onComplete }: OnboardingDialogProps) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    role: '',
    roleOther: '',
    creating: '',
    creatingOther: '',
    buildMethod: '',
    buildMethodOther: '',
    motivation: '',
    motivationOther: '',
    foundUs: '',
    foundUsOther: '',
    earlyAccess: '',
  });

  const handleNext = () => {
    if (step < 6) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const isStepValid = () => {
    switch (step) {
      case 1: 
        return answers.role !== '' && (answers.role !== 'Other' || answers.roleOther.trim() !== '');
      case 2: 
        return answers.creating !== '' && (answers.creating !== 'Other' || answers.creatingOther.trim() !== '');
      case 3: 
        return answers.buildMethod !== '' && (answers.buildMethod !== 'Other' || answers.buildMethodOther.trim() !== '');
      case 4: 
        return answers.motivation !== '' && (answers.motivation !== 'Other' || answers.motivationOther.trim() !== '');
      case 5: 
        return answers.foundUs !== '' && (answers.foundUs !== 'Other' || answers.foundUsOther.trim() !== '');
      case 6: 
        return answers.earlyAccess !== '';
      default: return false;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-white border-[#E2E8F0] rounded-2xl p-8">
        <DialogHeader>
          <DialogTitle className="text-3xl text-[#0F172A]">
            Let's get you started
          </DialogTitle>
          <DialogDescription className="sr-only">
            Onboarding questionnaire for Buildables - Step {step} of 6
          </DialogDescription>
          <div className="flex gap-2 mt-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                  i <= step ? 'bg-[#06B6D4]' : 'bg-[#E2E8F0]'
                }`}
              />
            ))}
          </div>
        </DialogHeader>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="py-8 space-y-6"
          >
            {/* Section 1: Identify who they are */}
            {step === 1 && (
              <div className="space-y-4">
                <Label className="text-xl text-[#0F172A]">What best describes you?</Label>
                <RadioGroup value={answers.role} onValueChange={(value) => setAnswers({ ...answers, role: value })}>
                  {[
                    'Student (e.g., in polytechnic or university)',
                    'Mechanical / Electrical Engineer',
                    'Maker / Hobbyist',
                    'Startup founder',
                    'Product designer',
                    'Other'
                  ].map((option) => (
                    <div key={option} className="space-y-3">
                      <div 
                        className="flex items-center space-x-3 p-4 rounded-xl hover:bg-[#F9FAFB] transition-colors cursor-pointer"
                        onClick={() => setAnswers({ ...answers, role: option })}
                      >
                        <RadioGroupItem value={option} id={option} />
                        <Label htmlFor={option} className="flex-1 cursor-pointer text-[#334155]">
                          {option === 'Other' ? 'Other (please specify)' : option}
                        </Label>
                      </div>
                      {option === 'Other' && answers.role === 'Other' && (
                        <Input
                          placeholder="Please specify..."
                          value={answers.roleOther}
                          onChange={(e) => setAnswers({ ...answers, roleOther: e.target.value })}
                          className="border-[#E2E8F0] focus:border-[#06B6D4] focus:ring-[#06B6D4]"
                        />
                      )}
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <Label className="text-xl text-[#0F172A]">What are you trying to create?</Label>
                <RadioGroup value={answers.creating} onValueChange={(value) => setAnswers({ ...answers, creating: value })}>
                  {[
                    'Consumer gadget (e.g., wearable, smart home)',
                    'Robotics / automation project',
                    'IoT device',
                    'Educational / prototype tool',
                    'Other'
                  ].map((option) => (
                    <div key={option} className="space-y-3">
                      <div 
                        className="flex items-center space-x-3 p-4 rounded-xl hover:bg-[#F9FAFB] transition-colors cursor-pointer"
                        onClick={() => setAnswers({ ...answers, creating: option })}
                      >
                        <RadioGroupItem value={option} id={option} />
                        <Label htmlFor={option} className="flex-1 cursor-pointer text-[#334155]">
                          {option === 'Other' ? 'Other (please specify)' : option}
                        </Label>
                      </div>
                      {option === 'Other' && answers.creating === 'Other' && (
                        <Input
                          placeholder="Please specify..."
                          value={answers.creatingOther}
                          onChange={(e) => setAnswers({ ...answers, creatingOther: e.target.value })}
                          className="border-[#E2E8F0] focus:border-[#06B6D4] focus:ring-[#06B6D4]"
                        />
                      )}
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}

            {/* Section 2: How they currently build hardware */}
            {step === 3 && (
              <div className="space-y-4">
                <Label className="text-xl text-[#0F172A]">How do you currently prototype or build your hardware ideas?</Label>
                <RadioGroup value={answers.buildMethod} onValueChange={(value) => setAnswers({ ...answers, buildMethod: value })}>
                  {[
                    'I use CAD software (e.g., SolidWorks, Fusion360) and 3D print prototypes',
                    'I hand-make parts or outsource to workshops',
                    'I collaborate with engineers / freelancers',
                    'I\'ve never built one but want to start',
                    'Other'
                  ].map((option) => (
                    <div key={option} className="space-y-3">
                      <div 
                        className="flex items-center space-x-3 p-4 rounded-xl hover:bg-[#F9FAFB] transition-colors cursor-pointer"
                        onClick={() => setAnswers({ ...answers, buildMethod: option })}
                      >
                        <RadioGroupItem value={option} id={option} />
                        <Label htmlFor={option} className="flex-1 cursor-pointer text-[#334155]">
                          {option === 'Other' ? 'Other (please describe)' : option}
                        </Label>
                      </div>
                      {option === 'Other' && answers.buildMethod === 'Other' && (
                        <Input
                          placeholder="Please describe..."
                          value={answers.buildMethodOther}
                          onChange={(e) => setAnswers({ ...answers, buildMethodOther: e.target.value })}
                          className="border-[#E2E8F0] focus:border-[#06B6D4] focus:ring-[#06B6D4]"
                        />
                      )}
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}

            {/* Section 3: Why they clicked */}
            {step === 4 && (
              <div className="space-y-4">
                <Label className="text-xl text-[#0F172A]">What made you want to try Buildables?</Label>
                <RadioGroup value={answers.motivation} onValueChange={(value) => setAnswers({ ...answers, motivation: value })}>
                  {[
                    'I want to create hardware faster',
                    'I can\'t code or design electronics',
                    'I\'m curious if AI can actually design hardware',
                    'I want to test ideas before investing in prototypes',
                    'Other'
                  ].map((option) => (
                    <div key={option} className="space-y-3">
                      <div 
                        className="flex items-center space-x-3 p-4 rounded-xl hover:bg-[#F9FAFB] transition-colors cursor-pointer"
                        onClick={() => setAnswers({ ...answers, motivation: option })}
                      >
                        <RadioGroupItem value={option} id={option} />
                        <Label htmlFor={option} className="flex-1 cursor-pointer text-[#334155]">
                          {option === 'Other' ? 'Other (please describe)' : option}
                        </Label>
                      </div>
                      {option === 'Other' && answers.motivation === 'Other' && (
                        <Input
                          placeholder="Please describe..."
                          value={answers.motivationOther}
                          onChange={(e) => setAnswers({ ...answers, motivationOther: e.target.value })}
                          className="border-[#E2E8F0] focus:border-[#06B6D4] focus:ring-[#06B6D4]"
                        />
                      )}
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-4">
                <Label className="text-xl text-[#0F172A]">How did you find us?</Label>
                <RadioGroup value={answers.foundUs} onValueChange={(value) => setAnswers({ ...answers, foundUs: value })}>
                  {[
                    'Instagram / TikTok ad',
                    'Reddit / Discord community',
                    'Friend / word of mouth',
                    'Other'
                  ].map((option) => (
                    <div key={option} className="space-y-3">
                      <div 
                        className="flex items-center space-x-3 p-4 rounded-xl hover:bg-[#F9FAFB] transition-colors cursor-pointer"
                        onClick={() => setAnswers({ ...answers, foundUs: option })}
                      >
                        <RadioGroupItem value={option} id={option} />
                        <Label htmlFor={option} className="flex-1 cursor-pointer text-[#334155]">
                          {option === 'Other' ? 'Other (please specify)' : option}
                        </Label>
                      </div>
                      {option === 'Other' && answers.foundUs === 'Other' && (
                        <Input
                          placeholder="Please specify..."
                          value={answers.foundUsOther}
                          onChange={(e) => setAnswers({ ...answers, foundUsOther: e.target.value })}
                          className="border-[#E2E8F0] focus:border-[#06B6D4] focus:ring-[#06B6D4]"
                        />
                      )}
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}

            {/* Early access question */}
            {step === 6 && (
              <div className="space-y-4">
                <Label className="text-xl text-[#0F172A]">Would you like early access?</Label>
                <RadioGroup value={answers.earlyAccess} onValueChange={(value) => setAnswers({ ...answers, earlyAccess: value })}>
                  <div 
                    className="flex items-center space-x-3 p-4 rounded-xl hover:bg-[#F9FAFB] transition-colors cursor-pointer"
                    onClick={() => setAnswers({ ...answers, earlyAccess: 'yes' })}
                  >
                    <RadioGroupItem value="yes" id="yes-reserve-spot" />
                    <Label htmlFor="yes-reserve-spot" className="flex-1 cursor-pointer text-[#334155]">
                      Yes, reserve my spot
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between items-center pt-4">
          <Button
            variant="ghost"
            onClick={handleBack}
            disabled={step === 1}
            className="text-[#64748B] hover:text-[#334155]"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back
          </Button>

          <Button
            onClick={handleNext}
            disabled={!isStepValid()}
            className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white"
          >
            {step === 6 ? 'Continue to Payment' : 'Next'}
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
