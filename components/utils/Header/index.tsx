import { useState } from 'react'
import { navKeys, pageNames } from '../../../lib/pageDetails'
import { pageRoutes } from '../../../lib/routes'

const Header = ({ selectedKey }: { selectedKey: navKeys }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const getSelectedDesktop = (key: navKeys) => {
    if (key === selectedKey) return 'bg-prim text-link-on px-3 py-2 rounded-md text-sm font-medium text-center'
    return 'text-link-off bg-sec hover:bg-prim hover:text-link-on px-3 py-2 rounded-md text-sm font-medium text-center'
  }
  const getSelectedMob = (key: navKeys) => {
    if (key === selectedKey) return 'bg-sec text-prim block px-3 py-2 rounded-md text-base font-medium'
    return 'text-sec hover:bg-sec hover:text-prim block px-3 py-2 rounded-md text-base font-medium'
  }

  return (
    <>
      <div className='h-16 md:h-0' />
      <nav
        className={`${
          menuOpen ? 'inset-0 bg-ter bg-opacity fixed opacity-90 shadow-md' : null
        } bg-ter fixed md:relative shadow-md z-40 rounded-br-2xl md:rounded-none`}
      >
        <div className='px-4 sm:px-6 lg:px-8 '>
          {/* if not visible then remove grid and justify huhu */}
          <div className='h-16 grid md:justify-items-center'>
            <div className='flex items-center'>
              <div className='hidden md:block'>
                <div className='grid grid-cols-4 gap-4'>
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                  <a href={pageRoutes.home} className={getSelectedDesktop(navKeys.HOME)}>
                    {pageNames.home}
                  </a>
                  <a href={pageRoutes.about} className={getSelectedDesktop(navKeys.ABOUT)}>
                    {pageNames.about}
                  </a>
                  <a href={pageRoutes.blog} className={getSelectedDesktop(navKeys.BLOG)}>
                    {pageNames.blog}
                  </a>
                  <a href={pageRoutes.help} className={getSelectedDesktop(navKeys.HELP)}>
                    {pageNames.help}
                  </a>
                </div>
              </div>
            </div>

            <div className='flex md:hidden'>
              {/* <!-- Mobile menu button --> */}
              <button
                onClick={() => {
                  setMenuOpen(!menuOpen)
                }}
                className='inline-flex items-center justify-center p-2 text-sec hover:text-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-white'
              >
                <span className='sr-only'>Open main menu</span>
                {/* <!--Heroicon name: menu Menu open: "hidden", Menu closed: "block" --> */}
                <svg
                  className={`${menuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
                </svg>
                {/* <!--Heroicon name: x Menu open: "block", Menu closed: "hidden" --> */}
                <svg
                  className={`${menuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* <!--Mobile menu, Open: "block", closed: "hidden"--> */}
        <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <a href={pageRoutes.home} className={getSelectedMob(navKeys.HOME)}>
              {pageNames.home}
            </a>
            <a href={pageRoutes.about} className={getSelectedMob(navKeys.ABOUT)}>
              {pageNames.about}
            </a>
            <a href={pageRoutes.blog} className={getSelectedMob(navKeys.BLOG)}>
              {pageNames.blog}
            </a>
            <a href={pageRoutes.help} className={getSelectedMob(navKeys.HELP)}>
              {pageNames.help}
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
