import Card from '../../components/Card'
import { navKeys, pageNames } from '../../lib/pageDetails'
import General from '../../layouts/General'
import { pageRoutes } from '../../lib/routes'

const buttonClass = 'text-link-off bg-sec hover:bg-prim hover:text-link-on px-3 py-2 rounded-md text-sm font-medium'
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
            <a className={buttonClass} href={pageRoutes.helpCommunities}>
              {pageNames.communities}
            </a>
          </div>
        </Card>

        <Card>
          <div className='md:flex md:flex-col space-y-4 md:items-center'>
            <h2>Seeking help!</h2>
            <a className={buttonClass} href={pageRoutes.helpSupport}>
              {pageNames.support}
            </a>
          </div>
        </Card>

        <Card>
          <div className='md:flex md:flex-col space-y-4 md:items-center'>
            <h2>Get Educated!</h2>
            <a className={buttonClass} href={pageRoutes.helpKnowledge}>
              {pageNames.knowledge}
            </a>
          </div>
        </Card>
      </div>
    </General>
  )
}
