'use client'
import { navLinks } from '@/app/api/navlink'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useEffect, useRef, useState, useCallback } from 'react'
import NavLink from './Navigation/NavLink'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'

const Header: React.FC = () => {
  const [sticky, setSticky] = useState(false)
  const [navbarOpen, setNavbarOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  const sideMenuRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (sideMenuRef.current && !sideMenuRef.current.contains(event.target as Node)) {
      setNavbarOpen(false)
    }
  }

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleScroll])

  const isHomepage = pathname === '/'

  return (
    <header className={`fixed h-24 py-1 z-50 w-full transition-all duration-300 lg:px-0 px-4 ${
      sticky 
        ? "top-3 bg-white/95 dark:bg-black/95 backdrop-blur-md rounded-full shadow-lg" 
        : "top-0 bg-black/20 backdrop-blur-sm"
    }`}>
      <nav className={`container mx-auto max-w-8xl flex items-center justify-between py-4 duration-300 ${
        sticky ? "px-6" : ""
      }`}>
        <div className='flex justify-between items-center gap-2 w-full'>
          <div>
            <Link href='/' className="flex items-center gap-2">
              <span className={`text-2xl md:text-3xl font-bold italic bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent ${
                !sticky && isHomepage ? 'text-white' : ''
              }`}>
                Jubilee Clio
              </span>
            </Link>
          </div>
          
          <div className='flex items-center gap-2 sm:gap-6'>
            <button
              className='hover:cursor-pointer p-2 rounded-full hover:bg-white/10 transition-colors'
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Icon
                icon={'solar:sun-bold'}
                width={24}
                height={24}
                className={`dark:hidden block ${
                  isHomepage && !sticky ? 'text-white' : 'text-dark'
                }`}
              />
              <Icon
                icon={'solar:moon-bold'}
                width={24}
                height={24}
                className='dark:block hidden text-white'
              />
            </button>
            
            <div className={`hidden lg:flex items-center gap-6`}>
              <Link 
                href='/contactus' 
                className={`text-sm font-medium hover:text-primary transition-colors ${
                  isHomepage && !sticky 
                    ? 'text-white/90 hover:text-white' 
                    : 'text-dark/70 dark:text-white/70 hover:text-primary'
                }`}
              >
                Bespoke Office Spaces
              </Link>
              
              <Link 
                href='/contactus' 
                className={`text-sm font-medium hover:text-primary transition-colors ${
                  isHomepage && !sticky 
                    ? 'text-white/90 hover:text-white' 
                    : 'text-dark/70 dark:text-white/70 hover:text-primary'
                }`}
              >
                Curated Retail Spaces 
              </Link>
              
              <Link 
                href='/contactus' 
                className={`text-sm font-medium hover:text-primary transition-colors ${
                  isHomepage && !sticky 
                    ? 'text-white/90 hover:text-white' 
                    : 'text-dark/70 dark:text-white/70 hover:text-primary'
                }`}
              >
                Location
              </Link>
            </div>

            <div>
              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium hover:cursor-pointer border transition-all duration-300 ${
                  isHomepage && !sticky
                    ? 'text-white border-white/30 hover:bg-white/10'
                    : 'text-dark dark:text-white border-dark/20 dark:border-white/20 hover:bg-dark/5 dark:hover:bg-white/5'
                } ${sticky ? 'bg-primary text-white border-primary hover:bg-primary/90' : ''}`}
                aria-label='Toggle mobile menu'
              >
                <Icon icon={'ph:list'} width={20} height={20} />
                <span className='hidden sm:block text-sm'>Menu</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {navbarOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-40' />
      )}

      <div
        ref={sideMenuRef}
        className={`fixed top-0 right-0 h-full w-full bg-dark shadow-lg transition-transform duration-300 max-w-2xl ${
          navbarOpen ? 'translate-x-0' : 'translate-x-full'
        } z-50 px-20 overflow-auto no-scrollbar`}
      >
        <div className="flex flex-col h-full justify-between">
          <div className="">
            <div className='flex items-center justify-start py-10'>
              <button
                onClick={() => setNavbarOpen(false)}
                aria-label='Close mobile menu'
                className='bg-white p-3 rounded-full hover:cursor-pointer hover:bg-gray-100 transition-colors'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='none'
                    stroke='black'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            <nav className='flex flex-col items-start gap-4'>
              <ul className='w-full space-y-2'>
                {navLinks.map((item, index) => (
                  <NavLink key={index} item={item} onClick={() => setNavbarOpen(false)} />
                ))}
              </ul>
            </nav>
          </div>

          <div className='flex flex-col gap-4 my-8 text-white'>
            <p className='text-base font-normal text-white/60'>
              Contact Information
            </p>
            <Link 
              href="mailto:info@jubileeclio.com" 
              className='text-base font-medium text-inherit hover:text-primary transition-colors'
            >
              info@jubileeclio.com
            </Link>
            <Link 
              href="tel:+919876543210" 
              className='text-base font-medium text-inherit hover:text-primary transition-colors'
            >
              +91 98765 43210
            </Link>
            <p className='text-sm text-white/60 mt-2'>
              Sector 75, Mohali, Punjab
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header