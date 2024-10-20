import localFont from "next/font/local";


const Syne = localFont({
  src: [
    {
      path: '../assets/fonts/Syne-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Syne-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Syne-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Syne-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Syne-ExtraBold.woff2',
      weight: '900',
      style: 'normal',
    }
  ],
  variable: '--font-syne',
  weight: '100 900'
})

export {Syne}