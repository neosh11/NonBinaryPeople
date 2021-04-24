import Button from '../../Button'

const Intro = () => (
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
)

export default Intro
