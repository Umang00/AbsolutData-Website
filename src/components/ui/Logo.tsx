export function Logo({ className = "", mode = "brand" }: { className?: string, mode?: "brand" | "white" | "black" }) {
  const primaryColor = mode === "brand" ? "var(--color-primary, #00D4FF)" : mode === "white" ? "#FFFFFF" : "#0A0F1A";
  const secondaryColor = mode === "brand" ? "#F8FAFC" : mode === "white" ? "#FFFFFF" : "#0A0F1A";

  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M50 15 L15 85 h15 L42.5 50 h15 L65 85 h15 L50 15 Z" 
        fill={secondaryColor} 
        opacity="0.9"
      />
      <circle cx="50" cy="15" r="5" fill={primaryColor} />
      <circle cx="15" cy="85" r="5" fill={primaryColor} />
      <circle cx="85" cy="85" r="5" fill={primaryColor} />
      <circle cx="42.5" cy="50" r="4" fill={primaryColor} />
      <circle cx="57.5" cy="50" r="4" fill={primaryColor} />
      
      <line x1="50" y1="15" x2="15" y2="85" stroke={primaryColor} strokeWidth="1.5" strokeDasharray="4 2" />
      <line x1="50" y1="15" x2="85" y2="85" stroke={primaryColor} strokeWidth="1.5" strokeDasharray="4 2" />
      <line x1="42.5" y1="50" x2="57.5" y2="50" stroke={primaryColor} strokeWidth="1.5" strokeDasharray="4 2" />
    </svg>
  );
}
