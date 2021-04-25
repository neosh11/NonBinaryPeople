export interface ICommunity {
  name: string
  country: Country
  city: string
  url: string
  info: string
}

export interface IOCommunity {
  name: string
  group: OnlineGroup
  url: string
  info: string
  location?: Country
}

// ONLINE
enum OnlineGroup {
  REDDIT,
  DISCORD
}

export const OnlineGroupMap = new Map<number, string>([
  [OnlineGroup.REDDIT, 'Reddit'],
  [OnlineGroup.DISCORD, 'Discord']
])

// Country
enum Country {
  AUSTRALIA,
  USA
}

export const CountryMap = new Map<number, string>([
  [Country.AUSTRALIA, 'Australia'],
  [Country.USA, 'United States of America'],
])

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

export const onlineCommunities: IOCommunity[] = [
  {
    name: 'r/Agender',
    group: OnlineGroup.REDDIT,
    url: 'https://www.reddit.com/r/agender',
    info: 'test information'
  },
  {
    name: 'r/Androgyny',
    group: OnlineGroup.REDDIT,
    url: 'https://www.reddit.com/r/androgyny',
    info: 'test information'
  },
  {
    name: 'r/Boyflux',
    group: OnlineGroup.REDDIT,
    url: 'https://www.reddit.com/r/Boyflux',
    info: 'test information'
  }
]
