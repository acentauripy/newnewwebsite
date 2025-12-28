import React from 'react';

export default function EnamelIcon({ width = 16, height = 16, style, ...rest }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 642.46 642.46"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      focusable={false}
      role={rest['aria-label'] ? 'img' : undefined}
      aria-hidden={rest['aria-label'] ? undefined : true}
      style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
      {...rest}
    >
      <defs>
        <linearGradient id="d" x1="15.08" y1="365.3" x2="543.45" y2="195.83" gradientUnits="userSpaceOnUse">
          <stop offset=".1" stopColor="#71c7ec" />
          <stop offset=".21" stopColor="#6dc5eb" />
          <stop offset=".31" stopColor="#63c0e8" />
          <stop offset=".4" stopColor="#52b7e3" />
          <stop offset=".48" stopColor="#3babdc" />
          <stop offset=".56" stopColor="#1c9cd4" />
          <stop offset=".57" stopColor="#189ad3" />
          <stop offset=".69" stopColor="#0e7dad" />
          <stop offset=".82" stopColor="#06648d" />
          <stop offset=".93" stopColor="#01557a" />
          <stop offset="1" stopColor="#005073" />
        </linearGradient>
        <linearGradient id="e" x1="172.01" y1="468.44" x2="653.94" y2="282.03" gradientUnits="userSpaceOnUse">
          <stop offset=".17" stopColor="#005073" />
          <stop offset=".3" stopColor="#096c97" />
          <stop offset=".47" stopColor="#138dc2" />
          <stop offset=".56" stopColor="#189ad3" />
          <stop offset=".61" stopColor="#31a6da" />
          <stop offset=".68" stopColor="#4db4e1" />
          <stop offset=".75" stopColor="#61bee7" />
          <stop offset=".82" stopColor="#6dc4ea" />
          <stop offset=".88" stopColor="#71c7ec" />
        </linearGradient>
        <linearGradient id="f" x1="29.68" y1="57.1" x2="249.14" y2="142.56" gradientUnits="userSpaceOnUse">
          <stop offset=".09" stopColor="#189ad3" />
          <stop offset=".39" stopColor="#0e7dae" />
          <stop offset=".79" stopColor="#045c83" />
          <stop offset="1" stopColor="#005073" />
        </linearGradient>
      </defs>
      <g>
        <g>
          <path fill="url(#d)" d="m178.48,308.77c135.67-140.11,367.36-28.82,377.65-185.05.6-9.06-2.2-56.38-48.82-76.16-49.3-20.92-91.62,15.37-199.95,27.16-104.98,11.42-165.13-39.02-165.13-39.02,0,0,80.8,23.92,162.94,10.21-22.87-2.33-44.31-9.44-63.17-20.46C217.35,9.36,187.81,0,156.06,0,69.87,0,0,69.01,0,154.15c0,2.75.07,5.49.22,8.21,5.82,111.16,75.54,360.46,126.34,439.72h-.24c12.29,18.95,31.78,32.86,54.64,38.07-45.26-63.27-119.1-210.95-2.48-331.39Z" />
          <path fill="url(#e)" d="m642.46,154.15c0-56.24-30.5-105.43-76.05-132.35,85.61,80.05,72.17,249.56-104.45,255.71-276.62,9.63-292.77,151.46-292.77,151.46,0,0-28.82,98.31,42.78,213.16,12.73-.98,28.16-5.08,38.96-22.23,19.62-31.14,36.86-181.29,36.79-211.17-.09-34.36,25.55-48.99,50.05-48.99s44.63,15.1,51.01,38.88c6.38,23.78,19.9,179.29,42.44,222,11.11,21.04,31.32,21.85,38.42,21.85,42.11,0,49.19-29.03,58.22-67.92h0c32.81-207.14,43.73-230.75,106.72-371.91,5.11-15.25,7.88-31.55,7.88-48.49Z" />
          <path fill="url(#f)" d="m305.16,45.9c-22.87-2.33-44.31-9.44-63.17-20.46C217.35,9.36,187.81,0,156.06,0,69.87,0,0,69.01,0,154.15c0,2.75.07,5.49.22,8.21.03.59.07,1.2.11,1.79,83.33-11.1,200.61-35.39,276.67-87.78-86.12.07-134.77-40.68-134.77-40.68,0,0,80.8,23.92,162.94,10.21Z" />
        </g>
      </g>
    </svg>
  );
}
