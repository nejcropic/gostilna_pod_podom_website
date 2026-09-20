import React, { lazy, Suspense, useEffect, useRef, useState } from "react";
import "./MapComponent.css";

const GoogleMapView = lazy(() => import("./GoogleMapView"));

function MapComponent() {
  const wrapperRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const element = wrapperRef.current;
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
    <div className="map-wrapper" ref={wrapperRef}>
      {shouldLoad && (
        <Suspense fallback={<div className="map-placeholder" aria-hidden="true" />}>
          <GoogleMapView />
        </Suspense>
      )}
    </div>
  );
}

export default MapComponent;
