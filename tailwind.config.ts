import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

const addVariablesForColors = plugin(({ addBase, theme }) => {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  ) as Record<string, string>;

  addBase({
    ":root": newVars,
  });
});

const config: Config = {
  darkMode: ["class"],
  content: [
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
		extend: {
			borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
				gray: {
					1: '#D1CDCE',
					2: '#767676'
				},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
			},
			fontFamily: {
				syne: ['var(--font-syne)']
			},
			animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
			keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
			container: {
        center: true,
        padding: '20px',
        // SCREENS
				screens: {
					'sm': '640px',
					// => @media (min-width: 640px) { ... }

					'md': '768px',
					// => @media (min-width: 768px) { ... }
					
					'mid': '900px',
					// => @media (min-width: 900px) { ... }

					'lg': '1024px',
					// => @media (min-width: 1024px) { ... }

					'xl': '1280px',
					// => @media (min-width: 1280px) { ... }

					'2xl': '1360px',
					// => @media (min-width: 1360px) { ... }

					'3xl': '1440px',
					// => @media (min-width: 1440px) { ... }

					'4xl': '1536px',
					// => @media (min-width: 1536px) { ... }

					'6xl': '1600px',

				}
      },
		},

		// SCREENS
		screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

			'mid': '900px',


      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

			"xlg": '1141px',
      // => @media (min-width: 1141px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

			'2xl': '1360px',
      // => @media (min-width: 1360px) { ... }

			'3xl': '1440px',
      // => @media (min-width: 1440px) { ... }

      '4xl': '1536px',
      // => @media (min-width: 1536px) { ... }

			
			'6xl': '1600px',
      // => @media (min-width: 1536px) { ... }

    }
  },
  plugins: [
		// eslint-disable-next-line @typescript-eslint/no-require-imports  
		require("@xpd/tailwind-3dtransforms"),
		addVariablesForColors,
		plugin(function({ addComponents }) {
      addComponents({
        '.container': {
          height: 'auto',
          position: 'relative',
        },
      })
    }),
	],
};

export default config;
