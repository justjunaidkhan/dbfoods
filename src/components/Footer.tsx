import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="section-dark border-t border-border/10">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4">DB Foods & Beverages</h3>
            <p className="text-surface-dark-foreground/60 text-sm leading-relaxed mb-4">
              Refreshing Taste. Trusted Quality. Growing Together. Pakistan's trusted beverage manufacturing partner.
            </p>
            <p className="text-xs text-surface-dark-foreground/40">
              © {new Date().getFullYear()} DB Foods & Beverages. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-accent">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "About Us", path: "/about" },
                { label: "Our Products", path: "/products" },
                { label: "Quality Control", path: "/quality" },
                { label: "Distribution", path: "/distribution" },
                { label: "Private Label", path: "/private-label" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-surface-dark-foreground/60 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-accent">Solutions</h4>
            <div className="flex flex-col gap-2 text-sm text-surface-dark-foreground/60">
              <span>Carbonated Soft Drinks</span>
              <span>Cola Beverages</span>
              <span>Flavored Drinks</span>
              <span>Energy Beverages</span>
              <span>Private Label Manufacturing</span>
              <span>Syrup Formulation</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-accent">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:info@dbfoodsandbeverages.com" className="flex items-center gap-2 text-sm text-surface-dark-foreground/60 hover:text-primary transition-colors">
                <Mail size={16} />
                info@dbfoodsandbeverages.com
              </a>
              <a href="tel:+923001234567" className="flex items-center gap-2 text-sm text-surface-dark-foreground/60 hover:text-primary transition-colors">
                <Phone size={16} />
                +92 300 123 4567
              </a>
              <div className="flex items-start gap-2 text-sm text-surface-dark-foreground/60">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Industrial Area, Lahore, Punjab, Pakistan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
