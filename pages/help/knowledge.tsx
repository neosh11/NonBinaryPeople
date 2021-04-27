import { navKeys } from '../../lib/pageDetails'
import General from '../../layouts/General'
import { pageRoutes } from '../../lib/routes'
import Knowledge from '../../components/PageComponents/Help/Knowledge'

export default function KnowledgePage() {
  return (
    <General
      title='Get information about NB people'
      selectedNavKey={navKeys.HELP}
      description='We have compiled a list of non binary related information sources you can access'
      canonical={pageRoutes.helpKnowledge}
    >
      <div className='md:w-240 space-y-10 md:flex md:flex-col'>
        <Knowledge />
      </div>
    </General>
  )
}
