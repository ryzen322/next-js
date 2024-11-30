"use client";

import { useState } from "react";
import Button from "./Button";

export interface Production {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export function ProductPost({ slug }: { slug: string }) {
  const [product, setProduct] = useState<null | Production>(null);

  const fetchFn = async (slug: string) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${slug}`
    );
    const data: Production = await response.json();
    setProduct(data);
  };

  return (
    <div>
      {product && JSON.stringify(product)}
      <Button onClick={() => fetchFn(slug)}>{slug}</Button>
    </div>
  );
}
