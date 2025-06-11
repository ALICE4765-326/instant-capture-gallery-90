
import { useState } from "react";
import ImageLightbox from "./ImageLightbox";

interface Image {
  src: string;
  alt: string;
}

interface GalleryGridProps {
  images: Image[];
  title?: string;
  className?: string;
}

const GalleryGrid = ({ images, title, className = "" }: GalleryGridProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className={className}>
      {title && (
        <h2 className="text-2xl font-medium mb-8 text-center slide-up">{title}</h2>
      )}
      
      <div className="photo-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className="aspect-square overflow-hidden rounded-lg bg-muted photo-hover fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => openLightbox(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <ImageLightbox
        images={images}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
};

export default GalleryGrid;
