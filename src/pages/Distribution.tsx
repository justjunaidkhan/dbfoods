import { Link } from "react-router-dom";
import { ArrowRight, Truck, Store, MapPin, Megaphone, DollarSign, Shield, Handshake, TrendingUp } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import distributionImg from "@/assets/distribution.jpg";

const Distribution = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 md:py-40 section-dark overflow-hidden">
        <div className="absolute inset-0">
          <img src={distributionImg} alt="DB Foods & Beverages distribution and logistics network" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/90 to-surface-dark/70" />
        </div>
        <div className="relative container-wide">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 bg-primary/20 border border-primary/30 rounded-full text-primary text-xs font-semibold uppercase tracking-wider mb-6">
              Distribution & Partnerships
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-surface-dark-foreground mb-6 max-w-3xl leading-[1.1]">
              Building a Powerful <span className="text-primary">Distribution Network</span> Across Pakistan
            </h1>
            <p className="text-lg text-surface-dark-foreground/70 max-w-2xl leading-relaxed">
              Our distribution model is built on partnership, not just transactions. We invest in our distributors' success with competitive margins, market protection, and promotional support.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20 md:py-28 section-light">
        <div className="container-wide">
          <SectionHeading
            badge="Partner Benefits"
            title="Why Distributors Choose DB Foods & Beverages"
            subtitle="We believe in growing together. Our distributor partnerships are designed for long-term, mutual success."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: DollarSign, title: "Clear Margins", desc: "Transparent, competitive pricing structure that ensures healthy profit margins for all distribution partners." },
              { icon: Shield, title: "Market Protection", desc: "Defined territory rights and market protection policies that safeguard your investment and growth." },
              { icon: Megaphone, title: "Marketing Support", desc: "Promotional campaigns, POS materials, and market activation support to drive consumer demand." },
              { icon: Truck, title: "Reliable Supply", desc: "Consistent production capacity and efficient logistics ensure your orders are fulfilled on time, every time." },
              { icon: Store, title: "Retail Partnerships", desc: "Strong relationships with retail chains and convenience stores that benefit the entire supply chain." },
              { icon: MapPin, title: "Regional Coverage", desc: "Strategic distribution network covering major cities and growing into underserved markets across Pakistan." },
              { icon: Handshake, title: "Partnership Mindset", desc: "Dedicated account management and regular business reviews focused on mutual growth and market development." },
              { icon: TrendingUp, title: "Growth Opportunity", desc: "A growing product portfolio and expanding market presence means increasing revenue opportunities for partners." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="bg-card rounded-xl border border-border p-6 hover-lift group h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-all">
                    <item.icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 section-dark">
        <div className="container-wide">
          <SectionHeading
            badge="Process"
            title="How Our Distribution Partnership Works"
            light
          />
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Apply", desc: "Submit your distributor inquiry through our website or contact our business development team directly." },
              { step: "02", title: "Evaluate", desc: "We assess market potential, territory availability, and alignment to ensure a strong partnership fit." },
              { step: "03", title: "Onboard", desc: "Comprehensive onboarding with product training, marketing materials, and territory mapping." },
              { step: "04", title: "Grow", desc: "Ongoing support with promotional campaigns, business reviews, and product expansion to maximize your growth." },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 0.1}>
                <div className="glass-card p-6 text-center h-full">
                  <span className="font-display text-3xl font-bold text-primary/40 mb-3 block">{item.step}</span>
                  <h3 className="font-display font-bold text-surface-dark-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-surface-dark-foreground/60 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Become a Distribution Partner"
        subtitle="Join Pakistan's fastest-growing beverage network. Competitive margins, dedicated support, and a partnership built on trust."
        primaryCta="Apply Now"
      />
    </>
  );
};

export default Distribution;
