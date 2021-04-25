import Card from '../../../Card'
import { ISupport } from '../../../../data/support'
import { CountryMap } from '../../../../data/countries'

interface Props {
  support: ISupport
}

const SupportCard = ({ support }: Props) => (
  <Card>
    <h3>
      <a href={support.url}>{support.name}</a>
    </h3>
    <h3>{CountryMap.get(support.country)}</h3>
    <h3>{support.info}</h3>
  </Card>
)

export default SupportCard
