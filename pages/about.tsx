import { navKeys } from '../lib/pageDetails'
import General from '../layouts/General'
import { pageRoutes } from '../lib/routes'
import About from '../components/PageComponents/About'

export default function AboutPage() {
  return (
    <General
      title='Non Binary People Org'
      selectedNavKey={navKeys.HOME}
      description="Hi we're here to help people get a better understanding of non-binary people"
      canonical={pageRoutes.home}
    >
      <div className='space-y-10 md:flex md:flex-col'>
          <About/>
      </div>
    </General>
  )
}
