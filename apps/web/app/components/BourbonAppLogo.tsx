export function BourbonAppLogo() {
  return (
    <div className="flex items-center justify-center gap-4">
      {/* Left Glasses */}
      <div className="flex gap-2">
        <svg width="40" height="50" viewBox="0 0 40 50" className="transform -rotate-12">
          <rect x="8" y="10" width="8" height="25" fill="none" stroke="#92400e" strokeWidth="2" rx="2" />
          <rect x="8" y="35" width="24" height="3" fill="#92400e" />
          <line x1="12" y1="10" x2="16" y2="0" stroke="#d4a574" strokeWidth="1" opacity="0.5" />
        </svg>
        <svg width="40" height="50" viewBox="0 0 40 50" className="transform rotate-12">
          <rect x="8" y="10" width="8" height="25" fill="none" stroke="#92400e" strokeWidth="2" rx="2" />
          <rect x="8" y="35" width="24" height="3" fill="#92400e" />
          <line x1="12" y1="10" x2="16" y2="0" stroke="#d4a574" strokeWidth="1" opacity="0.5" />
        </svg>
      </div>

      {/* Title */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800">Bourbon</h1>
        <h1 className="text-2xl font-bold text-gray-800">App</h1>
      </div>

      {/* Right Glasses */}
      <div className="flex gap-2">
        <svg width="40" height="50" viewBox="0 0 40 50" className="transform -rotate-12">
          <rect x="8" y="10" width="8" height="25" fill="none" stroke="#92400e" strokeWidth="2" rx="2" />
          <rect x="8" y="35" width="24" height="3" fill="#92400e" />
          <line x1="12" y1="10" x2="16" y2="0" stroke="#d4a574" strokeWidth="1" opacity="0.5" />
        </svg>
        <svg width="40" height="50" viewBox="0 0 40 50" className="transform rotate-12">
          <rect x="8" y="10" width="8" height="25" fill="none" stroke="#92400e" strokeWidth="2" rx="2" />
          <rect x="8" y="35" width="24" height="3" fill="#92400e" />
          <line x1="12" y1="10" x2="16" y2="0" stroke="#d4a574" strokeWidth="1" opacity="0.5" />
        </svg>
      </div>
    </div>
  );
}
