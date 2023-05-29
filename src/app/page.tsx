import Head from 'next/head'
import Link from 'next/link'
import type { MouseEventHandler } from 'react'

export default function Home() {

  return (
    <main className='flex min-h-screen bg-slate-100 flex-col items-center justify-between p-12'>
      <Head>
        <link rel='icon' type='image/svg+xml' href='/favicon/favicon.svg' />
      </Head>
      <div className='flex z-10 w-full max-w-5xl text-gray-900 items-center justify-between font-mono text-sm lg:flex'>
        <h1>Welcome to Chortle: Chores Made Simple</h1>
        <div>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded'>
            Login
          </button>
          <Link href='/login'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded'>
              Sign-up
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
