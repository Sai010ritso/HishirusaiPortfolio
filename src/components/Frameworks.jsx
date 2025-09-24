import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks({
  outerRadius = 160,
  innerRadius = 100,
  outerIconSize = 40,
  innerIconSize = 25,
  className = "",
}) {
  const skills = [
    "Photoshop",
    "Krita",
    "IbisPaint",
    "Blender",
    "Canva",
    "Figma",
    "cplusplus",
    "css3",
    "git",
    "html5",
    "javascript",
    "react",
    "Laravel",
    "tailwindcss",
    "vitejs",
    
  ];
  return (
    <div className={`relative flex h-[15rem] w-full flex-col items-center justify-center ${className}`}>
      <OrbitingCircles iconSize={outerIconSize} radius={outerRadius}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={innerIconSize} radius={innerRadius} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
