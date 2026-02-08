import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
          extend: {
                  colors: {
                            monza: {
                                        bg: '#0b0b10',
                                        'bg-alt': '#0f0e16',
                                        cream: '#FFFCF7',
                                        silver: '#C9CCD3',
                                        rosa: '#F8B4D9',
                                        'rosa-hover': '#f4cbde',
                            },
                  },
                  fontFamily: {
                            display: ["'Telegraf'", 'system-ui', 'sans-serif'],
                            body: ["'Public Sans'", 'system-ui', 'sans-serif'],
                  },
                  maxWidth: { container: '1120px' },
                  boxShadow: {
                            'monza-card': '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,252,247,0.03)',
                            'monza-btn': '0 0 16px -2px rgba(248,180,217,0.4)',
                            'monza-glow': '0 0 20px rgba(248,180,217,0.08)',
                  },
                  letterSpacing: {
                            monza: '0.18em',
                            'monza-wide': '0.35em',
                  },
                  backgroundImage: {
                            'monza-glow': 'radial-gradient(80% 50% at 50% 0%, rgba(248,180,217,0.12) 0%, transparent 60%)',
                  },
                  animation: {
                            'fade-in': 'fadeIn 0.5s ease-out',
                            'slide-up': 'slideUp 0.5s ease-out',
                  },
                  keyframes: {
                            fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
                            slideUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
                  },
          },
    },
    plugins: [require('@tailwindcss/typography')],
};

export default config;
