import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'childshandwriting': ['ChildsHandwriting', 'cursive'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'handdrawn-backline': "url('/public/images/backline.png')",
      },
      spacing: {
        '90': '22.5rem',
      },
      
      // keyframes: {
      //   grow: {
      //     from: {
      //       height: '0',
      //     },
      //     to: {
      //       height: '1000px',
      //     },
      //   },
      // },
      // animation: {
      //   'growth': 'grow 3s ease-out 1',
      // },
    },
  },
  plugins: [],
};

export default config;
