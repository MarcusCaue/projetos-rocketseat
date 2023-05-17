import './globals.css'
import { ReactNode } from 'react'

// Utilização do Nextfont para evitar o "Layout Shift", uma vez que o Next renderiza o HTML no server side
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'NLW Spacetime',
  description: 'Projeto desenvolvido ao longo do NLW Spacetime da Rocketseat',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.variable} font-sans ${baiJamjuree.variable} bg-gray-900 font-alter text-gray-100 `}
      >
        {children}
      </body>
    </html>
  )
}
