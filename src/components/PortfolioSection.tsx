import { motion } from "framer-motion";

import portfolio6 from "@/assets/portfolio-6.jpeg";
import portfolio7 from "@/assets/portfolio-7.jpeg";
import portfolio8 from "@/assets/portfolio-8.jpeg";
import portfolio9 from "@/assets/portfolio-9.jpeg";

type MediaItem = {
  type: "image" | "video";
  src: string;
  alt: string;
  span: string;
};

const items: MediaItem[] = [
  { type: "video", src: "/videos/portfolio-1.mp4", alt: "Video Production", span: "row-span-2" },
  { type: "video", src: "/videos/portfolio-2.mp4", alt: "Ad Creative", span: "" },
  { type: "video", src: "/videos/portfolio-3.mp4", alt: "Brand Video", span: "" },
  { type: "video", src: "/videos/portfolio-4.mp4", alt: "Social Media Content", span: "row-span-2" },
  { type: "image", src: portfolio6, alt: "Beauty Production", span: "" },
  { type: "image", src: portfolio7, alt: "Brand Imagery", span: "" },
  { type: "video", src: "/videos/portfolio-5.mp4", alt: "Video Content", span: "row-span-2" },
  { type: "image", src: portfolio8, alt: "Food & Lifestyle", span: "" },
  { type: "image", src: portfolio9, alt: "Product Photography", span: "" },
];

const PortfolioSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block font-heading text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Portfolio
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">
            Our{" "}
            <span className="font-display italic text-accent">work</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[240px]">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`relative overflow-hidden rounded-2xl group ${item.span}`}
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-primary-foreground text-sm font-heading font-medium">{item.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;