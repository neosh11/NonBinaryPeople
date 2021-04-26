import Support from '../../components/PageComponents/Help/Support'
import { navKeys } from '../../lib/pageDetails'
import General from '../../layouts/General'
import { pageRoutes } from '../../lib/routes'

export default function SupportPage() {
  return (
    <General
      title='Non Binary People Support'
      selectedNavKey={navKeys.HELP}
      description='Find support for non-binary people near you!'
      canonical={pageRoutes.helpSupport}
    >
      <div className='md:w-240 space-y-10 md:flex md:flex-col'>
        <Support />
      </div>
    </General>
  )
}
