'use client'

import useAPI from 'hooks/useAPI'
import styles from './page.module.scss'
import { useState } from 'react'

const Home = () => {
  const [data, setData] = useState('')
  const [handleFetch] = useAPI()

  const fetchData = async () => {
    const path = 'http://localhost:3000'
    const res = await handleFetch(path, 'GET')
    setData(res)
  }

  return (
    <main className={styles.main}>
      <input
        type='button'
        value='fetch Data'
        onClick={fetchData}
      />
      <p>{data}</p>
    </main>
  )
}

export default Home
