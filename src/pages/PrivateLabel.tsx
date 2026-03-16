import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, FlaskConical, Package, Truck, CheckCircle, Rocket, Globe, Building } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import privateLabelImg from "@/assets/private-label.jpg";

const PrivateLabel = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 md:py-40 section-dark overflow-hidden">
        <div className="absolute inset-0">
          <img src={privateLabelImg} alt="Private label beverage manufacturing by DB Foods & Beverages" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/90 to-surface-dark/70" />
        </div>
        <div className="relative container-wide">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 bg-accent/20 border border-accent/30 rounded-full text-accent text-xs font-semibold uppercase tracking-wider mb-6">
              Private Label & Contract Manufacturing
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-surface-dark-foreground mb-6 max-w-3xl leading-[1.1]">
              Your Brand, Our <span className="text-accent">Manufacturing Excellence</span>
            </h1>
            <p className="text-lg text-surface-dark-foreground/70 max-w-2xl leading-relaxed">
              Launch your own beverage brand with Pakistan's trusted private label manufacturer. From formula development to finished product — we handle everything.
            </p>
            <div className="mt-8">
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all text-sm">
                Request Private Label Quote <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 md:py-28 section-light">
        <div className="container-wide">
          <SectionHeading
            badge="Who We Serve"
            title="Private Label Solutions for Every Business"
            subtitle="Whether you're a startup, regional brand, or export client — we have the capability and flexibility to bring your beverage vision to life."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Rocket, title: "Startups", desc: "Launch your beverage brand without the capital investment of building a factory. Low MOQ options and full production support." },
              { icon: Building, title: "Regional Brands", desc: "Expand your product range or increase production capacity with our reliable contract manufacturing services." },
              { icon: Globe, title: "Export Clients", desc: "International-grade products with export compliance documentation and packaging designed for global markets." },
              { icon: Package, title: "Institutional Supply", desc: "Bulk supply solutions for restaurants, hotels, airlines, and institutional buyers with consistent quality." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="bg-card rounded-xl border border-border p-8 hover-lift group h-full">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent transition-all">
                    <item.icon size={22} className="text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 section-dark">
        <div className="container-wide">
          <SectionHeading
            badge="Our Process"
            title="From Concept to Shelf — We Handle Everything"
            light
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Lightbulb, step: "01", title: "Concept & Consultation", desc: "Share your vision and target market. Our team works with you to define flavor profiles, positioning, and product specifications." },
              { icon: FlaskConical, step: "02", title: "Formulation & R&D", desc: "Our R&D team develops custom formulations, conducts taste tests, and refines the recipe until it perfectly matches your requirements." },
              { icon: Package, step: "03", title: "Packaging & Design Support", desc: "We provide guidance on bottle sizes, label design, and packaging options. Our team ensures your product looks as premium as it tastes." },
              { icon: Truck, step: "04", title: "Production & Delivery", desc: "Full-scale production on our automated lines with rigorous quality control. Finished products are delivered to your specified locations." },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 0.1}>
                <div className="glass-card p-8 h-full">
                  <span className="font-display text-4xl font-bold text-accent/30 block mb-4">{item.step}</span>
                  <item.icon size={28} className="text-accent mb-3" />
                  <h3 className="font-display font-bold text-surface-dark-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-surface-dark-foreground/60 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 md:py-28 section-light">
        <div className="container-wide">
          <SectionHeading
            badge="Why Choose Us"
            title="The DB Foods Private Label Advantage"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Custom Formula Development",
              "Flexible Minimum Order Quantities",
              "Packaging Design Guidance",
              "Rigorous Quality Control",
              "Export-Ready Compliance",
              "Fast Turnaround Times",
              "Competitive Manufacturing Costs",
              "Complete Confidentiality",
              "Dedicated Account Manager",
            ].map((item, i) => (
              <ScrollReveal key={item} delay={i * 0.06}>
                <div className="flex items-center gap-3 bg-card rounded-lg border border-border p-4 hover-lift">
                  <CheckCircle size={20} className="text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Launch Your Beverage Brand?"
        subtitle="Get in touch today for a free consultation and quote. Our team will guide you through every step of the private label process."
        primaryCta="Request Private Label Quote"
        primaryLink="/contact"
        secondaryCta="View Our Products"
        secondaryLink="/products"
      />
    </>
  );
};

export default PrivateLabel;
