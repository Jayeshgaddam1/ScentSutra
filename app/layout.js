import { Inter, Playfair_Display, Montserrat } from 'next/font/google'
import './globals.css'

// Font setup
import { Inter, Playfair_Display, Montserrat } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfairDisplay = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair-display' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });


export const metadata = {
  title: 'ScentSutra | Premium Perfume Dupes',
  description: 'High-quality dupes of luxury perfumes at affordable prices.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable} ${montserrat.variable}`}>
      <body className="font-inter bg-secondary text-primary min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
}