import Head from 'next/head'
import Link from 'next/link'
import type { MouseEventHandler } from 'react'

export default function Login() {
  return (
    <main className='flex min-h-screen bg-slate-100 flex-col items-center justify-center p-12'>
      <div className='flex flex-col z-10 w-full max-w-lg p-8 bg-white shadow-md text-gray-900 items-start font-mono text-sm lg:flex'>
        <form className='w-full'>
          <div className='mb-4'>
            <label
              className='block text-grey-darker text-sm mb-2'
              htmlFor='email'
            >
              E-mail
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker'
              id='email'
              type='email'
              placeholder='you@domain.com'
            ></input>
          </div>
          <div className='mb-4'>
            <label
              className='block text-grey-darker text-sm mb-2'
              htmlFor='password'
            >
              Password
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker'
              id='password'
              type='password'
              placeholder='********'
            ></input>
          </div>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type='submit'>Login</button>
        </form>
      </div>
    </main>
  )
}
