/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
      "primary": "#3b82f6",
      "secondary": "#64748b",
      "accent": "#f59e0b"
},
      spacing: {
      "spacing-1": "4px",
      "spacing-2": "8px",
      "spacing-3": "12px",
      "spacing-4": "16px",
      "spacing-5": "20px",
      "spacing-6": "24px",
      "spacing-7": "32px",
      "spacing-8": "40px",
      "spacing-9": "48px",
      "spacing-10": "64px"
},
      fontFamily: {
        body: ['var(--font-body)'],
        heading: ['var(--font-heading)'],
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      [
      "light",
      "dark",
      "cupcake",
      "emerald"
],
      {
        "custom": {
        "primary": "#3b82f6",
        "secondary": "#64748b",
        "accent": "#f59e0b",
        "neutral": "#1f2937",
        "base-100": "#ffffff",
        "base-200": "#f3f4f6",
        "base-300": "#e5e7eb",
        "info": "#06b6d4",
        "success": "#10b981",
        "warning": "#f59e0b",
        "error": "#ef4444"
}
      }
    ],
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: false,
    themeRoot: ":root",
  },
}
