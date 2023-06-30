import 'styles/globals.scss'

export const metadata = {
  title: 'Dating-next app',
  description: 'Dating app using Next.js'
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
