import { useEffect, useState } from "react";

const images = [
  "https://source.unsplash.com/1600x600/?nature",
  "https://source.unsplash.com/1600x600/?technology",
  "https://source.unsplash.com/1600x600/?car",
  "https://source.unsplash.com/1600x600/?fashion",
  "https://source.unsplash.com/1600x600/?travel",
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}