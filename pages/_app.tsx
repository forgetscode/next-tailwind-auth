import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <nav className=' py-4 px-12 border-b border-gray-300'>
        <Link href="/">
          <p className="text-base leading-6 font-medium hover:text-gray-600 transition-colors duration-200 py-2">Home</p>
        </Link>
        <Link className='ml-4' href="/auth">
          <p className="text-base leading-6 font-medium hover:text-gray-600 transition-colors duration-200 py-2 ">Profile</p>
        </Link>
        <Link className='ml-4' href="/protected">
          <p className="text-base leading-6 font-medium hover:text-gray-600 transition-colors duration-200 py-2 ">Protected</p>
        </Link>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}
