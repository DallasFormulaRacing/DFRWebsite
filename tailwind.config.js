/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
    darkMode: ["class"],
    content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/(shared-components)/Navbar.tsx",
    "./app/team/officers/OfficerCard.tsx",
  ],
  theme: {
  	extend: {
  		fontSize: {
  			'10xl': '10rem'
  		},
  		spacing: {
  			'128': '32rem',
  			'144': '36rem',
  			'160': '40rem',
  			'176': '44rem',
  			'224': '56rem',
  			'256': '64rem',
  			'400': '100rem'
  		},
  		colors: {
  			'wh-0': '#FFFFFF',
  			'wh-10': '#F4F4F4',
  			'wh-50': '#FBFBFB',
  			'wh-75': '#F7F7F7',
  			'wh-100': '#C9C9C9',
  			'wh-300': '#939393',
  			'wh-500': '#595959',
  			'wh-900': '#0F0F0F',
  			'accent-red': '#EA9648',
  			'accent-orange': '#E87500',
  			'accent-orange-light': '#ff9933',
  			'officer-orange': '#EE9740',
  			'accent-green': '#2D8B49',
  			'accent-yellow': '#EDCA2C',
  			'or-10': '#ff841c',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
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
  			}
  		},
  		opacity: {
  			'65': '0.65'
  		},
  		backgroundImage: '(theme) => ({\n        "gradient-gradual":\n          "linear-gradient(180deg, rgba(116, 116, 116, 0) 66.15%, #000000 100%)",\n      })',
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
  	screens: {
  		xs: '480px',
  		sm: '768px',
  		md: '1060px'
  	}
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".navbarLink": {
          color: "#FFFFFF",
          opacity: 0.65,
          "&:hover": {
            color: "#E87500",
            underline: true,
            opacity: 1,
          },
        },
        ".buttonEffect": {
          color: "#FFFFFF",
          "&:hover": {
            color: "#E87500",
            underline: true,
            opacity: 1,
          },
        },
        ".team": {
          display: "flex",
          "flex-direction": "column",
          // "justify-content": "center",
          "align-items": "center",
          height: "100%",
        },
        ".officerCards": {
          display: "flex",
          "flex-direction": "row",
          "justify-content": "center",
          "align-items": "center",
          "flex-wrap": "wrap",
          "justify-content": "space-between",
        },
        ".officerCard": {
          width: "100%",
          margin: "25px",
          width: "clamp(300px, 100%, 400px)",
          "min-height": "400px",
          "background-color": "bg-transparent",
          trasition: "all 0.3s ease-in-out",
        },
      });
    }),
    require("@tailwindcss/typography"),
      require("tailwindcss-animate")
],
};
