import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container px-4 flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-heading font-bold text-lg tracking-tight">
            AMAI<span className="text-muted-foreground font-normal ml-1">studio</span>
          </span>
          <Link
            to="/privacy"
            className="text-muted-foreground text-sm font-light hover:text-foreground transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-muted-foreground text-xs font-light">
          <p>AMAI Creative Studio LLC</p>
          <p>© {new Date().getFullYear()} AMAI Creative Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;