"use client";

import React, { forwardRef } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./Logo.module.scss";

export interface LogoProps {
  /** Path or URL to the image */
  src: string | StaticImageData;
  /** Intrinsic width */
  width: number;
  /** Intrinsic height */
  height: number;
  /** Alt text for accessibility */
  alt?: string;
  /** Additional class for custom styling */
  className?: string;
}

const Logo = forwardRef<HTMLSpanElement, LogoProps>(
  ({ src, width, height, alt = "Logo", className = "" }, ref) => (
    <span ref={ref} className={`${styles.logo} ${className}`}>
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        unoptimized={typeof src === "string"} // if remote URL, skip optimization
      />
    </span>
  ),
);

Logo.displayName = "Logo";
export default Logo;
