"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation, Variant } from "motion/react";

interface AnimatedContentProps {
  children: React.ReactNode;
  distance?: number;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  duration?: number;
  delay?: number;
  threshold?: number;
}

export const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  distance = 60,
  direction = "vertical",
  reverse = false,
  duration = 0.6,
  delay = 0,
  threshold = 0.15,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const xValue = direction === "horizontal" ? (reverse ? -distance : distance) : 0;
  const yValue = direction === "vertical" ? (reverse ? -distance : distance) : 0;

  const variants = {
    hidden: { 
      opacity: 0, 
      x: xValue, 
      y: yValue 
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};
