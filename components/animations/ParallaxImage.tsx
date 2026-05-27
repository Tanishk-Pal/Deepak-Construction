"use client";

import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxImage({
  src,
  className,
}: {
  src: string;
  className?: string;
}) { const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {

    gsap.to(imageRef.current, {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: imageRef.current,
        scrub: true,
      },
    });

  }, []);

  return (
    <div className="overflow-hidden">

      <img
        ref={imageRef}
        src={src}
        className={className}
      />

    </div>
  );
}