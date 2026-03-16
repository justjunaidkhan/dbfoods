import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Factory, Truck, Beaker, Award, Users, Zap, Globe, ChevronRight, Droplets, FlaskConical, BarChart3, Package } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import CTABanner from "@/components/CTABanner";
import heroImg from "@/assets/hero-beverages.jpg";
import factoryImg from "@/assets/factory-line.jpg";
import productsImg from "@/assets/products-lineup.jpg";
import qualityImg from "@/assets/quality-lab.jpg";

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Premium carbonated beverages by DB Foods & Beverages" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-dark/95 via-surface-dark/80 to-surface-dark/40" />
        </div>
        <div className="relative container-wide py-32 md:py-40">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/20 border border-primary/30 rounded-full text-primary text-xs font-semibold uppercase tracking-wider mb-6">
              Pakistan's Trusted Beverage Manufacturer
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-surface-dark-foreground mb-6 leading-[1.1]">
              Refreshing Taste.{" "}
              <span className="text-primary">Trusted Quality.</span>{" "}
              Growing Together.
            </h1>
            <p className="text-lg md:text-xl text-surface-dark-foreground/70 mb-8 max-w-xl leading-relaxed">
              We manufacture premium carbonated beverages, cola drinks, and custom formulations — powering brands across Pakistan and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all cta-glow text-sm"
              >
                Become a Distributor
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-surface-dark-foreground/20 text-surface-dark-foreground rounded-lg font-semibold hover:bg-surface-dark-foreground/5 transition-all text-sm"
              >
                Explore Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container-wide grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter target={500} suffix="+" label="Distribution Points" />
          <AnimatedCounter target={12} suffix="+" label="Product Lines" />
          <AnimatedCounter target={50} suffix="M+" label="Bottles Produced" />
          <AnimatedCounter target={99} suffix="%" label="Quality Score" />
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 md:py-28 section-light">
        <div className="container-wide grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <img src={factoryImg} alt="DB Foods & Beverages manufacturing facility" className="rounded-xl premium-shadow w-full" />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-display font-bold text-sm">
                State-of-the-Art Facility
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              Who We Are
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              We Don't Just Produce Beverages — We Build Brands
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              DB Foods & Beverages is a Pakistan-based beverage manufacturing company specializing in high-quality carbonated soft drinks, cola beverages, flavored drinks, and custom private label solutions. With state-of-the-art production facilities and rigorous quality control, we deliver refreshing beverages that meet international standards.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                "Premium Formulations",
                "ISO-Grade Processes",
                "Scalable Production",
                "National Distribution",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-foreground font-medium">
                  <ChevronRight size={14} className="text-primary" />
                  {item}
                </div>
              ))}
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
              Learn More About Us <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* What We Manufacture */}
      <section className="py-20 md:py-28 section-dark">
        <div className="container-wide">
          <SectionHeading
            badge="Our Products"
            title="What We Manufacture"
            subtitle="From classic colas to custom formulations, we produce a complete range of beverages for every market segment."
            light
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Droplets, title: "Cola Beverages", desc: "Bold, refreshing cola drinks with strong carbonation and consistent flavor profile." },
              { icon: Beaker, title: "Flavored Drinks", desc: "Orange, lemon-lime, and specialty flavors crafted with premium ingredients." },
              { icon: Zap, title: "Energy Beverages", desc: "High-performance energy drinks for the active lifestyle market." },
              { icon: FlaskConical, title: "Syrup & Bulk Supply", desc: "Custom syrup formulations and bulk supply for institutional buyers." },
              { icon: Package, title: "Private Label", desc: "Complete white-label solutions from formulation to packaging." },
              { icon: Factory, title: "Contract Manufacturing", desc: "Flexible production capacity for brands of all sizes." },
              { icon: BarChart3, title: "Custom Solutions", desc: "Bespoke beverage development tailored to your market needs." },
              { icon: Globe, title: "Export Ready", desc: "International-grade products ready for global markets." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="glass-card p-6 h-full hover:bg-surface-dark-foreground/5 transition-all hover-lift group">
                  <item.icon size={28} className="text-accent mb-4 group-hover:text-primary transition-colors" />
                  <h3 className="font-display font-semibold text-surface-dark-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-surface-dark-foreground/60 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all text-sm">
              View All Products <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 section-light">
        <div className="container-wide">
          <SectionHeading
            badge="Why DB Foods"
            title="Why Choose DB Foods & Beverages"
            subtitle="We are not just manufacturers — we are beverage growth partners committed to your success."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Uncompromising Quality", desc: "Quality is not checked at the end — it is built into every step of our production process." },
              { icon: Factory, title: "Modern Manufacturing", desc: "State-of-the-art bottling lines with automated quality monitoring and precise carbonation control." },
              { icon: Truck, title: "Reliable Distribution", desc: "Extensive distribution network ensuring timely delivery across Pakistan with market protection for partners." },
              { icon: Award, title: "Competitive Pricing", desc: "Premium quality at competitive prices, ensuring healthy margins for distributors and retailers." },
              { icon: Users, title: "Partner Growth", desc: "We help our partners grow — because when they grow, we grow. Dedicated support for every partner." },
              { icon: Globe, title: "Scalable Capacity", desc: "Flexible production capacity ready to scale with your demand, from local to international markets." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="glass-card-light p-8 h-full hover-lift group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <item.icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Preview */}
      <section className="py-20 md:py-28 section-dark">
        <div className="container-wide grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <SectionHeading
              badge="Quality Control"
              title="Quality Built Into Every Step"
              subtitle="From raw water testing to final packaging, our multi-stage quality assurance ensures every bottle meets the highest standards."
              centered={false}
              light
            />
            <div className="space-y-4">
              {[
                "Raw water testing & advanced treatment",
                "Controlled syrup preparation",
                "Accurate Brix level management",
                "Balanced carbonation pressure",
                "Hygienic bottling & sealing",
                "Full traceability & recall system",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full shrink-0" />
                  <span className="text-sm text-surface-dark-foreground/80">{item}</span>
                </div>
              ))}
            </div>
            <Link to="/quality" className="mt-6 inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all">
              Explore Our Quality Process <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <img src={qualityImg} alt="Quality control laboratory at DB Foods & Beverages" className="rounded-xl premium-shadow-dark w-full" />
          </ScrollReveal>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 md:py-28 section-light">
        <div className="container-wide grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <img src={productsImg} alt="DB Foods & Beverages product lineup - cola, orange, lemon-lime, flavored drinks" className="rounded-xl premium-shadow w-full" />
          </ScrollReveal>
          <ScrollReveal direction="right">
            <SectionHeading
              badge="Private Label"
              title="Your Brand, Our Manufacturing Excellence"
              subtitle="Launch your own beverage brand with our complete private label and contract manufacturing solutions. From formula development to packaging design support."
              centered={false}
            />
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                "Custom Formulation",
                "Packaging Support",
                "Low MOQ Options",
                "Export Compliance",
                "Brand Development",
                "Quality Certification",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <ChevronRight size={14} className="text-primary" />
                  {item}
                </div>
              ))}
            </div>
            <Link to="/private-label" className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all text-sm cta-glow">
              Request Private Label Quote <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container-wide">
          <SectionHeading
            badge="Who We Serve"
            title="Industries & Buyers We Serve"
            subtitle="DB Foods & Beverages partners with businesses across the beverage supply chain."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Distributors", desc: "Regional and national distribution partnerships with attractive margins and market protection." },
              { title: "Retailers", desc: "Direct supply for retail chains, supermarkets, and convenience stores across Pakistan." },
              { title: "Startups & Brands", desc: "Private label and custom beverage solutions for emerging brands and entrepreneurs." },
              { title: "Export Clients", desc: "International-grade products with export compliance for global market entry." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="bg-card rounded-xl p-8 hover-lift premium-shadow h-full">
                  <h3 className="font-display font-bold text-lg text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  <Link to="/contact" className="mt-4 inline-flex items-center gap-1 text-primary text-sm font-semibold hover:gap-2 transition-all">
                    Inquire Now <ArrowRight size={14} />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 section-light">
        <div className="container-narrow">
          <SectionHeading
            badge="FAQ"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about partnering with DB Foods & Beverages."
          />
          <div className="space-y-4">
            {[
              { q: "What types of beverages does DB Foods & Beverages manufacture?", a: "We manufacture a complete range including cola drinks, orange beverages, lemon-lime drinks, energy-style beverages, flavored carbonated drinks, and custom formulations. We also provide syrup formulation and bulk supply services." },
              { q: "Do you offer private label or contract manufacturing?", a: "Yes, private label and contract manufacturing is one of our core services. We offer end-to-end solutions from formula development to packaging design support, with flexible minimum order quantities suitable for startups and established brands alike." },
              { q: "What quality standards do you follow?", a: "We implement rigorous multi-stage quality control including raw water testing, controlled syrup preparation, Brix level management, balanced carbonation pressure, hygienic bottling and sealing, and full date-wise traceability with recall capabilities." },
              { q: "How can I become a distributor?", a: "Contact us through our distributor inquiry form or email us directly. We offer competitive margins, market protection, promotional support, and a long-term partnership approach to help distributors succeed in their regions." },
              { q: "Do you supply for export markets?", a: "Yes, our products meet international quality standards and we are equipped to handle export orders with proper compliance documentation, packaging for international shipping, and competitive pricing for bulk orders." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <details className="group bg-card rounded-xl border border-border p-6 cursor-pointer">
                  <summary className="font-display font-semibold text-foreground flex items-center justify-between list-none">
                    {item.q}
                    <ChevronRight size={18} className="text-muted-foreground group-open:rotate-90 transition-transform" />
                  </summary>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
};

export default Index;
