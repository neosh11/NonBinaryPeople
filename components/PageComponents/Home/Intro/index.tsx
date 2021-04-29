import { pageRoutes } from '../../../../lib/routes'
import Button from '../../../Button'
import GetInTouchButton from '../../../Button/GetInTouchButton'
import Card from '../../../Card'
import Emoji, { EmojiType } from '../../../Emoji'

const Intro = () => (
  <>
    <Card>
      <div className='md:flex md:flex-col space-y-4 md:items-center'>
        <h1>Non-Binary People Org</h1>
        <h2>
          We&apos;re here to help raise awareness and support for non-binary people. <Emoji type={EmojiType.HEART} />{' '}
        </h2>
        <div className='md:space-x-4 md:flex md:space-y-0 space-y-4'>
          <Button color='blue' text={true} href={pageRoutes.about}>
            About us!
          </Button>
          <GetInTouchButton />
        </div>
      </div>
    </Card>
    <Card>
      <h2>Who is a non-binary person?</h2>
      <p>A non-binary person is a person who does not strictly identify as a male or female.</p>
      <p>
        Some people use <q>non-binary</q> as a specific label for their gender. Others call themselves a more specific
        gender identity under the non-binary umbrella.
      </p>
      This umbrella includes but is not limited to:
      <ul className='list-disc list-inside'>
        <li>Agender</li>
        <li>Androgyne</li>
        <li>Bigender</li>
        <li>Genderfluid</li>
        <li>Gender neutral</li>
        <li>Genderqueer</li>
        <li>Nonbinary</li>
      </ul>
    </Card>
  </>
)

export default Intro
