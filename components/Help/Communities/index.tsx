import { pageNames } from '../../../constants/PageDetails'
import { communities } from '../../../data/communities'
import Button from '../../Button'
import Card from '../../Card'
import CommunityCard from './CommunityCard'

const Communities = () => (
  <>
    <Card>
      <div className='md:flex md:flex-col space-y-4 md:items-center'>
        <h1>{pageNames.communities}</h1>
        <h2>There are plenty of communities you can become a part of!</h2>
        <div className='md:space-x-4 md:space-y-0 space-y-4'>
          If you want to list your own community
          <Button color='black' text={true}>
            Get in touch!
          </Button>
        </div>
      </div>
    </Card>

    {communities.map((x, i) => {
      return <CommunityCard key={i} community={x} />
    })}
  </>
)

export default Communities
