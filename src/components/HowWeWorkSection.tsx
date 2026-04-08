import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discovery", desc: "We research your niche, product, and audience" },
  { num: "02", title: "Strategy", desc: "Define formats and generate winning concepts" },
  { num: "03", title: "Production", desc: "Create videos, copy, and visuals" },
  { num: "04", title: "Creative Calendar", desc: "Build a 30-day ad creative plan" },
  { num: "05", title: "Delivery", desc: "Hand off assets in batches, ready to launch" },
];

const HowWeWorkSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="inline-block font-heading text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Process
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">
            How it works
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group grid grid-cols-[60px_1fr] gap-6 items-baseline border-t border-border py-6 last:border-b"
            >
              <span className="font-heading text-sm text-muted-foreground">
                {step.num}
              </span>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="font-heading font-semibold text-lg">{step.title}</h3>
                <p className="text-muted-foreground text-sm font-light">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;