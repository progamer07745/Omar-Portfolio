/**
 * Hand-drawn SVG icons for tech brands that don't have real images
 * (Node.js, Express, MongoDB, Next.js, Postman, ...)
 */

const paths = {
  nodejs: (
    <>
      <path
        d="M12 1.5l8.5 4.9v9.8L12 21l-8.5-4.8V6.4L12 1.5z"
        fill="#5fa04e"
      />
      <path d="M12 1.5l8.5 4.9v9.8L12 21V1.5z" fill="#8bc34a" opacity="0.85" />
      <text x="12" y="15.6" textAnchor="middle" fontSize="7.5" fontWeight="bold" fill="#0b2a10" fontFamily="Arial, sans-serif">
        JS
      </text>
    </>
  ),
  express: (
    <>
      <rect x="1" y="1" width="22" height="22" rx="5" fill="#111827" />
      <text x="12" y="17" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#fff" fontStyle="italic" fontFamily="Georgia, serif">
        e
      </text>
    </>
  ),
  mongodb: (
    <>
      <path
        d="M15.8 2.6c-.2-1.4-1.4-2-1.9-2.4-.1.8-.3 1.7-.4 2-.5 1.1-1.3 2-2.3 2.8l-.3.3c-2 1.8-3.6 4.2-3.6 7 .1 4.3 3.2 7.7 6.7 9.4l.4.2c.1-1.2.3-2.6.6-3.3.4-.6 1-1 1.5-1.6.9-.8 1.7-1.7 2.3-2.8 1.2-2.1 1.4-6.3-2.8-9.2z"
        fill="#10aa50"
      />
      <path
        d="M15.8 2.6c-.2-1.4-1.4-2-1.9-2.4-.1.8-.3 1.7-.4 2 .2 2 .5 3.5 1.2 5.1.9 2.1 2.3 4 4.3 6.1-1-1.3-2.4-4-2.7-6.2-.5-2.3-1.2-3.9-.5-2.6z"
        fill="#58d68d"
        opacity="0.8"
      />
    </>
  ),
  mongoose: (
    <>
      <path
        d="M12 2c1.5 1.8 2 3.4 2 5-.6.6-1.4 1.4-2 2.5-.6-1.1-1.4-1.9-2-2.5 0-1.6.5-3.2 2-5z"
        fill="#10aa50"
      />
      <path d="M12 9.5v10" stroke="#10aa50" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="20.5" r="1.3" fill="#58d68d" />
    </>
  ),
  nextjs: (
    <>
      <circle cx="12" cy="12" r="11" fill="#000" />
      <path d="M6.5 17.8V6.2" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      <path d="M6.5 17.8L16.5 6.2" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      <path d="M13.8 6.2H16.5v11.6" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none" />
    </>
  ),
  postman: (
    <>
      <rect x="1" y="1" width="22" height="22" rx="5" fill="#ff6c37" />
      <text x="12" y="17" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#fff" fontFamily="Arial, sans-serif">
        P
      </text>
    </>
  ),
  jwt: (
    <>
      <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="#00eaff" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <rect x="5" y="10" width="14" height="9" rx="2" fill="#0e7490" />
      <circle cx="12" cy="14.5" r="1.7" fill="#a5f3fc" />
      <rect x="11.3" y="15.5" width="1.4" height="2.5" rx="0.5" fill="#a5f3fc" />
    </>
  ),
  rest: (
    <>
      <path d="M3 8h13M13 5l3 3-3 3" stroke="#38bdf8" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 16H8M11 13l-3 3 3 3" stroke="#00eaff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  vscode: (
    <>
      <rect x="1" y="1" width="22" height="22" rx="5" fill="#007acc" />
      <path d="M8.5 7l-3 3 3 3-3 3 3 3V7z" fill="#fff" />
      <path d="M10.5 7v10l3 3 5-4V8l-5-4-3 3z" fill="#a5d8f7" />
    </>
  ),
};

export default function BrandIcon({ name, size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {paths[name] || null}
    </svg>
  );
}
