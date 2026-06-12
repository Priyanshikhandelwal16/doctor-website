"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useGSAPReveal(selector: string, deps: unknown[] = []) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const elements = ref.current.querySelectorAll(selector);
    gsap.set(elements, { opacity: 0, y: 40 });

    elements.forEach((el, i) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: i * 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}

export function useHeroAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", { opacity: 0, y: 60, duration: 1, ease: "power3.out", delay: 0.2 });
      gsap.from(".hero-subtitle", { opacity: 0, y: 40, duration: 0.8, ease: "power3.out", delay: 0.5 });
      gsap.from(".hero-cta", { opacity: 0, y: 30, duration: 0.6, ease: "power3.out", delay: 0.8 });
      gsap.from(".hero-image", { opacity: 0, scale: 0.95, duration: 1.2, ease: "power3.out", delay: 0.3 });
      gsap.from(".hero-badge", { opacity: 0, x: -20, duration: 0.5, stagger: 0.1, delay: 1 });
    }, ref);
    return () => ctx.revert();
  }, []);

  return ref;
}

export function useParallax(speed = 0.3) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const tween = gsap.to(el, {
      y: () => speed * 100,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
    return () => {
      tween.kill();
    };
  }, [speed]);

  return ref;
}

export function useCounterAnimation(endValue: number, suffix = "") {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const obj = { val: 0 };
    gsap.to(obj, {
      val: endValue,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        if (ref.current) {
          ref.current.textContent = Math.round(obj.val).toLocaleString() + suffix;
        }
      },
    });
  }, [endValue, suffix]);

  return ref;
}
