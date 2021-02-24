import Head from 'next/head'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'

import styles from '../styles/pages/home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />
      <section>
        <div className=''>
          <Profile />
        </div>
        <div></div>
      </section>
    </div>
  )
}
