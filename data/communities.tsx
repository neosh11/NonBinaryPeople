export interface ICommunity {
  name: string
  country: Country
  city: string
  url: string
  info: string
}

enum Country {
  AUSTRALIA
}

export const CountryMap = new Map<number, string>([[Country.AUSTRALIA, 'Australia']])

export const communities: ICommunity[] = [
  {
    name: 'TEST',
    country: Country.AUSTRALIA,
    city: 'Perth',
    url: 'http://abc.abc',
    info: 'test information'
  },
  {
    name: 'TEST2',
    country: Country.AUSTRALIA,
    city: 'Sydney',
    url: 'http://abc.abc',
    info: 'Test information'
  }
]
