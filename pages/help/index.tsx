import { navKeys, pageNames } from '../../constants/PageDetails'
import General from '../../layouts/General'
import { pageRoutes } from '../../lib/routes'

const buttonClass = 'text-link-off bg-sec hover:bg-prim hover:text-link-on px-3 py-2 rounded-md text-sm font-medium'
export default function Home() {
  return (
    <General
      iconHref='/ico/wave.ico'
      title='Non Binary People Org'
      selectedNavKey={navKeys.HELP}
      description='Find a community new you!'
      canonical={pageRoutes.help}
    >
      <div className='space-y-10 md:flex md:flex-col'>
        <h1>Helpful Links</h1>
        <a className={buttonClass} href={pageRoutes.helpCommunities}>
          {pageNames.communities}
        </a>
      </div>
    </General>
  )
}
