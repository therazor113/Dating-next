'use client'

import HomeNavPill from 'components/pageRefs/homePage/NavPill'
import { useState } from 'react'

import styles from './page.module.scss'

const Home = () => {
  const [navSelect, setNavSelect] = useState(0)

  return (
    <main className={styles.main}>
      <HomeNavPill
        navSelect={navSelect}
        setNavSelect={setNavSelect}
      />
    </main>
  )
}

export default Home
