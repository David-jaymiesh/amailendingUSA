import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Gift, Calendar } from "lucide-react";
import ContactFormDialog from "./ContactFormDialog";

const CALENDLY_LINK = "https://calendly.com/your-link";

const CTASection = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <section className="py-24 md:py-32 border-t border-border">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/20 mx-auto mb-8">
              <Gift className="w-6 h-6 text-accent" strokeWidth={1.5} />
            </div>
            <span className="inline-block font-heading text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">
              Free
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Get 3 free
              <br />
              ad{" "}
              <span className="font-display italic text-accent">creative</span>
              <br />
              concepts for your brand
            </h2>
            <p className="text-muted-foreground text-lg mb-10 font-light">
              Reach out - we'll show you what creatives will work for your business
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setFormOpen(true)}
                className="group inline-flex items-center gap-3 bg-primary text-primary-foreground font-heading font-medium text-lg px-10 py-5 rounded-full hover:bg-primary/90 transition-colors"
              >
                Get Free Concepts
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 font-heading font-medium text-lg px-8 py-5 rounded-full border border-border text-foreground hover:bg-muted transition-colors"
              >
                <Calendar className="w-5 h-5" />
                Book a Call
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <ContactFormDialog open={formOpen} onOpenChange={setFormOpen} />
    </>
  );
};

export default CTASection;
