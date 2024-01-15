import { Inter } from 'next/font/google'
import './ui/globals.css'
import { NextAuthProvider } from '../next-auth-provider/provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lama Dev Next.js Admin Dashboard',
  description: 'Next.js Tutorial',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
			<NextAuthProvider>
      <body className={inter.className}>{children}</body>
    </NextAuthProvider>
    </html>
  )
}
