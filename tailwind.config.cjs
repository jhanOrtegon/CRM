/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: 
      {
        "daisy-space-100": 'var(--daisy-space-100) !important',
        "daisy-space-80": 'var(--daisy-space-80) !important',
        "daisy-space-60": 'var(--daisy-space-60) !important',
        "daisy-space-40": 'var(--daisy-space-40) !important',
        "daisy-space-20": 'var(--daisy-space-20) !important',
        "daisy-space-10": 'var(--daisy-space-10) !important',
        
        "daisy-green-leaf-100": 'var(--daisy-green-leaf-100) !important',
        "daisy-green-leaf-80": 'var(--daisy-green-leaf-80) !important',
        "daisy-green-leaf-60": 'var(--daisy-green-leaf-60) !important',
        "daisy-green-leaf-40": 'var(--daisy-green-leaf-40) !important',
        "daisy-green-leaf-20": 'var(--daisy-green-leaf-20) !important',
        "daisy-green-leaf-10": 'var(--daisy-green-leaf-10) !important',
        
        "--daisy-blue-jeans-100": 'var(--daisy-blue-jeans-100) !important',
        "--daisy-blue-jeans-80": 'var(--daisy-blue-jeans-80) !important',
        "--daisy-blue-jeans-60": 'var(--daisy-blue-jeans-60) !important',
        "--daisy-blue-jeans-40": 'var(--daisy-blue-jeans-40) !important',
        "--daisy-blue-jeans-20": 'var(--daisy-blue-jeans-20) !important',
        "--daisy-blue-jeans-10": 'var(--daisy-blue-jeans-10) !important',
        
        "--daisy-off-white-100": 'var(--daisy-off-white-100) !important',
        "--daisy-off-white-80": 'var(--daisy-off-white-80) !important',
        "--daisy-off-white-60": 'var(--daisy-off-white-60) !important',
        "--daisy-off-white-40": 'var(--daisy-off-white-40) !important',
        "--daisy-off-white-20": 'var(--daisy-off-white-20) !important',
        "--daisy-off-white-10": 'var(--daisy-off-white-100) !important',
        
        "--daisy-red-100": 'var(--daisy-red-100) !important',
        "--daisy-red-80": 'var(--daisy-red-80) !important',
        "--daisy-red-60": 'var(--daisy-red-60) !important',
        "--daisy-red-40": 'var(--daisy-red-40) !important',
        "--daisy-red-20": 'var(--daisy-red-20) !important',
        "--daisy-red-10": 'var(--daisy-red-10) !important',
        
        "--daisy-yellow-100": 'var(--daisy-yellow-100) !important',
        "--daisy-yellow-80": 'var(--daisy-yellow-80) !important',
        "--daisy-yellow-60": 'var(--daisy-yellow-60) !important',
        "--daisy-yellow-40": 'var(--daisy-yellow-40) !important',
        "--daisy-yellow-20": 'var(--daisy-yellow-20) !important',
        "--daisy-yellow-10": 'var(--daisy-yellow-10) !important',
        
        "--daisy-grey-50": 'var(--daisy-grey-50) !important',
        
        "--daisy-navy-blue-100": 'var(--daisy-navy-blue-100) !important',
        "--daisy-navy-blue-60": 'var(--daisy-navy-blue-60) !important',
        "--daisy-navy-blue-40": 'var(--daisy-navy-blue-40) !important',
        "--daisy-navy-blue-20": 'var(--daisy-navy-blue-20) !important',
        
        "--daisy-bittersweet-100": 'var(--daisy-bittersweet-100) !important',
        
        "--daisy-royal-blue-100": 'var(--daisy-royal-blue-100) !important',
        "--daisy-royal-blue-40": 'var(--daisy-royal-blue-40) !important',
        "--daisy-royal-blue-10": 'var(--daisy-royal-blue-10) !important',
        
        "--daisy-caribbean-green": 'var(--daisy-caribbean-green) !important',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  // daisyUI config (optional - here are the default values)
  daisyui: {
    styled: true,
    themes: ["light", "dark", {
      light: {
        "primary": "#1D214E",
        "accent": "#66c6ff",
        "accent-content": "#ffffff",
        "neutral-content": "#ffffff",
        "base-100": "#F8FAFB",
        "base-content": "#A5A6B8",//font color
        "info": "#66c6ff",
        "warning": "#4377EB",


        '--daisy-space-100': '#1D214E',
        '--daisy-space-80': '#4A4D71',
        '--daisy-space-60': '#777A95',
        '--daisy-space-40': '#A5A6B8',
        '--daisy-space-20': '#D2D3DC',
        '--daisy-space-10': '#E9E9EE',
        
        
        '--daisy-green-leaf-100': '#9CDA5F',
        '--daisy-green-leaf-80': '#B0E17F',
        '--daisy-green-leaf-60': '#C4E99F',
        '--daisy-green-leaf-40': '#D7F0BF',
        '--daisy-green-leaf-20': '#EBF8DF',
        '--daisy-green-leaf-10': '#F6FCEF',
        
        '--daisy-blue-jeans-100': '#5FBAFC',
        '--daisy-blue-jeans-80': '#7FC8FD',
        '--daisy-blue-jeans-60': '#9FD6FD',
        '--daisy-blue-jeans-40': '#BFE3FE',
        '--daisy-blue-jeans-20': '#DFF1FE',
        '--daisy-blue-jeans-10': '#EFF9FF',
        
        '--daisy-off-white-100': '#F1F5FD',
        '--daisy-off-white-80': '#F4F7FD',
        '--daisy-off-white-60': '#F7F9FE',
        '--daisy-off-white-40': '#F9FBFE',
        '--daisy-off-white-20': '#FCFDFF',
        '--daisy-off-white-10': '#FEFEFF',
        
        '--daisy-red-100': '#FF5349',
        '--daisy-red-80': '#FF756D',
        '--daisy-red-60': '#FF9892',
        '--daisy-red-40': '#FFBAB6',
        '--daisy-red-20': '#FFDDDB',
        '--daisy-red-10': '#FFEEED',
        
        '--daisy-yellow-100': '#F6D155',
        '--daisy-yellow-80': '#F8DA77',
        '--daisy-yellow-60': '#FAE399',
        '--daisy-yellow-40': '#FBEDBB',
        '--daisy-yellow-20': '#FDF6DD',
        '--daisy-yellow-10': '#FFFBEE',

        '--daisy-grey-50': '#D0D1D2',

        '--daisy-navy-blue-100': '#100065',
        '--daisy-navy-blue-60': '#7066A3',
        '--daisy-navy-blue-40': '#9F99C1',
        '--daisy-navy-blue-20': '#CFCCE0',
        
        '--daisy-bittersweet-100': '#FC5261',


        '--daisy-royal-blue-100': '#4377EB',
        '--daisy-royal-blue-40': '#B4C9F7',
        '--daisy-royal-blue-10': '#EDF2FD',

        '--daisy-caribbean-green': '#04D7A2'
        
      },
      
    }],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  }, logs: true,
  // },
};
