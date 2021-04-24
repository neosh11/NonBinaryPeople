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

        <p>Nonbinary (non-binary) is any gender identity that is not strictly male or female all the time.</p>
        <p>
          Some people use <q>nonbinary</q> as a specific label for their gender. Others call themselves a more specific
          gender identity under the nonbinary umbrella. Many people who call themselves nonbinary also consider
          themselves genderqueer.
        </p>
        <p>
          However, the terms have different meanings and connotations: genderqueer means any gender identity or
          expression which is, itself, queer.
        </p>
      </div>
    </General>
  )
}
