import { useState, useEffect, useRef } from "react";

interface CityScrollAnimationProps {
  pauseOnHover?: boolean;
  direction?: "ltr" | "rtl";
  speed?: "slow" | "medium" | "fast";
}

const CityScrollAnimation = ({
  pauseOnHover = true,
  direction = "rtl",
  speed = "medium"
}: CityScrollAnimationProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const cities = [
    "Mumbai", "Pune", "Latur", "Solapur", "Hyderabad",
    "Bangalore", "Delhi", "Kolkata", "Chennai"
  ];

  const speedValue = {
    slow: "30s",
    medium: "20s",
    fast: "10s"
  };

  useEffect(() => {
    // Set up the animation only after component mount
    if (containerRef.current) {
      const container = containerRef.current;

      // Reset the animation when direction changes
      container.style.animation = "none";
      container.offsetHeight; // Trigger reflow
      container.style.animation = `scroll ${speedValue[speed]} linear infinite ${direction === "ltr" ? "normal" : "reverse"}`;

      if (isPaused) {
        container.style.animationPlayState = "paused";
      } else {
        container.style.animationPlayState = "running";
      }
    }
  }, [speed, direction, isPaused]);

  return (
    <div className="w-full overflow-hidden text-white bg-darkGray/70 py-4">
      <div className="relative flex items-center justify-center">
        <div
          ref={containerRef}
          className="inline-flex whitespace-nowrap"
          style={{
            animation: `scroll ${speedValue[speed]} linear infinite ${direction === "ltr" ? "normal" : "reverse"}`,
            animationPlayState: isPaused ? "paused" : "running"
          }}
          onMouseEnter={() => pauseOnHover && setIsPaused(true)}
          onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        >
          {/* Multiple sets for seamless infinite loop */}
          {[1, 2, 3, 4].map((setNum) => (
            cities.map((city, index) => (
              <span key={`city-${setNum}-${index}`} className="mx-8 text-sm md:text-base font-medium tracking-wider">
                {city}
              </span>
            ))
          ))}
        </div>
      </div>
    </div>
  );
};

export default CityScrollAnimation;