import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://asecalab.com'),
  title: 'ASE-CA LAB - Pruebas Mecánicas',
  description: 'Laboratorio de Pruebas Mecánicas - Asesoría y Capacitación de Ensayos Mecánicos',
  keywords: 'pruebas mecánicas, laboratorio, ensayos mecánicos, metalografía, microscopía óptica',
  authors: [{ name: 'ASE-CA LAB' }],
  creator: 'ASE-CA LAB',
  publisher: 'ASE-CA LAB',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://asecalab.com', // Cambia al dominio correcto si es diferente
    siteName: 'ASE-CA LAB',
    title: 'ASE-CA LAB - Laboratorio de Ensayos y Certificación',
    description: 'Laboratorio acreditado en ensayos metalográficos, mecánicos y de microscopía. Servicios de alta calidad certificados bajo la norma ISO/IEC 17025:2017.',
    images: [
      {
        url: '/og-aseca.jpg', // Asegúrate de tener esta imagen generada y optimizada
        width: 1200,
        height: 630,
        alt: 'ASE-CA LAB - Laboratorio de Ensayos y Certificación',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ASE-CA LAB - Laboratorio de Ensayos y Certificación',
    description: 'Servicios especializados en ensayos de materiales, certificaciones y capacitación industrial.',
    images: ['/og-aseca.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon/safari-pinned-tab.svg',
        color: '#1E3A44', // Azul corporativo ASE-CA LAB (puedes cambiarlo si usas otro)
      },
    ],
  },
  manifest: '/favicon/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'ASE-CA LAB',
  },
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body>{children}</body>
    </html>
  )
}
