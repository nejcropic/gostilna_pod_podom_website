import React, { useEffect, useRef } from "react";
import PhotoSphereViewer from "photo-sphere-viewer";
import "./Image360Viewer.css";

const Image360Viewer = ({ imageUrl }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      new PhotoSphereViewer({
        container: containerRef.current,
        panorama: imageUrl,
        navbar: true,
        loadingImg: "https://i.imgur.com/8JZVy3u.gif", // Optional loading image
      });
    }
  }, [imageUrl]);

  return <div ref={containerRef} className="image-360-container"></div>;
};

export default Image360Viewer;
