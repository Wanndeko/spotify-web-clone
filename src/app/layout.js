import './globals.css'


export const metadata = {
  title: 'spotfy-web-clone',
  description: 'clone do app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className='bg-black text-gray-100 p-2'>{children}</body>
    </html>
  )
}
