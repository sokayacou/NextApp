import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Layout from '../../components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Preorder() {
  return (
    <>
        <Layout>

    
            <div>
            
                <p className='subTitle'>To pre-order, call 1-800-555-1212</p>

                <Link className='navLink' href='/'>
                    Back to home page
                </Link>

                {/* Template starts */}
               <div>
                    <Image 
                        src="/images/preorder.jpg"
                        height={425}
                        width={640}
                        alt='preorder'

                    />
                </div> 

                {/* Template ends */ }

                <Link className='navLink' href='/'>
                    Back to home page
                </Link>
            </div>

        </Layout>
    </>
  )
}
