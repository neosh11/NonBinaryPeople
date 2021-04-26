import { pageNames } from '../../../lib/pageDetails'
import { pageRoutes } from '../../../lib/routes'

const col = 'text-prim'
const Footer = () => {
  return (
    <nav className='bg-sec grid justify-items-center shadow-inner'>
      <div className=' max-w-7xl text-tex-off text-sm font-medium p-6 sm:px-6 lg:px-8 grid grid-cols-4 gap-4'>
        <div className='col-span-1'>
          <a className={col} href={pageRoutes.home}>
            {pageNames.home}
          </a>
        </div>
        <div className='col-span-1'>
          <a className={col} href={pageRoutes.about}>
            {pageNames.about}
          </a>
        </div>
        <div className='col-span-1'>
          <a className={col} href={pageRoutes.blog}>
            {pageNames.blog}
          </a>
        </div>
        <div className='col-span-1'>
          <a className={col} href={pageRoutes.help}>
            {pageNames.help}
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Footer
