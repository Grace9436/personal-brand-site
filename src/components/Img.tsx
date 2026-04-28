import { useState, useCallback } from "react";
import { motion } from "framer-motion";

interface ImgProps {
  src?: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
  gradient?: string;
}

const gradients = [
  "linear-gradient(135deg, #f7f3ee 0%, #e8ddd0 50%, #d4c0aa 100%)",
  "linear-gradient(135deg, #e8ddd0 0%, #d4c0aa 50%, #bc9e80 100%)",
  "linear-gradient(135deg, #f5f2ed 0%, #e8dfd3 50%, #d4c5b0 100%)",
  "linear-gradient(135deg, #e8dfd3 0%, #d4c5b0 50%, #bca58a 100%)",
];

function hashGradient(seed: string): string {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  return gradients[Math.abs(hash) % gradients.length];
}

export default function Img({
  src,
  alt,
  aspectRatio = "1/1",
  className = "",
  gradient,
}: ImgProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const bgGradient = gradient || (alt ? hashGradient(alt) : gradients[0]);

  const handleLoad = useCallback(() => setLoaded(true), []);
  const handleError = useCallback(() => setError(true), []);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio }}
    >
      {/* Placeholder gradient */}
      <div
        className="absolute inset-0"
        style={{ background: bgGradient, opacity: loaded && !error ? 0 : 1 }}
      />

      {/* Initials fallback when no src or error */}
      {(!src || error) && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: bgGradient }}
        >
          <span className="text-2xl sm:text-3xl font-bold text-brand-400/60 select-none">
            {alt
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 2)
              .toUpperCase() || "?"}
          </span>
        </div>
      )}

      {/* Actual image */}
      {src && !error && (
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={handleLoad}
          onError={handleError}
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
    </div>
  );
}
