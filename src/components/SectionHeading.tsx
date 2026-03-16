import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({ badge, title, subtitle, centered = true, light = false }: SectionHeadingProps) => {
  return (
    <ScrollReveal className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      {badge && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${
          light
            ? "bg-primary-foreground/10 text-primary-foreground/80"
            : "bg-primary/10 text-primary"
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
        light ? "text-primary-foreground" : "text-foreground"
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-2xl text-lg ${centered ? "mx-auto" : ""} ${
          light ? "text-primary-foreground/70" : "text-muted-foreground"
        }`}>
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
};

export default SectionHeading;
