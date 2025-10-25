import { motion } from 'motion/react';
import { Edit3, Cpu, Download } from 'lucide-react';

const steps = [
  {
    icon: Edit3,
    title: 'Describe your idea',
    description: 'Type what you want to build — enclosure, robot arm, IoT box, anything.',
  },
  {
    icon: Cpu,
    title: 'AI designs it',
    description: 'We generate your 3D model, parts list, and circuit layout automatically.',
  },
  {
    icon: Download,
    title: 'You receive your files',
    description: 'Get STL, BOM, and code for Arduino, Raspberry Pi, or ESP32.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-[#0F172A] mb-4">
            How it works
          </h2>
          <p className="text-xl text-[#64748B]">
            From idea to prototype in three simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E2E8F0] h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/5 to-[#2563EB]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#06B6D4] to-[#2563EB] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-[#0F172A] rounded-full flex items-center justify-center text-white text-sm">
                    {index + 1}
                  </div>

                  <h3 className="text-2xl text-[#0F172A] mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-[#64748B] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
