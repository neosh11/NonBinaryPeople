import { Country } from './countries'
export interface ISupport {
  name: string
  country: Country
  url: string
  info: string
}

const supportPhones: ISupport[] = [
  {
    country: Country.USA,
    name: 'Trans Lifeline U.S',
    url: 'tel:18775658860',
    info: '1-877-565-8860 (in English & en español)'
  },
  {
    country: Country.CANADA,
    name: 'Trans Lifeline Canada',
    url: 'tel:18773306366',
    info: '1-877-330-6366'
  },
  {
    country: Country.CANADA,
    name: 'Interligne (Québec)',
    url: 'tel:18885051010',
    info: '1-888-505-1010 (en français)'
  },
  {
    country: Country.UK,
    name: 'National Trans 24h Helpline (UK)',
    url: 'tel:07527524034',
    info: '07527 524034'
  },

  {
    country: Country.UK,
    name: 'MindLine Trans+ (UK)',
    url: 'tel:01179800381',
    info: '0117 980 0381, open Monday and Friday from 8pm to midnight'
  },
  {
    country: Country.AUSTRALIA,
    name: 'QLife',
    url: 'tel:1800184527',
    info: '1800 184 527 open every day from 3pm to midnight'
  },
  {
    country: Country.NZ,
    name: 'OUTLine',
    url: 'tel:08006885463',
    info: '0800 688 5463, open everyday from 6pm to 9pm'
  }
]

supportPhones.forEach(x => (x.name = '(PHONE) ' + x.name))

export const supportGroups: ISupport[] = [
  {
    country: Country.AUSTRALIA,
    name: 'ReachOut',
    url: 'https://au.reachout.com/articles/lgbtqi-support-services-and-groups',
    info: 'Support is available for LGBTQIA+ young people from diverse backgrounds'
  },

  ...supportPhones
]
