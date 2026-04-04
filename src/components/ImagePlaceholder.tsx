interface ImagePlaceholderProps {
  label: string;
  aspectRatio?: string;
  className?: string;
}

export function ImagePlaceholder({
  label,
  aspectRatio = "aspect-[4/3]",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`${aspectRatio} bg-gradient-to-br from-sand-light via-sand to-taupe-light flex items-center justify-center ${className}`}
    >
      <div className="text-center px-6">
        <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-taupe-light/60 flex items-center justify-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-taupe-dark"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>
        <span className="text-xs text-taupe-dark tracking-wide">{label}</span>
      </div>
    </div>
  );
}
