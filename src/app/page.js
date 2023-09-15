'use client'

import { useState } from 'react'

import styles from './page.module.scss'

const Home = () => {
  const [navSelect, setNavSelect] = useState(0)

  return (
    <main className={styles.main}>
      <div className={styles.navContainer}>
        <div
          className={styles.leftNav}
          onClick={() => setNavSelect(0)}
        >
          <h2 style={navSelect ? {} : { color: 'black' }}>
            Sign In
          </h2>
        </div>
        <div
          className={styles.rightNav}
          onClick={() => setNavSelect(1)}
        >
          <h2 style={navSelect ? { color: 'black' } : {}}>
            Register
          </h2>
        </div>
        <span
          className={styles.navSelected}
          style={navSelect ? { transform: 'translateX(100%)' } : {}}
        />
      </div>
    </main>
  )
}

export default Home
