import { useState } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import ContactFormDialog from "./ContactFormDialog";

const CALENDLY_LINK = "https://calendly.com/your-link";

const Header = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl">
        <div className="container px-4 h-20 flex items-center justify-between">
          <span className="font-heading font-bold text-xl tracking-tight">
            AMAI<span className="text-muted-foreground font-normal ml-1">studio</span>
          </span>
          <div className="flex items-center gap-3">
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 font-heading font-medium text-sm px-5 py-2.5 rounded-full border border-border text-foreground hover:bg-muted transition-colors"
            >
              <Calendar className="w-4 h-4" />
              Book a Call
            </a>
            <button
              onClick={() => setFormOpen(true)}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-medium text-sm px-6 py-2.5 rounded-full hover:bg-primary/90 transition-colors"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>
      <ContactFormDialog open={formOpen} onOpenChange={setFormOpen} />
    </>
  );
};

export default Header;
