import Image from 'next/image'
import Logo from './Logo'
import { Button } from '@/components/ui/button'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

export default function Header() {
  return (
    <header>
    <div className='fixed top-0 w-full h-24 px-4 border-b shadow-sm bg-white flex items-center'>
      <div className='md:max-w-screen-2xl mx-auto flex items-center w-full justify-between'>
        <Logo />
        <div className='space-x-4 md:block md:w-auto flex items-center justify-between w-full'>
          <Link href="/login" className={buttonVariants({variant: "outline", className: "text-base shadow-lg hover:bg-black hover:text-white"})}>
          Login
          </Link>
    
          <Link href="/login" className={buttonVariants({variant: "outline", className: "text-base bg-black shadow-lg text-white hover:bg-white hover:text-black"})}>
          Create An Account
          </Link>
          </div>
          </div>

      </div>
      </header>

  
  )
}
