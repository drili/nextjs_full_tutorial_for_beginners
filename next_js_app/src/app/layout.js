import './globals.css'
import { Inter, Roboto } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

import { ThemeProvider } from '@/context/ThemeContext'
import AuthProvider from '@/components/authprovider/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Create Next App New',
    description: 'This is a description generated by create next app',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider>
                    <AuthProvider>
                        <div className='container'>
                            <Navbar />
                            {children}
                            <Footer />
                        </div>
                    </AuthProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
