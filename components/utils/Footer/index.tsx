import { pageNames } from '../../../constants/PageDetails'
import { pageRoutes } from '../../../lib/routes'

const Footer = () => {
  return (
    <nav className='bg-sec grid justify-items-center shadow-inner'>
      <div className=' max-w-7xl text-tex-off text-sm font-medium p-6 sm:px-6 lg:px-8 grid grid-cols-4 gap-4'>
        <div className='col-span-1'>
          <a href={pageRoutes.home}>{pageNames.home}</a>
        </div>
        <div className='col-span-1'>{pageNames.about}</div>
        <div className='col-span-1'>{pageNames.blog}</div>
        <div className='col-span-1'>
          <a href={pageRoutes.help}>{pageNames.help}</a>
        </div>
      </div>
    </nav>
  )
}

export default Footer
