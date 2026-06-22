import { useMemo } from "react";

const ZODIAC_SIGNS = [
  "♈︎", "♉︎", "♊︎", "♋︎", "♌︎", "♍︎",
  "♎︎", "♏︎", "♐︎", "♑︎", "♒︎", "♓︎",
];

const ORBIT_PLANETS = [
  { r: 110, duration: 14, reverse: false, size: 12, color: "#FF8A3D", glow: "16.8px" },
  { r: 150, duration: 22, reverse: true, size: 16, color: "#FFD166", glow: "22.4px" },
  { r: 190, duration: 32, reverse: false, size: 10, color: "#7BD389", glow: "14px" },
  { r: 230, duration: 48, reverse: true, size: 14, color: "#FF6B6B", glow: "19.6px" },
];

const DASHED_RINGS = [220, 300, 380, 460];

const SUN_RAYS = Array.from({ length: 12 }, (_, i) => i * 30);

function seededStar(index) {
  const seed = (index * 9301 + 49297) % 233280;
  const rnd = (n) => ((seed * (n + 1) * 17) % 10000) / 100;
  return {
    left: rnd(1),
    top: rnd(2),
    size: 1 + (seed % 30) / 10,
    duration: 2 + (seed % 40) / 10,
    delay: (seed % 40) / 10,
  };
}

const ZodiacWheel = () => {
  const radius = 230;
  const tickRadius = 218;

  return (
    <svg viewBox="-250 -250 500 500" className="h-full w-full overflow-visible">
      <circle
        cx="0"
        cy="0"
        r="240"
        fill="none"
        stroke="rgba(80,48,12,0.22)"
        strokeWidth="1"
        strokeDasharray="2 6"
      />
      <circle
        cx="0"
        cy="0"
        r="220"
        fill="none"
        stroke="rgba(80,48,12,0.12)"
        strokeWidth="1"
      />

      {ZODIAC_SIGNS.map((sign, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        const rotation = i * 30 + 90;

        return (
          <g key={sign} transform={`translate(${x},${y}) rotate(${rotation})`}>
            <text
              x="0"
              y="6"
              textAnchor="middle"
              fontFamily="'Segoe UI Symbol', Poppins, sans-serif"
              fontSize="20"
              fontWeight="500"
              fill="rgba(42,26,5,0.85)"
            >
              {sign}
            </text>
          </g>
        );
      })}

      {Array.from({ length: 24 }, (_, i) => {
        const angle = (i * 15 - 90) * (Math.PI / 180);
        const x1 = tickRadius * Math.cos(angle);
        const y1 = tickRadius * Math.sin(angle);
        const x2 = (tickRadius - 10) * Math.cos(angle);
        const y2 = (tickRadius - 10) * Math.sin(angle);

        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="rgba(42,26,5,0.4)"
            strokeWidth="1.2"
          />
        );
      })}
    </svg>
  );
};

const ConstellationLayer = () => (
  <svg viewBox="-200 -200 400 400" className="h-full w-full">
    <polyline
      points="-130,-100 -90,-70 -50,-90 -10,-60 30,-80 60,-40"
      fill="none"
      stroke="rgba(255,138,40,0.55)"
      strokeWidth="1.2"
    />
    <polyline
      points="80,90 120,60 150,100 110,140 70,120"
      fill="none"
      stroke="rgba(180,120,60,0.5)"
      strokeWidth="1.2"
    />
    <polyline
      points="-160,80 -120,50 -100,90 -60,70"
      fill="none"
      stroke="rgba(120,72,30,0.45)"
      strokeWidth="1.2"
    />
    {[
      [-130, -100, "2s"],
      [-90, -70, "2.7s"],
      [-50, -90, "3.4s"],
      [-10, -60, "4.1s"],
      [30, -80, "2s"],
      [60, -40, "2.7s"],
      [80, 90, "3.4s"],
      [120, 60, "4.1s"],
      [150, 100, "2s"],
      [110, 140, "2.7s"],
      [70, 120, "3.4s"],
      [-160, 80, "4.1s"],
      [-120, 50, "2s"],
      [-100, 90, "2.7s"],
      [-60, 70, "3.4s"],
    ].map(([cx, cy, dur], i) => (
      <circle key={i} cx={cx} cy={cy} r="2.4" fill="#FF8A3D">
        <animate
          attributeName="r"
          values="1.6;3.2;1.6"
          dur={dur}
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.4;1;0.4"
          dur={dur}
          repeatCount="indefinite"
        />
      </circle>
    ))}
  </svg>
);

const HeroTaramandal = ({ compact = false }) => {
  const stars = useMemo(() => Array.from({ length: 36 }, (_, i) => seededStar(i)), []);

  return (
    <div
      className={`relative mx-auto aspect-square w-full ${
        compact ? "max-w-[95px]" : "max-w-[500px] lg:max-w-[560px] xl:max-w-[620px]"
      }`}
    >
      {stars.map((star, i) => (
        <span
          key={i}
          className="hero-star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      <div className="absolute inset-0 animate-taramandal-spin">
        <ZodiacWheel />
      </div>

      <div className="absolute inset-[8%] animate-taramandal-counter">
        <ConstellationLayer />
      </div>

      <div className="absolute inset-0 grid place-items-center">
        {DASHED_RINGS.map((size) => (
          <div
            key={size}
            className="absolute rounded-full border border-dashed border-[rgba(80,48,12,0.14)]"
            style={{ width: size, height: size }}
          />
        ))}
      </div>

      <div className="absolute inset-0 grid place-items-center">
        {ORBIT_PLANETS.map((planet) => (
          <div
            key={planet.r}
            className={`absolute h-0 w-0 ${
              planet.reverse ? "animate-orbit-rev" : "animate-orbit"
            }`}
            style={{
              "--orbit-r": `${planet.r}px`,
              animationDuration: `${planet.duration}s`,
            }}
          >
            <div
              className="rounded-full"
              style={{
                width: planet.size,
                height: planet.size,
                background: `radial-gradient(circle at 30% 30%, ${planet.color}cc, ${planet.color})`,
                boxShadow: `0 0 ${planet.glow} ${planet.color}cc`,
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 grid place-items-center">
        <div className="relative flex h-20 w-20 animate-glow-pulse items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#FFFAE0_0%,#FFD166_35%,#FF7A1A_100%)]">
          <div className="absolute -inset-[18px] animate-taramandal-spin rounded-full border border-[rgba(255,200,80,0.4)]">
            {SUN_RAYS.map((deg) => (
              <span
                key={deg}
                className="absolute left-1/2 top-1/2 h-3.5 w-0.5 origin-bottom bg-gradient-to-b from-[rgba(255,180,60,0.9)] to-transparent"
                style={{
                  transform: `translate(-50%, 50px) rotate(${deg}deg) translateY(-58px)`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {!compact && (
        <>
          <div
            className="absolute left-[10%] top-[15%] h-0.5 w-[60px] animate-meteor opacity-90"
            style={{
              background: "linear-gradient(to right, transparent, #FF8A3D)",
              animationDelay: "2s",
            }}
          />
          <div
            className="absolute left-[5%] top-1/2 h-0.5 w-[50px] animate-meteor opacity-70"
            style={{
              background: "linear-gradient(to right, transparent, #FF6B6B)",
              animationDuration: "7s",
              animationDelay: "4.5s",
            }}
          />
        </>
      )}
    </div>
  );
};

export default HeroTaramandal;
