import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '../../components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout>

        <div>
          
          <p className='subTitle'>An espresso maker that reads your mind</p>
          <Link 
            className='navLink'
            href='gallery'
          >
            <p>Click here to learn more...</p>
          </Link>

          <div className={styles.heroDiv}>
            <Image
              priority
              src="/images/hero.jpg"
              fill
              objet-fit='contain'
              alt="ESPectso 1000"
            />
          </div>
          <Link className='navLink'
            href='preorder'
            >
              Click to pre-order
            </Link>
        </div>

      </Layout>
    </>
  )
}
