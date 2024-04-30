import defaultTheme from 'tailwindcss/defaultTheme'
const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    
	darkMode: 'media',
	theme: {
		extend: {
			fontFamily: {
        		sans: ['Urbanist', ...defaultTheme.fontFamily.sans],
			},
			colors: {
                "light": '#ECECEC',
                "regal-blue": '#442EE0',
                "gray-1000": 'rgb(31,31,31)',
            },
            fontSize: {
                xxs: ['0.625rem', '0.875rem'],
            },
            height: {
                100: '32rem',
            },
            contrast: {
                25: '.25',
            },
            blur: {
                xs: '2px',
            },
            dropShadow: {
                'regal-blue': '0 20px 13px rgb(68,46,224 / 0.03)',
            }
		},
	},
	plugins: [
       addDynamicIconSelectors(),
   ],
}
