import { useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiry: "distribution",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your inquiry! Our team will contact you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", company: "", inquiry: "distribution", message: "" });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 md:py-40 section-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_hsl(var(--primary)/0.15),_transparent_60%)]" />
        <div className="relative container-wide">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 bg-primary/20 border border-primary/30 rounded-full text-primary text-xs font-semibold uppercase tracking-wider mb-6">
              Contact Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-surface-dark-foreground mb-6 max-w-3xl leading-[1.1]">
              Let's <span className="text-primary">Grow Together</span>
            </h1>
            <p className="text-lg text-surface-dark-foreground/70 max-w-2xl leading-relaxed">
              Whether you're a distributor, retailer, startup, or export client — we'd love to hear from you. Our business development team is ready to explore partnership opportunities.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 md:py-28 section-light">
        <div className="container-wide grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <ScrollReveal className="lg:col-span-3" direction="left">
            <div className="bg-card rounded-xl border border-border p-8 md:p-10 premium-shadow">
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">Send Us an Inquiry</h2>
              <p className="text-sm text-muted-foreground mb-8">Fill out the form below and our team will respond within 24 business hours.</p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Business Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="+92 300 000 0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Company Name</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Your company"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Inquiry Type *</label>
                  <select
                    value={formData.inquiry}
                    onChange={(e) => setFormData({...formData, inquiry: e.target.value})}
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="distribution">Distributor Partnership</option>
                    <option value="private-label">Private Label / Contract Manufacturing</option>
                    <option value="retail">Retail Supply</option>
                    <option value="export">Export Inquiry</option>
                    <option value="institutional">Institutional / Bulk Supply</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all cta-glow text-sm"
                >
                  Send Inquiry <Send size={16} />
                </button>
              </form>
            </div>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal className="lg:col-span-2" direction="right">
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">Get in Touch</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Our business development team is available to discuss distribution opportunities, private label manufacturing, and custom beverage solutions.
                </p>
              </div>

              <div className="space-y-4">
                <a href="mailto:info@dbfoodsandbeverages.com" className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover-lift group">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-all">
                    <Mail size={18} className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-medium text-foreground">info@dbfoodsandbeverages.com</p>
                  </div>
                </a>
                <a href="tel:+923001234567" className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover-lift group">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-all">
                    <Phone size={18} className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="text-sm font-medium text-foreground">+92 300 123 4567</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Address</p>
                    <p className="text-sm font-medium text-foreground">Industrial Area, Lahore, Punjab, Pakistan</p>
                  </div>
                </div>
              </div>

              {/* Quick CTAs */}
              <div className="space-y-3 pt-4">
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-5">
                  <h4 className="font-display font-bold text-foreground mb-1 text-sm">For Distributors</h4>
                  <p className="text-xs text-muted-foreground mb-3">Interested in distributing our beverages? Let's discuss territory and margins.</p>
                  <span className="text-primary text-xs font-semibold flex items-center gap-1">
                    Select "Distributor Partnership" above <ArrowRight size={12} />
                  </span>
                </div>
                <div className="bg-accent/5 border border-accent/20 rounded-lg p-5">
                  <h4 className="font-display font-bold text-foreground mb-1 text-sm">For Private Label</h4>
                  <p className="text-xs text-muted-foreground mb-3">Want to launch your own brand? We provide end-to-end manufacturing support.</p>
                  <span className="text-accent text-xs font-semibold flex items-center gap-1">
                    Select "Private Label" above <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Contact;
