import { motion } from "motion/react"

export function WhyItMatters() {
  return (
    <section className="relative py-32 px-6 bg-white overflow-hidden">
      {/* Animated blueprint background */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0F172A 1px, transparent 1px),
            linear-gradient(to bottom, #0F172A 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "80px 80px"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-5xl md:text-7xl text-[#0F172A] leading-tight">
            Hardware shouldn&#39;t take months to prototype.
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-[#64748B] leading-relaxed max-w-3xl mx-auto"
          >
            Software builders can deploy ideas in hours. Buildables gives the same speed to hardware. Describe it — and
            we'll generate it.
          </motion.p>

          {/* Decorative elements */}
          <div className="flex items-center justify-center gap-4 pt-8">
            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-[#06B6D4] to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              style={{ maxWidth: "300px" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Subtle corner accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#06B6D4]/5 to-transparent rounded-br-[100px]" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#2563EB]/5 to-transparent rounded-tl-[100px]" />
    </section>
  )
}
