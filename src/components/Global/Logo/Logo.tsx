"use client";

import React, { forwardRef } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./Logo.module.scss";

export interface LogoProps {
  src: string | StaticImageData;
  width: number;
  height: number;
  alt?: string;
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
        unoptimized={typeof src === "string"}
      />
    </span>
  ),
);

Logo.displayName = "Logo";
export default Logo;
