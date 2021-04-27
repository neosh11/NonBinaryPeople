import { ICommunity} from '../../../../data/communities'
import { CountryMap } from '../../../../data/countries'
import Card from '../../../Card'

interface Props {
  community: ICommunity
}

const CommunityCard = ({ community }: Props) => (
  <Card>
    <h3>
      <a href={community.url}>{community.name}</a>
    </h3>
    <h3>{CountryMap.get(community.country)}</h3>
    <h3>{community.city}</h3>
    <h3>{community.info}</h3>
  </Card>
)

export default CommunityCard
