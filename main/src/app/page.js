import Image from 'next/image'
import Logo from '../../components/Logo'
import { Button } from '@/components/ui/button'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import Header from '../../components/Header'
import localFont from 'next/font/local'
import { cn } from '@/lib/utils'
import { AiOutlineCaretRight } from "react-icons/ai";




const headingFont = localFont({
  src: '../../public/fonts/font.woff2'
})

export default function Home() {
  return (
    <>
    <Header />
    <main>
      <section className="pt-32">
        <div className="max-w-md mb-8 mt-10 mx-auto">
          <h1 className={cn("text-6xl text-center font-bold", headingFont.className)}>
            Your one link<br/> for everything
          </h1>
          <h2 className={cn("text-gray-500 text-center  text-2xl mt-6", headingFont.className)}>
            Share your links, social profiles,<br /> contact info and more on one page
          </h2>
          <AiOutlineCaretRight size={90} className="ml-6" />
          <form className='flex ml-32 -mt-16 items-center'>
            <input placeholder='username' className='flex h-10  shadow-lg w-64 '>
              
            </input>
          </form>
          <Button className="flex items-center ml-32 bg-blue-300 mt-3 h-8 w-64 shadow-lg hover:bg-black over:border-white hover:text-white outline">Join For Free</Button>
        </div>

        
      </section>
    </main>

  
    </>



  )
}
