import Card from '../../components/Card'
import { navKeys, pageNames } from '../../lib/pageDetails'
import General from '../../layouts/General'
import { pageRoutes } from '../../lib/routes'
import Button from '../../components/Button'

export default function Home() {
  return (
    <General
      title='Help for Non-Binary People'
      selectedNavKey={navKeys.HELP}
      description='Check out the following to get involved or find support!'
      canonical={pageRoutes.help}
    >
      <div className='md:w-240 space-y-10 md:flex md:flex-col md:items-center'>
        <h1>Helpful Links</h1>
        <Card>
          <div className='md:flex md:flex-col space-y-4 md:items-center'>
            <h2>{pageNames.communities}</h2>
            <Button color='purple' href={pageRoutes.helpCommunities}>
              {pageNames.communities}{' '}
            </Button>
          </div>
        </Card>

        <Card>
          <div className='md:flex md:flex-col space-y-4 md:items-center'>
            <h2>Seeking help!</h2>
            <Button color='purple' href={pageRoutes.helpSupport}>
              {pageNames.support}
            </Button>
          </div>
        </Card>

        <Card>
          <div className='md:flex md:flex-col space-y-4 md:items-center'>
            <h2>Get Educated!</h2>
            <Button color='purple' href={pageRoutes.helpKnowledge}>
              {pageNames.knowledge}
            </Button>
          </div>
        </Card>
      </div>
    </General>
  )
}
