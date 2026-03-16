import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Zap, FlaskConical, Package, Beaker, Citrus, GlassWater, Factory } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import productsImg from "@/assets/products-lineup.jpg";

const products = [
  {
    icon: Droplets,
    title: "Cola Beverages",
    desc: "Our flagship cola range delivers bold, refreshing taste with perfect carbonation retention. Crafted using premium ingredients and precise Brix level management for a consistent, world-class cola experience.",
    keywords: "cola drink manufacturer Pakistan",
  },
  {
    icon: Citrus,
    title: "Orange Drinks",
    desc: "Vibrant, citrus-forward orange beverages with authentic fruit character. Our orange drinks combine refreshing carbonation with balanced sweetness — perfect for the Pakistani market and beyond.",
    keywords: "soft drink manufacturer Pakistan",
  },
  {
    icon: GlassWater,
    title: "Lemon-Lime Drinks",
    desc: "Crisp, clean, and intensely refreshing. Our lemon-lime beverages are formulated for maximum refreshment with a zesty flavor profile that appeals to all age groups.",
    keywords: "carbonated beverage manufacturer",
  },
  {
    icon: Zap,
    title: "Energy-Style Beverages",
    desc: "High-energy, high-impact beverages designed for the active lifestyle market. Our energy drinks are formulated with carefully balanced ingredients for sustained energy and bold flavor.",
    keywords: "beverage manufacturer Pakistan",
  },
  {
    icon: Beaker,
    title: "Flavored Beverages",
    desc: "An extensive range of fruit-flavored carbonated drinks — from tropical blends to berry mixes. Every flavor is developed through rigorous R&D and consumer testing for maximum market appeal.",
    keywords: "custom beverage production",
  },
  {
    icon: FlaskConical,
    title: "Syrup Formulation & Bulk Supply",
    desc: "Custom syrup development and bulk supply services for institutional buyers, restaurants, and beverage chains. We provide precise formulations with consistent quality batch after batch.",
    keywords: "syrup formulation supplier",
  },
  {
    icon: Package,
    title: "Private Label Solutions",
    desc: "Launch your own beverage brand with our complete private label manufacturing. From concept and formulation to bottling and packaging — we handle everything so you can focus on building your brand.",
    keywords: "private label beverage manufacturer",
  },
  {
    icon: Factory,
    title: "Contract Manufacturing",
    desc: "Flexible contract manufacturing services for established brands looking for reliable production capacity. Our facility handles high-volume production with stringent quality controls.",
    keywords: "contract beverage manufacturing Pakistan",
  },
];

const Products = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 md:py-40 section-dark overflow-hidden">
        <div className="absolute inset-0">
          <img src={productsImg} alt="DB Foods & Beverages complete product range" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/90 to-surface-dark/70" />
        </div>
        <div className="relative container-wide">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 bg-primary/20 border border-primary/30 rounded-full text-primary text-xs font-semibold uppercase tracking-wider mb-6">
              Our Products
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-surface-dark-foreground mb-6 max-w-3xl leading-[1.1]">
              Premium Beverages for <span className="text-primary">Every Market</span>
            </h1>
            <p className="text-lg text-surface-dark-foreground/70 max-w-2xl leading-relaxed">
              From classic colas to custom formulations, DB Foods & Beverages manufactures a complete range of high-quality carbonated and flavored beverages designed for the modern consumer.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 md:py-28 section-light">
        <div className="container-wide">
          <SectionHeading
            badge="Product Range"
            title="Our Complete Beverage Portfolio"
            subtitle="Every product is manufactured with premium ingredients, rigorous quality control, and a commitment to refreshing taste."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, i) => (
              <ScrollReveal key={product.title} delay={i * 0.08}>
                <div className="bg-card rounded-xl border border-border p-8 hover-lift group h-full">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-all">
                      <product.icon size={26} className="text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground mb-2">{product.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{product.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 md:py-28 section-dark">
        <div className="container-wide">
          <SectionHeading
            badge="Product Excellence"
            title="What Makes Our Beverages Stand Out"
            light
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Consistent Taste Profile",
              "Strong Carbonation Retention",
              "Premium Ingredients",
              "Attractive Packaging",
              "Competitive Pricing",
              "Flexible Packaging Sizes",
            ].map((item, i) => (
              <ScrollReveal key={item} delay={i * 0.08}>
                <div className="glass-card p-6 text-center">
                  <h3 className="font-display font-semibold text-surface-dark-foreground">{item}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Need a Custom Beverage Solution?"
        subtitle="Whether you need private label manufacturing, custom formulations, or bulk supply — our team is ready to bring your vision to life."
        primaryCta="Request Quote"
        secondaryCta="Contact Our Team"
      />
    </>
  );
};

export default Products;
