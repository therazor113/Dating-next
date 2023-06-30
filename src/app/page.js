'use client'

import styles from './page.module.scss'
import { useState } from 'react'

const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <main className={styles.main}>
      <p>{count}</p>
      <input
        type='button'
        value='+'
        onClick={() => setCount(count + 1)}
      />
      <input
        type='button'
        value='-'
        onClick={() => setCount(count - 1)}
      />
      <input
        type='button'
        value='*'
        onClick={() => setCount(count * count)}
      />
    </main>
  )
}

export default Home
