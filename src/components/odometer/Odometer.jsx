import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export const Odometer = ({ end, suffix, prefix, className = "odometer" }) => {
  const { ref, inView, entry } = useInView({ threshold: 0, triggerOnce: true });

  return (
    <span ref={ref} className={className}>
      <CountUp
        end={!inView ? 0 : end}
        suffix={suffix}
        prefix={prefix}
        separator=""
      />
    </span>
  );
};
