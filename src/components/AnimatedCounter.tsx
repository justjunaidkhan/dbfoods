import { useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
}

const AnimatedCounter = ({ target, suffix = "", prefix = "", duration = 2, label }: AnimatedCounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v));

  useEffect(() => {
    if (isInView) {
      animate(count, target, { duration });
    }
  }, [isInView, target, duration, count]);

  return (
    <motion.div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
        {prefix}
        <motion.span>{rounded}</motion.span>
        {suffix}
      </div>
      <p className="text-muted-foreground font-medium text-sm uppercase tracking-wider">{label}</p>
    </motion.div>
  );
};

export default AnimatedCounter;
