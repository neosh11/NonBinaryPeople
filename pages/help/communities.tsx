import Communities from '../../components/PageComponents/Help/Communities'
import { navKeys } from '../../lib/pageDetails'
import General from '../../layouts/General'
import { pageRoutes } from '../../lib/routes'

export default function CommunitiesPage() {
  return (
    <General
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
