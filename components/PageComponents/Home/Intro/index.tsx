import { externalContactLinks, pageRoutes } from '../../../../lib/routes'
import Button from '../../../Button'
import GetInTouchButton from '../../../Button/GetInTouchButton'
import Card from '../../../Card'

const Intro = () => (
  <>
    <Card>
      <div className='md:flex md:flex-col space-y-4 md:items-center'>
        <h1>Non-Binary People Org</h1>
        <h2>We&apos;re here to help raise awareness and support for non-binary people </h2>
        <div className='md:space-x-4 md:flex md:space-y-0 space-y-4'>
          <Button color='blue' text={true} href={pageRoutes.about}>
            About us!
          </Button>
          <GetInTouchButton />
        </div>
      </div>
    </Card>
    <Card>
      <p>Non-binary is any gender identity that is not strictly male or female all the time.</p>
      <p>
        Some people use <q>non-binary</q> as a specific label for their gender. Others call themselves a more specific
        gender identity under the non-binary umbrella. Many people who call themselves non-binary also consider
        themselves genderqueer.
      </p>
      <p>
        However, the terms have different meanings and connotations: genderqueer means any gender identity or expression
        which is, itself, queer.
      </p>
    </Card>
  </>
)

export default Intro
