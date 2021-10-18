module.exports = {
  purge: {
    enabled: true,
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    safelist: ['px-4', 'sm:px-32'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'sharkbate-red': '#CD1A2C',
        'grow-background-color': '#F5F3EF',
      },
      backgroundImage: {
        'banner-bg': "url('/images/banner.png')",
        'about-banner-bg': "url('https://images.pexels.com/photos/168438/pexels-photo-168438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
        'sell-banner-bg':
          "url('https://images.pexels.com/photos/696205/pexels-photo-696205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
        'industry-banner-bg': "url('https://images.pexels.com/photos/301692/pexels-photo-301692.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')",
        'career-banner-bg': "url('https://images.pexels.com/photos/653429/pexels-photo-653429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        'blog-banner-bg': "url('https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg')",
        'features-banner-bg': "url('https://images.pexels.com/photos/4199930/pexels-photo-4199930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      },
      height: {
        'screen-60': '60vh',
        'screen-40': '40vh',
        'screen-80': '80vh',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
