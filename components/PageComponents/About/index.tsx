import { contentFinders, creators, maintainers, testers } from '../../../data/websiteManagers'
import { externalContactLinks } from '../../../lib/routes'
import GetInTouchButton from '../../Button/GetInTouchButton'
import Card from '../../Card'
import Emoji, { EmojiType } from '../../Emoji'
import HelperInfo from './HelperInfo'

const headClass = 'font-bold'
const About = () => (
  <>
    <Card>
      <div className='md:flex md:flex-col space-y-4 md:items-center'>
        <h1>About Non-Binary People Org</h1>
        <h2>
          This site was created to help non-binary people find resources, help and support!{' '}
          <Emoji type={EmojiType.HEART} />
        </h2>
        <div className='md:space-x-4 md:flex md:space-y-0 space-y-4'>
          <GetInTouchButton />
        </div>
      </div>
    </Card>
    <Card>
      <h2>Get Involved!</h2>
      <p>The website is managed voluntarily and any support will be appreciated!</p>

      <p>
        If you would like to make suggestions, you can either <a href={externalContactLinks.email}>contact us</a> or{' '}
        <a href={externalContactLinks.gitRepo}>create a PR</a>
      </p>
    </Card>

    {/* Credits */}

    <Card>
      <div className='space-y-4'>
        <h2>Made possible by:</h2>
        <div>
          <h3 className={headClass}>Creators</h3>
          <ul className='list-inside'>
            {creators.map((x, i) => (
              <HelperInfo key={'cr' + i} person={x} />
            ))}
          </ul>
        </div>
        <div>
          <h3 className={headClass}>Maintainers</h3>
          <ul className='list-inside'>
            {maintainers.map((x, i) => (
              <HelperInfo key={'main' + i} person={x} />
            ))}
          </ul>
        </div>
        <div>
          <h3 className={headClass}>Content Providers</h3>
          <ul className='list-inside'>
            {contentFinders.map((x, i) => (
              <HelperInfo key={'con' + i} person={x} />
            ))}
          </ul>
        </div>

        <div>
          <h3 className={headClass}>Testers</h3>
          <ul className='list-inside'>
            {testers.map((x, i) => (
              <HelperInfo key={'tes' + i} person={x} />
            ))}
          </ul>
        </div>
      </div>
    </Card>
  </>
)

export default About
