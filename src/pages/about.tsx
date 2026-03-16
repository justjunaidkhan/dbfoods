import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Award, TrendingUp, Users, Shield, Lightbulb, Factory } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import factoryImg from "@/assets/factory-line.jpg";

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 md:py-40 section-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(var(--primary)/0.15),_transparent_60%)]" />
        <div className="relative container-wide">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 bg-primary/20 border border-primary/30 rounded-full text-primary text-xs font-semibold uppercase tracking-wider mb-6">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-surface-dark-foreground mb-6 max-w-3xl leading-[1.1]">
              We Don't Just Produce Beverages — <span className="text-primary">We Build Brands</span>
            </h1>
            <p className="text-lg text-surface-dark-foreground/70 max-w-2xl leading-relaxed">
              DB Foods & Beverages is a modern food and beverage manufacturing company based in Pakistan, dedicated to producing premium-quality, refreshing, and affordable beverages for a growing market.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 md:py-28 section-light">
        <div className="container-wide grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <img src={factoryImg} alt="DB Foods & Beverages state-of-the-art manufacturing plant" className="rounded-xl premium-shadow w-full" />
          </ScrollReveal>
          <ScrollReveal direction="right">
            <SectionHeading badge="Our Story" title="Who We Are" centered={false} />
            <p className="text-muted-foreground leading-relaxed mb-4">
              DB Foods & Beverages was founded with a clear vision: to become Pakistan's most trusted beverage manufacturing partner. We combine cutting-edge production technology with deep market expertise to create beverages that consumers love and businesses trust.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our state-of-the-art facility is equipped with automated bottling lines, advanced water treatment systems, and precision quality control instruments. Every bottle that leaves our factory represents our commitment to excellence — from the purity of our water to the precision of our carbonation.
            </p>
            <p className="text-foreground font-semibold italic border-l-4 border-primary pl-4">
              "We help our partners grow — because when they grow, we grow."
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 section-dark">
        <div className="container-wide grid md:grid-cols-2 gap-8">
          <ScrollReveal direction="left">
            <div className="glass-card p-10 h-full">
              <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                <Target size={28} className="text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold text-surface-dark-foreground mb-4">Our Mission</h2>
              <p className="text-surface-dark-foreground/70 leading-relaxed">
                To manufacture and deliver premium-quality beverages that refresh, energize, and delight consumers — while building strong, profitable partnerships with distributors, retailers, and brands across Pakistan and international markets. We are committed to innovation, quality, and sustainable growth in every bottle we produce.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="glass-card p-10 h-full">
              <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                <Eye size={28} className="text-accent" />
              </div>
              <h2 className="font-display text-2xl font-bold text-surface-dark-foreground mb-4">Our Vision</h2>
              <p className="text-surface-dark-foreground/70 leading-relaxed">
                To be recognized as Pakistan's leading beverage manufacturing company — known for uncompromising quality, market-driven innovation, and a partnership approach that empowers brands and businesses to succeed. We envision our beverages reaching every corner of Pakistan and establishing a strong presence in international markets.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Company Strengths */}
      <section className="py-20 md:py-28 section-light">
        <div className="container-wide">
          <SectionHeading
            badge="Our Strengths"
            title="What Makes Us Different"
            subtitle="DB Foods & Beverages combines manufacturing excellence with a genuine partnership mindset."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Factory, title: "Advanced Manufacturing", desc: "Modern automated production lines with precision carbonation and filling systems." },
              { icon: Shield, title: "Quality Obsessed", desc: "Multi-stage quality control from raw materials to final packaging ensures consistency." },
              { icon: TrendingUp, title: "Market Innovation", desc: "Continuously developing new flavors and formats driven by market trends and consumer insights." },
              { icon: Users, title: "Partner First", desc: "We invest in our partners' success with marketing support, fair margins, and dedicated account management." },
              { icon: Award, title: "Consistent Excellence", desc: "Standardized processes deliver the same premium taste in every single bottle." },
              { icon: Lightbulb, title: "Custom Solutions", desc: "Flexible R&D team capable of developing unique formulations for private label clients." },
              { icon: Target, title: "Competitive Pricing", desc: "Efficient operations allow us to offer premium quality at market-competitive prices." },
              { icon: Eye, title: "Transparent Operations", desc: "Open communication and transparent practices build trust with all our business partners." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="bg-card rounded-xl p-6 border border-border h-full hover-lift group">
                  <item.icon size={24} className="text-primary mb-4 group-hover:text-accent transition-colors" />
                  <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Message */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <blockquote className="font-display text-2xl md:text-4xl font-bold text-foreground leading-snug mb-6">
              "We are not just manufacturers — we are{" "}
              <span className="text-primary">beverage growth partners.</span>"
            </blockquote>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Every decision we make is guided by a simple principle: create the best beverages, deliver them reliably, and help every partner succeed.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default About;
