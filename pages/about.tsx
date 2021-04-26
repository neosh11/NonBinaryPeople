import { navKeys } from '../lib/pageDetails'
import General from '../layouts/General'
import { pageRoutes } from '../lib/routes'
import About from '../components/PageComponents/About'

export default function AboutPage() {
  return (
    <General
      title='About Non Binary People Org'
      selectedNavKey={navKeys.ABOUT}
      description="Our mission and our goal"
      canonical={pageRoutes.about}
    >
      <div className='md:w-240 space-y-10 md:flex md:flex-col'>
        <About />
      </div>
    </General>
  )
}
