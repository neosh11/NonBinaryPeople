import Communities from '../../components/PageComponents/Help/Communities'
import { navKeys } from '../../lib/pageDetails'
import General from '../../layouts/General'
import { pageRoutes } from '../../lib/routes'

export default function CommunitiesPage() {
  return (
    <General
      title='Find a Non Binary Community Near You'
      selectedNavKey={navKeys.HELP}
      description='We have compiled a list of non binary related communities which you can become a part of!'
      canonical={pageRoutes.helpCommunities}
    >
      <div className='md:w-240 space-y-10 md:flex md:flex-col'>
        <Communities />
      </div>
    </General>
  )
}
