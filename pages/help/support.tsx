import Support from '../../components/Help/Support'
import { navKeys } from '../../constants/PageDetails'
import General from '../../layouts/General'
import { pageRoutes } from '../../lib/routes'

export default function SupportPage() {
  return (
    <General
      title='Non Binary People Org'
      selectedNavKey={navKeys.HELP}
      description='Find support!'
      canonical={pageRoutes.helpSupport}
    >
      <div className='space-y-10 md:flex md:flex-col'>
        <Support />
      </div>
    </General>
  )
}