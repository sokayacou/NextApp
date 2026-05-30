import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Source_Code_Pro, Ubuntu } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const ubuntuBold = Ubuntu({ 
  subsets: ['latin'] ,
  weight: "700"
})

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin']
})

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>ESPectso 1000 by ESP</title>
        <meta name="description" content="ESPectso 1000 by ESP" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/NextApp/images/favicon.ico" />
      </Head>

      <div className='topBand'>
        <p className={`mainTitle ${ubuntuBold.className}` }>Introducing ESPectso 1000</p>
      </div>

      { children }

      <div className={`footer ${sourceCodePro.className}` }>
        <hr />
        <p>Copyrights (C) 2023 ESP, Inc. All Rights Reserved.</p>
      </div>
    </>
  )
}
