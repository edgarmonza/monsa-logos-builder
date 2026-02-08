/**
 * Monza Lab - Brand Design Tokens
 * 
 * Single source of truth for all brand identity elements.
 * Extracted from monzalab.com design system.
 * 
 * Fonts: Telegraf (display) + Public Sans (body)
 * Palette: Premium dark with rosa accent (#F8B4D9)
 */

export const brand = {
    name: 'Monza Logos Builder',
    company: 'Monza Lab',
    tagline: 'Build logos with precision. Monza standard.',
    url: 'https://www.monzalab.com',

    colors: {
          // Core backgrounds
      bg: {
              primary: '#0b0b10',
              secondary: '#0f0e16',
              elevated: 'rgba(15, 14, 22, 0.9)',
              subtle: 'rgba(255, 252, 247, 0.02)',
              hover: 'rgba(255, 252, 247, 0.04)',
      },
          // Text
          text: {
                  primary: '#FFFCF7',
                  secondary: '#C9CCD3',
                  muted: 'rgba(255, 252, 247, 0.6)',
                  subtle: 'rgba(255, 252, 247, 0.45)',
                  disabled: 'rgba(255, 252, 247, 0.3)',
          },
          // Accent (rosa Monza)
          accent: {
                  primary: '#F8B4D9',
                  hover: '#f4cbde',
                  muted: 'rgba(248, 180, 217, 0.6)',
                  subtle: 'rgba(248, 180, 217, 0.12)',
                  border: 'rgba(248, 180, 217, 0.2)',
                  glow: 'rgba(248, 180, 217, 0.35)',
                  bg: 'rgba(248, 180, 217, 0.08)',
          },
          // Borders
          border: {
            default: 'rgba(255, 255, 255, 0.1)',
                  subtle: 'rgba(255, 255, 255, 0.05)',
                  accent: 'rgba(248, 180, 217, 0.15)',
                  accentHover: 'rgba(248, 180, 217, 0.28)',
          },
          // Utility
          white: '#FFFFFF',
          black: '#000000',
          transparent: 'transparent',
    },

    fonts: {
          display: {
                  family: "'Telegraf', system-ui, sans-serif",
                  weights: { medium: 500, semibold: 600, bold: 700 },
                  source: 'https://api.fontshare.com/v2/css?f[]=telegraf@700,600,500&display=swap',
          },
          body: {
                  family: "'Public Sans', system-ui, sans-serif",
                  weights: { regular: 400, medium: 500, semibold: 600 },
                  source: 'https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600&display=swap',
          },
    },

    spacing: {
          container: '1120px',
          px: { sm: '24px', md: '32px', lg: '40px' },
    },

    radius: {
          sm: '8px',
          md: '12px',
          lg: '18px',
          xl: '24px',
          full: '9999px',
    },

    shadows: {
          card: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 252, 247, 0.03)',
          button: '0 0 16px -2px rgba(248, 180, 217, 0.4)',
          buttonHover: '0 8px 24px -4px rgba(248, 180, 217, 0.35)',
          glow: '0 0 20px rgba(248, 180, 217, 0.08)',
          elevated: '0 8px 32px -12px rgba(0, 0, 0, 0.4)',
    },

    gradients: {
          heroGlow: 'radial-gradient(80% 50% at 50% 0%, rgba(248, 180, 217, 0.12) 0%, transparent 60%)',
          subtleGlow: 'radial-gradient(60% 40% at 50% 30%, rgba(248, 180, 217, 0.06) 0%, transparent 50%)',
          cardBg: 'linear-gradient(#0b0a0f, #12101a)',
          footerBorder: 'linear-gradient(90deg, transparent, rgba(248, 180, 217, 0.15), transparent)',
          noise: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
    },

    // CSS classes matching Monza Lab style
    typography: {
          label: 'text-[10px] md:text-[11px] uppercase tracking-[0.5em] font-normal',
          navLink: 'text-xs font-medium tracking-[0.18em] uppercase',
          heading1: 'font-display font-medium text-[2rem] md:text-[2.6rem] lg:text-[3.2rem] xl:text-[3.6rem] leading-[1.08] tracking-[-0.01em]',
          heading2: 'font-display text-3xl md:text-4xl lg:text-5xl font-light',
          heading3: 'font-display text-xl md:text-2xl',
          body: 'text-base md:text-lg leading-[1.7] tracking-wide',
          caption: 'text-xs tracking-[0.35em] uppercase',
          tag: 'px-3 py-1 text-xs font-medium rounded-full',
    },

    // Button styles
    buttons: {
          primary: {
                  bg: '#F8B4D9',
                  text: '#0b0b10',
                  hoverBg: '#f4cbde',
                  radius: '9999px',
                  shadow: '0 6px 24px -6px rgba(248, 180, 217, 0.3)',
                  hoverShadow: '0 8px 32px -6px rgba(248, 180, 217, 0.4)',
                  tracking: '0.12em',
                  textTransform: 'uppercase' as const,
                  fontSize: '12px',
                  fontWeight: 600,
          },
          secondary: {
                  bg: 'rgba(248, 180, 217, 0.15)',
                  text: '#F8B4D9',
                  border: 'rgba(248, 180, 217, 0.4)',
                  hoverBg: 'rgba(248, 180, 217, 0.25)',
                  radius: '9999px',
          },
          ghost: {
                  bg: 'transparent',
                  text: '#C9CCD3',
                  hoverText: '#FFFCF7',
          },
    },

    // Animation
    transitions: {
      default: 'all 0.2s ease',
          slow: 'all 0.3s ease',
          colors: 'color 0.2s ease, background-color 0.2s ease',
    },
} as const;

export type BrandColors = typeof brand.colors;
export type BrandFonts = typeof brand.fonts;
