import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Video, Image, Sparkles, Check, Zap } from "lucide-react";
import ContactFormDialog from "./ContactFormDialog";

const videoTypes = [
  "AI avatar ads for expert-led content",
  "UGC-style video ads",
  "Explainer & educational videos",
  "Scripted & brand story videos",
  "Product showcase & demo content",
];

const visualTypes = [
  "AI characters & brand mascots",
  "Premium product visuals",
  "Creative & surreal ad scenes",
  "Motion & dynamic ad formats",
  "Hook-driven visual creatives",
  "Conceptual & campaign imagery",
];

const plans = [
  {
    label: "Starter",
    title: "Ad Creative Flow",
    videos: 10,
    visuals: 20,
    videoNote: "every 3 days",
    visualNote: "remaining days",
    price: "$2,499",
    marketPrice: "$6,000 - $8,000",
    featured: false,
  },
  {
    label: "Best Value",
    title: "Ad Creative Flow Pro",
    videos: 20,
    visuals: 10,
    videoNote: "daily",
    visualNote: "additional",
    price: "$3,999",
    marketPrice: "$10,000 - $12,000",
    featured: true,
  },
];

const ContentFlowSection = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <section className="py-24 md:py-32 bg-gradient-subtle">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20 text-center"
            >
              <span className="inline-block font-heading text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
                Services
              </span>
              <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                30 days of ad creatives
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto text-base md:text-lg leading-relaxed font-light">
                We produce high-converting ad creatives - you just launch them
              </p>
            </motion.div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-10">
              {plans.map((plan, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className={`relative rounded-3xl overflow-hidden transition-all ${
                    plan.featured
                      ? "bg-gradient-dark text-primary-foreground shadow-elevated ring-1 ring-primary-foreground/10"
                      : "bg-background border border-border shadow-card"
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
                  )}
                  <div className="p-8 md:p-10">
                    <span
                      className={`inline-block font-heading text-[10px] tracking-[0.25em] uppercase px-3 py-1 rounded-full mb-6 ${
                        plan.featured
                          ? "bg-accent/20 text-accent"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {plan.label}
                    </span>

                    <h3 className="font-heading text-2xl md:text-3xl font-bold tracking-tight mb-6">
                      {plan.title}
                    </h3>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className={`rounded-2xl p-5 ${plan.featured ? "bg-primary-foreground/5" : "bg-muted/50"}`}>
                        <Video className="w-4 h-4 mb-2 text-accent" strokeWidth={1.5} />
                        <p className="font-heading text-3xl font-bold">{plan.videos}</p>
                        <p className={`text-xs mt-1 ${plan.featured ? "text-primary-foreground/50" : "text-muted-foreground"}`}>
                          video creatives
                        </p>
                        <p className={`text-[10px] mt-0.5 ${plan.featured ? "text-primary-foreground/30" : "text-muted-foreground/60"}`}>
                          {plan.videoNote}
                        </p>
                      </div>
                      <div className={`rounded-2xl p-5 ${plan.featured ? "bg-primary-foreground/5" : "bg-muted/50"}`}>
                        <Image className="w-4 h-4 mb-2 text-accent" strokeWidth={1.5} />
                        <p className="font-heading text-3xl font-bold">{plan.visuals}</p>
                        <p className={`text-xs mt-1 ${plan.featured ? "text-primary-foreground/50" : "text-muted-foreground"}`}>
                          static creatives
                        </p>
                        <p className={`text-[10px] mt-0.5 ${plan.featured ? "text-primary-foreground/30" : "text-muted-foreground/60"}`}>
                          {plan.visualNote}
                        </p>
                      </div>
                    </div>

                    <div className="mb-8">
                      <div className={`inline-flex items-center gap-2 text-sm font-medium mb-3 px-3 py-1.5 rounded-lg ${
                        plan.featured ? "bg-primary-foreground/10 text-primary-foreground/70" : "bg-muted text-muted-foreground"
                      }`}>
                        <span className="line-through whitespace-nowrap">Traditional production: {plan.marketPrice}</span>
                      </div>
                      <p className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                        <span className="whitespace-nowrap">{plan.price}</span>
                        <span className={`text-base font-normal ml-1 ${plan.featured ? "text-primary-foreground/40" : "text-muted-foreground"}`}>
                          /mo
                        </span>
                      </p>
                    </div>

                    <button
                      onClick={() => setFormOpen(true)}
                      className={`group w-full inline-flex items-center justify-center gap-2 font-heading font-medium px-8 py-4 rounded-full transition-colors ${
                        plan.featured
                          ? "bg-primary-foreground text-foreground hover:bg-primary-foreground/90"
                          : "bg-primary text-primary-foreground hover:bg-primary/90"
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Test Package */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="max-w-2xl mx-auto bg-background border border-accent/20 rounded-2xl p-6 md:p-8 shadow-card text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Zap className="w-5 h-5 text-accent" strokeWidth={1.5} />
                  <span className="font-heading text-xs tracking-[0.25em] uppercase text-accent">Trial Package</span>
                </div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold tracking-tight mb-2">
                  3 performance-tested ad creatives for
                  <br />
                  <span className="whitespace-nowrap">$499</span>
                </h3>
                <p className="text-muted-foreground text-sm mb-6 font-light">
                  Test the quality - no long-term commitment required
                </p>
                <button
                  onClick={() => setFormOpen(true)}
                  className="group inline-flex items-center gap-2 bg-accent text-accent-foreground font-heading font-medium px-8 py-3.5 rounded-full hover:bg-accent/90 transition-colors"
                >
                  Try It Out
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* What's included */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="text-center mb-12">
                <span className="inline-block font-heading text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                  What's Included
                </span>
                <h3 className="font-heading text-2xl md:text-3xl font-bold tracking-tight">
                  Creative Formats
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background border border-border rounded-2xl p-8 shadow-card">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center">
                      <Video className="w-5 h-5 text-accent" strokeWidth={1.5} />
                    </div>
                    <h4 className="font-heading font-semibold text-lg">Video Ad Creatives</h4>
                  </div>
                  <div className="space-y-3">
                    {videoTypes.map((type, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" strokeWidth={2} />
                        <span className="text-sm text-muted-foreground font-light">{type}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-background border border-border rounded-2xl p-8 shadow-card">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-accent" strokeWidth={1.5} />
                    </div>
                    <h4 className="font-heading font-semibold text-lg">Static Ad Creatives</h4>
                  </div>
                  <div className="space-y-3">
                    {visualTypes.map((type, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" strokeWidth={2} />
                        <span className="text-sm text-muted-foreground font-light">{type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <ContactFormDialog open={formOpen} onOpenChange={setFormOpen} />
    </>
  );
};

export default ContentFlowSection;
