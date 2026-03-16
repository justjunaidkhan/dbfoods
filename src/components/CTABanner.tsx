import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import { ArrowRight } from "lucide-react";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  primaryCta?: string;
  primaryLink?: string;
  secondaryCta?: string;
  secondaryLink?: string;
}

const CTABanner = ({
  title = "Ready to Grow With Us?",
  subtitle = "Whether you're a distributor, retailer, or startup looking for private label solutions — we're here to help you succeed.",
  primaryCta = "Become a Distributor",
  primaryLink = "/contact",
  secondaryCta = "Request Private Label Quote",
  secondaryLink = "/private-label",
}: CTABannerProps) => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-surface-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--accent)/0.2),_transparent_60%)]" />
      <div className="relative container-wide text-center">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            {title}
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={primaryLink}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground text-primary rounded-lg font-semibold hover:bg-primary-foreground/90 transition-all hover-lift text-sm"
            >
              {primaryCta}
              <ArrowRight size={18} />
            </Link>
            <Link
              to={secondaryLink}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/10 transition-all text-sm"
            >
              {secondaryCta}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTABanner;
