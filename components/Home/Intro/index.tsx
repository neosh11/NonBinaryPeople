import Button from '../../Button'
import Card from '../../Card'

const Intro = () => (
  <>
    <Card>
      <div className='md:flex md:flex-col space-y-4 md:items-center'>
        <h1>Hi We&apos;re the Nonbinary People Org</h1>
        <h2>Here to help raise awareness and support for nonbinary people </h2>
        <div className='md:space-x-4 md:flex md:space-y-0 space-y-4'>
          <Button color='blue' text={true}>
            About us!
          </Button>
          <Button color='black' text={true}>
            Get in touch!
          </Button>
        </div>
      </div>
    </Card>
    <Card>
      <p>Nonbinary (non-binary) is any gender identity that is not strictly male or female all the time.</p>
      <p>
        Some people use <q>nonbinary</q> as a specific label for their gender. Others call themselves a more specific
        gender identity under the nonbinary umbrella. Many people who call themselves nonbinary also consider themselves
        genderqueer.
      </p>
      <p>
        However, the terms have different meanings and connotations: genderqueer means any gender identity or expression
        which is, itself, queer.
      </p>
    </Card>
  </>
)

export default Intro
