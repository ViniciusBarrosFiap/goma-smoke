import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'


const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '700']  
})

export const metadata: Metadata = {
  title: 'GomaSmoke',
  description: 'Melhor tabacaria de vinhedo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
