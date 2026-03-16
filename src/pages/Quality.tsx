import { Droplets, FlaskConical, Gauge, Wind, ShieldCheck, Calendar, RotateCcw, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import qualityImg from "@/assets/quality-lab.jpg";

const steps = [
  {
    icon: Droplets,
    title: "Raw Water Testing & Treatment",
    desc: "Every production cycle begins with comprehensive water testing. Our advanced treatment systems remove impurities and ensure the water meets strict purity standards before it enters the production line.",
    step: "01",
  },
  {
    icon: FlaskConical,
    title: "Controlled Syrup Preparation",
    desc: "Our syrups are prepared in controlled, hygienic environments with precise ingredient measurements. Temperature, mixing speed, and preparation time are all monitored to ensure consistency.",
    step: "02",
  },
  {
    icon: Gauge,
    title: "Accurate Brix Level Management",
    desc: "We use precision instruments to monitor and maintain exact Brix levels — the measurement of sugar content in our beverages. This ensures every batch delivers the same balanced sweetness consumers expect.",
    step: "03",
  },
  {
    icon: Wind,
    title: "Balanced Carbonation Pressure",
    desc: "Carbonation is both an art and a science. Our systems maintain precise CO₂ pressure levels to deliver the perfect fizz — strong enough to be refreshing, balanced enough for smooth drinking.",
    step: "04",
  },
  {
    icon: ShieldCheck,
    title: "Hygienic Bottling & Sealing",
    desc: "Our automated bottling lines operate in controlled environments with strict hygiene protocols. Every bottle is sealed to pharmaceutical-grade standards to maintain freshness and safety.",
    step: "05",
  },
  {
    icon: Calendar,
    title: "Date-Wise Production Tracking",
    desc: "Every production batch is logged with complete date-wise tracking. This allows us to monitor shelf life, optimize distribution timing, and maintain complete production visibility.",
    step: "06",
  },
  {
    icon: RotateCcw,
    title: "Recall & Traceability System",
    desc: "Our comprehensive traceability system can track any bottle back to its exact production batch, raw materials, and quality test results — enabling rapid response if any issue is ever identified.",
    step: "07",
  },
];

const Quality = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 md:py-40 section-dark overflow-hidden">
        <div className="absolute inset-0">
          <img src={qualityImg} alt="Quality control laboratory at DB Foods & Beverages" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/90 to-surface-dark/70" />
        </div>
        <div className="relative container-wide">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 bg-primary/20 border border-primary/30 rounded-full text-primary text-xs font-semibold uppercase tracking-wider mb-6">
              Quality Assurance
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-surface-dark-foreground mb-6 max-w-3xl leading-[1.1]">
              Quality Is Not Checked at the End — <span className="text-primary">It Is Built Into Every Step</span>
            </h1>
            <p className="text-lg text-surface-dark-foreground/70 max-w-2xl leading-relaxed">
              At DB Foods & Beverages, quality assurance is not a final checkpoint — it is an integrated process that runs through every stage of production, from raw materials to finished products.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* QC Steps */}
      <section className="py-20 md:py-28 section-light">
        <div className="container-wide">
          <SectionHeading
            badge="Our Process"
            title="7-Stage Quality Control Process"
            subtitle="Every beverage that carries the DB Foods & Beverages name passes through our rigorous multi-stage quality assurance system."
          />
          <div className="space-y-6">
            {steps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.06}>
                <div className="bg-card rounded-xl border border-border p-6 md:p-8 hover-lift group">
                  <div className="flex items-start gap-6">
                    <div className="hidden sm:flex flex-col items-center shrink-0">
                      <span className="font-display font-bold text-2xl text-primary/30 group-hover:text-primary transition-colors">
                        {step.step}
                      </span>
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary transition-all">
                      <step.icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <SectionHeading
              badge="Our Commitment"
              title="World-Class Standards, Every Single Bottle"
              subtitle="Our quality control infrastructure is designed to match international beverage manufacturing standards. We invest continuously in technology, training, and process improvement."
            />
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all cta-glow text-sm">
              Partner With Us <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default Quality;
