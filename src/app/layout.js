import 'styles/globals.scss'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
// Disabled autoAddCss since its imported above
config.autoAddCss = false

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
