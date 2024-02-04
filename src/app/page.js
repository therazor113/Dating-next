'use client'

import { useState } from 'react'
import HomeNavPill from 'components/pageRefs/homePage/NavPill'
import HomeCards from 'components/pageRefs/homePage/HomeCards'

import classes from './page.module.scss'

const Home = () => {
  const [navSelect, setNavSelect] = useState(0)

  return (
    <main className={classes.main}>
      <div className={classes.homeContainer}>
        <HomeNavPill
          navSelect={navSelect}
          setNavSelect={setNavSelect}
        />
        <HomeCards navSelect={navSelect} />
      </div>
    </main>
  )
}

export default Home
