"use client";

import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FadeUp({
  children,
}: {
  children: React.ReactNode;
}) {

  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 80,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
        },
      } );

  }, []);

  return <div ref={ref}>{children}</div>;
}