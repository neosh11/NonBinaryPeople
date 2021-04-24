import { pageRoutes } from '../../../lib/routes'

const Footer = () => {
  return (
    <nav className='bg-sec grid justify-items-center'>
      <div className=' max-w-7xl text-tex-off text-sm font-medium p-6 sm:px-6 lg:px-8 grid grid-cols-4 gap-4'>
        <div className='col-span-1'>
          <a href={pageRoutes.home}>Home</a>
        </div>
        <div className='col-span-1'>
          <a href='#'>About</a>
        </div>

        <div className='col-span-1'>Blog</div>
        <div className='col-span-1'>Help Links</div>
      </div>
    </nav>
  )
}

export default Footer
