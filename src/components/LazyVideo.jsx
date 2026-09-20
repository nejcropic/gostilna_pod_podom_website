import { useEffect, useRef, useState } from "react";

export default function LazyVideo({ src, poster, label }) {
  const containerRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element || !("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={containerRef}
      src={shouldLoad ? src : undefined}
      poster={poster}
      preload={shouldLoad ? "metadata" : "none"}
      autoPlay
      muted
      loop
      playsInline
      aria-label={label}
    />
  );
}
