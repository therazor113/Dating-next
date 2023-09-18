'use client'

import { useState } from 'react'
import HomeNavPill from 'components/pageRefs/homePage/NavPill'
import SignInCard from 'components/pageRefs/homePage/SignInCard'
import RegisterCard from 'components/pageRefs/homePage/RegisterCard'

import classes from './page.module.scss'

const Home = () => {
  const [navSelect, setNavSelect] = useState(0)

  return (
    <main className={classes.main}>
      <HomeNavPill
        navSelect={navSelect}
        setNavSelect={setNavSelect}
      />
      {navSelect ? <RegisterCard /> : <SignInCard />}
    </main>
  )
}

export default Home
