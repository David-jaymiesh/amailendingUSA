import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Crown, Calendar } from "lucide-react";
import ContactFormDialog from "./ContactFormDialog";

const CALENDLY_LINK = "https://calendly.com/your-link";

const features = [
  "Custom creative concept",
  "Scriptwriting & storyboarding",
  "Art direction & visual execution",
  "Every project built from scratch",
  "Structure & messaging strategy",
  "Tailored to your goals & audience",
];

const PremiumSection = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <section className="py-24 md:py-32">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-accent/5 to-accent/20 rounded-[2rem] blur-xl" />
            
            <div className="relative bg-gradient-dark rounded-3xl overflow-hidden shadow-elevated">
              <div className="h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
              
              <div className="p-10 md:p-16 lg:p-20">
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-8"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/20">
                      <Crown className="w-6 h-6 text-accent" strokeWidth={1.5} />
                    </div>
                  </motion.div>

                  <span className="inline-block font-heading text-xs tracking-[0.3em] uppercase text-accent/60 mb-8">
                    Bespoke Production
                  </span>

                  <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.05] tracking-tight mb-6">
                    Brand
                    <br />
                    <span className="font-display italic text-accent">creatives</span>
                  </h2>

                  <p className="text-primary-foreground/50 text-lg md:text-xl max-w-xl leading-relaxed font-light mb-14">
                    Premium ad creatives at the level of top brands - with a thought-out concept,
                    direction, and visuals that build trust and authority
                  </p>

                  <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4 mb-14">
                    {features.map((text, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.06 }}
                        className="flex items-center gap-4 py-1"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        <span className="text-primary-foreground/70 text-sm font-light">{text}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-start gap-4 pt-10 border-t border-primary-foreground/[0.08]">
                    <button
                      onClick={() => setFormOpen(true)}
                      className="group inline-flex items-center gap-3 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground font-heading font-medium px-10 py-5 rounded-full hover:from-accent/90 hover:to-accent/70 transition-all shadow-lg shadow-accent/20"
                    >
                      Discuss Your Project
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                    <a
                      href={CALENDLY_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 font-heading font-medium px-8 py-5 rounded-full border border-primary-foreground/20 text-primary-foreground/70 hover:bg-primary-foreground/5 transition-colors"
                    >
                      <Calendar className="w-4 h-4" />
                      Book a Call
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>
      <ContactFormDialog open={formOpen} onOpenChange={setFormOpen} />
    </>
  );
};

export default PremiumSection;
