import type { Metadata } from 'next'
import './globals.css';
import Footer from '../components/footer';
import Navigation from '../components/navbar';

// const inter = Inter({ subsets: ['latin'] })

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
