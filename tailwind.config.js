/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1330px',
    },
    extend: {
      colors: {
        primary: '#77D7D3',
        secondary: '#2E4049',
        accent: {
          DEFAULT: '#77D7D3',
          secondary: '#2E4049',
          tertiary: '#FF6D6D'
        },
        grey: '#727272'
      },
      fontFamily: {
        primary: 'Shippori Mincho',
      },
      boxShadow: {
        custom1: '0px 2px 40px 0px rgba(8, 70, 78, 0.08)',
        custom2: '0px 2px 30px 0px rgba(8, 73, 81, 0.06)',
      },
      backgroundImage: {
        homeBg: 'url(../assets/asset/banner-home.png)',
        services: 'url(../assets/img/services/bg.svg)',
        testimonials: 'url(../assets/img/testimonials/bg.svg)',
        departemens: 'url(../assets/img/departments/bg.svg)',
        quoteLeft: 'url(../assets/icons/testimonials/quote-left.svg)',
        quoteRight: 'url(../assets/icons/testimonials/quote-right.svg)',
        Volunteer: 'url(../assets/asset/bg-volunteer.png)'
      }
    },
  },
  plugins: [],
}