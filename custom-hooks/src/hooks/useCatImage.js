import { useState, useEffect } from "react";

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    if (!fact) return;

    const firstWord = fact.split(" ", 3).join(" ");
    console.log(firstWord);
    fetch(
      `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`,
    )
      .then((res) => res.json())
      .then((response) => {
        const { url } = response;
        setImageUrl(url);
        console.log(url);
      });
  }, [fact]);

  return { imageUrl };
}
