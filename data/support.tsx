import { Country } from './countries'

export interface ISupport {
  name: string
  country: Country
  url: string
  info: string
}

export const supportGroups: ISupport[] = [
  {
    country: Country.AUSTRALIA,
    name: 'ReachOut',
    url: 'https://au.reachout.com/articles/lgbtqi-support-services-and-groups',
    info: 'Support is available for LGBTQIA+ young people from diverse backgrounds'
  }
]
