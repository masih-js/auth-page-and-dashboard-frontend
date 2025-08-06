"use client";

import React, { forwardRef, useState } from "react";
import Image from "next/image";
import styles from "../Header/Header.module.scss";

export interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
  fallbackSrc?: string;
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    { src, alt, size = 32, fallbackSrc = "/images/default-avatar.jpg" },
    ref,
  ) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const imgSrc = hasError ? fallbackSrc : src;

    return (
      <div
        className={styles.avatarWrapper}
        style={{ width: size, height: size }}
        ref={ref}
      >
        {isLoading && <div className={styles.avatarPlaceholder} />}
        <Image
          src={imgSrc}
          width={size}
          height={size}
          alt={alt}
          className={styles.avatar}
          onLoadingComplete={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
        />
      </div>
    );
  },
);

Avatar.displayName = "Avatar";
export default Avatar;
