import { ICommunity, CountryMap } from '../../../data/communities'
import Card from '../../Card'

interface Props {
  community: ICommunity
}

const CommunityCard = ({ community }: Props) => (
  <Card>
    <h3>{community.name}</h3>
    <h3>{CountryMap.get(community.country)}</h3>
    <h3>{community.city}</h3>
    <h3>{community.info}</h3>
    <a href={community.url}>Link</a>
  </Card>
)

export default CommunityCard
