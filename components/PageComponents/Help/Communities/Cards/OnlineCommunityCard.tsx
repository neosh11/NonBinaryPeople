import { IOCommunity, OnlineGroupMap } from '../../../../../data/communities'
import Card from '../../../../Card'

interface Props {
  community: IOCommunity
}

const OnlineCommunityCard = ({ community }: Props) => (
  <Card>
    <h3>
      <a href={community.url}>{community.name}</a>{' '}
    </h3>
    <h3>{OnlineGroupMap.get(community.group)}</h3>
    <h3>{community.info}</h3>
  </Card>
)

export default OnlineCommunityCard
