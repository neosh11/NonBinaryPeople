import Intro from '../components/Home/Intro'
import { navKeys } from '../constants/PageDetails'
import General from '../layouts/General'

export default function Home() {
  return (
    <General
      iconHref='/ico/wave.ico'
      title='Non Binary People Org'
      selectedNavKey={navKeys.HOME}
      description="Hi we're here to help people get a better understanding of non-binary people"
      canonical='/'
    >
      <div className='space-y-10 md:flex md:flex-col'>
        <Intro />
      </div>
    </General>
  )
}
