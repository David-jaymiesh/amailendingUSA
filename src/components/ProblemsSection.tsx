import { motion } from "framer-motion";
import { Clock, Shuffle, UserSearch, TrendingDown, Ban, DollarSign } from "lucide-react";

const problems = [
  { icon: Clock, title: "Creative production takes forever", desc: "Every ad, video, and visual eats hours that should go toward growing your business" },
  { icon: Shuffle, title: "No creative system", desc: "Ads launch without strategy - inconsistent quality kills performance" },
  { icon: UserSearch, title: "Freelancer fatigue", desc: "Finding, managing, and QA-ing contractors is a full-time job on its own" },
  { icon: Ban, title: "Ads don't convert", desc: "You invest in creatives, but CTR is low, ROAS is flat - no winning hooks" },
  { icon: TrendingDown, title: "Ad spend is wasted", desc: "Weak creatives burn budget - you're scaling the wrong assets" },
  { icon: DollarSign, title: "Production costs too much", desc: "A single shoot costs more than a full month of ready-to-run ad creatives" },
];

const ProblemsSection = () => {
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
            The Problem
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">
            Sound familiar?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px max-w-5xl mx-auto bg-border rounded-2xl overflow-hidden shadow-card">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-background p-8 md:p-10"
            >
              <p.icon className="w-6 h-6 text-accent mb-6" strokeWidth={1.5} />
              <h3 className="font-heading font-semibold text-lg mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mt-20"
        >
          <div className="w-12 h-px bg-accent mx-auto mb-8" />
          <p className="font-heading text-xl md:text-2xl font-medium leading-relaxed tracking-tight">
            We handle all creative production{" "}
            <br className="hidden md:block" />
            and build a{" "}
            <span className="font-display italic text-accent">systematic</span> pipeline
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemsSection;