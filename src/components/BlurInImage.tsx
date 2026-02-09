"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

export default function BlurInImage(props: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <span className={`blur-in-wrap relative block h-full w-full ${loaded ? "loaded" : ""}`}>
      <Image
        {...props}
        loading="lazy"
        onLoad={(e) => {
          setLoaded(true);
          props.onLoad?.(e as React.SyntheticEvent<HTMLImageElement, Event>);
        }}
        className="h-full w-full object-cover"
      />
    </span>
  );
}
