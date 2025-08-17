/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        uzum: {
          primary: '#7000FF',
          secondary: '#8B5CF6',
          accent: '#A855F7',
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
          gray: {
            50: '#F9FAFB',
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827'
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'uzum': '0 2px 8px rgba(112, 0, 255, 0.1)',
        'uzum-lg': '0 4px 16px rgba(112, 0, 255, 0.15)'
      }
    },
  },
  plugins: [],
};
