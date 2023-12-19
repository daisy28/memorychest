import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css';
import Header from '../component/header';
import Footer from '../component/footer';
import Navigation from '../component/navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Memory Chest',
  description: 'Memory Chest is a platform dedicated to unlocking the secrets of the past, bringing historical events and documentaries to life. Our mission is to preserve and share the memories of the world, fueling curiosity and inspiring a deeper understanding of our shared history.',
  icons: {
    icon: "/IMG-20230830-WA0026.jpg"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={``}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
