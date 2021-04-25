import { externalContactLinks } from '../../../lib/routes'
import GetInTouchButton from '../../Button/GetInTouchButton'
import Card from '../../Card'

const About = () => (
  <>
    <Card>
      <div className='md:flex md:flex-col space-y-4 md:items-center'>
        <h1>About Non-Binary People Org</h1>
        <h2>This site was created to help non-binary people find resources, help and support</h2>
        <div className='md:space-x-4 md:flex md:space-y-0 space-y-4'>
          <GetInTouchButton />
        </div>
      </div>
    </Card>
    <Card>
      <p>The website is managed voluntarily, if you would like to work on it, feel free to get in touch.</p>

      <p>
        If you would like to make suggestions, you can either <a href={externalContactLinks.email}>contact us</a> or
        create a PR <a href={externalContactLinks.gitRepo}>here</a>
      </p>
    </Card>
  </>
)

export default About
