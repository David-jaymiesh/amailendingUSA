import { ArrowRight } from "lucide-react";

const CONTACT_LINK = "https://t.me/AMAIStudio";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl">
      <div className="container px-4 h-20 flex items-center justify-between">
        <span className="font-heading font-bold text-xl tracking-tight">
          AMAI<span className="text-muted-foreground font-normal ml-1">studio</span>
        </span>
        <a
          href={CONTACT_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-medium text-sm px-6 py-2.5 rounded-full hover:bg-primary/90 transition-colors"
        >
          Get Started
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
};

export default Header;