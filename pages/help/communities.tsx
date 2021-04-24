import Communities from '../../components/Help/Communities'
import { navKeys } from '../../constants/PageDetails'
import General from '../../layouts/General'
import { pageRoutes } from '../../lib/routes'

export default function Home() {
  return (
    <General
      iconHref='/ico/wave.ico'
      title='Non Binary People Org'
      selectedNavKey={navKeys.HELP}
      description='Find a community new you!'
      canonical={pageRoutes.helpCommunities}
    >
      <div className='space-y-10 md:flex md:flex-col'>
        <Communities />
      </div>
    </General>
  )
}
