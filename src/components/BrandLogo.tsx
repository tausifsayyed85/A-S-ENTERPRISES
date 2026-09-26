import React, { useState } from 'react';

interface BrandLogoProps {
  variant?: 'primary' | 'dark' | 'light' | 'emblem-only' | 'lockup-card' | 'image';
  className?: string;
  showWordmark?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'primary',
  className = '',
  showWordmark = true,
  size = 'md'
}) => {
  const [imageError, setImageError] = useState(false);
  const officialLogoPath = "/images/as_enterprises_official_logo.jpg";

  // Height scaling for the exact uploaded logo image
  const imageSizeClasses = {
    sm: 'h-9 w-auto',
    md: 'h-12 sm:h-14 w-auto',
    lg: 'h-16 sm:h-20 w-auto',
    xl: 'h-24 sm:h-32 w-auto'
  };

  // Full-width Lockup Card (e.g. for About Page official registry or hero presentation)
  if (variant === 'lockup-card') {
    return (
      <div className={`w-full max-w-2xl mx-auto rounded-xs overflow-hidden shadow-2xl border border-red-700/40 bg-[#9E0B0F] ${className}`}>
        <img
          src={officialLogoPath}
          alt="M/s A.S ENTERPRISES Official Logo"
          referrerPolicy="no-referrer"
          className="w-full h-auto object-cover"
        />
      </div>
    );
  }

  // If the user wants the logo AS IT IS with the uploaded image (Default behavior across the site)
  if (!imageError) {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img
          src={officialLogoPath}
          alt="M/s A.S ENTERPRISES"
          referrerPolicy="no-referrer"
          className={`object-contain rounded-xs shadow-xs border border-red-700/30 transition-transform duration-200 group-hover:scale-[1.02] ${imageSizeClasses[size]}`}
          onError={() => setImageError(true)}
        />
      </div>
    );
  }

  // Fallback Vector Rendering if image fails to load
  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      <div className="w-11 h-11 bg-[#F00000] p-1.5 rounded-xs flex items-center justify-center border border-red-600 shadow-xs">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <path d="M49 8 L14 88 H28 L49 36 L60 62 H49 L46 70 H64 L71 88 H85 L49 8 Z" fill="#FFFFFF" />
          <path d="M52 24 H84 V36 H57 L52 24 Z" fill="#FFFFFF" />
          <path d="M74 24 H86 V52 H74 V24 Z" fill="#FFFFFF" />
          <path d="M48 44 H82 V56 H48 V44 Z" fill="#FFFFFF" />
          <path d="M48 68 H86 V88 H40 L45 76 H74 V76 H48 V68 Z" fill="#FFFFFF" />
        </svg>
      </div>

      {showWordmark && (
        <div className="flex flex-col justify-center text-left">
          <span className="text-[10px] font-sans font-medium text-slate-500 leading-none">M/s</span>
          <span className="text-base sm:text-lg font-bold font-display uppercase tracking-wider text-slate-900 leading-tight">
            A.S ENTERPRISES
          </span>
          <div className="flex items-center gap-1.5 w-full mt-1">
            <div className="h-[1px] flex-1 bg-[#F00000]" />
            <span className="w-1 h-1 rotate-45 bg-[#F00000]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#F00000]" />
            <span className="w-1 h-1 rotate-45 bg-[#F00000]" />
            <div className="h-[1px] flex-1 bg-[#F00000]" />
          </div>
        </div>
      )}
    </div>
  );
};
