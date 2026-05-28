"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import ConstructionLoader from "./ConstructionLoader";

export default function LoaderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const firstLoad = useRef(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    let timer: NodeJS.Timeout;

    const hideLoader = () => {
      timer = setTimeout(
        () => setLoading(false),
        firstLoad.current ? 2600 : 1800
      );

      firstLoad.current = false;
    };

    if (document.readyState === "complete") {
      hideLoader();
    } else {
      window.addEventListener("load", hideLoader);
    }

    return () => {
      window.removeEventListener("load", hideLoader);
      clearTimeout(timer);
    };
  }, [pathname]);

  return (
    <>
      {loading && <ConstructionLoader />}

      <div
        className={`transition-all duration-700 ease-out ${
          loading
            ? "opacity-0 translate-y-5 scale-[0.99]"
            : "opacity-100 translate-y-0 scale-100"
        }`}
      >
        {children}
      </div>
    </>
  );
}