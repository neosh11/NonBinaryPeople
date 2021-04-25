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
  DISCORD,
  FACEBOOK
}

export const OnlineGroupMap = new Map<number, string>([
  [OnlineGroup.REDDIT, 'Reddit'],
  [OnlineGroup.DISCORD, 'Discord'],
  [OnlineGroup.FACEBOOK, 'Facebook']
])

// Country
enum Country {
  GLOBAL,
  AUSTRALIA,
  USA,
  CANADA
}

export const CountryMap = new Map<number, string>([
  [Country.GLOBAL, 'Global'],

  [Country.AUSTRALIA, 'Australia'],
  [Country.USA, 'United States of America'],
  [Country.CANADA, 'Canada']
])

export const communities: ICommunity[] = [
  {
    name: 'TEST',
    country: Country.AUSTRALIA,
    city: 'Sydney',
    url: 'http://abc.abc',
    info: 'test information'
  }
]

export const onlineCommunities: IOCommunity[] = [
  // Reddit
  {
    name: 'r/Agender',
    group: OnlineGroup.REDDIT,
    location: Country.GLOBAL,
    url: 'https://www.reddit.com/r/agender',
    info: 'test information'
  },
  {
    name: 'r/Androgyny',
    group: OnlineGroup.REDDIT,
    location: Country.GLOBAL,
    url: 'https://www.reddit.com/r/androgyny',
    info: 'test information'
  },
  {
    name: 'r/Boyflux',
    group: OnlineGroup.REDDIT,
    location: Country.GLOBAL,
    url: 'https://www.reddit.com/r/Boyflux',
    info: 'test information'
  },

  // Facebook
  {
    name: 'Australian Nonbinary Community',
    group: OnlineGroup.FACEBOOK,
    location: Country.AUSTRALIA,
    url: 'https://www.facebook.com/groups/999718613439135/',
    info: 'safe space for any person who does not 100% identify with a binary gender and/or is questioning their gender'
  },

  {
    name: 'Personnes non-binaires du Québec',
    group: OnlineGroup.FACEBOOK,
    location: Country.CANADA,
    url: 'https://www.facebook.com/groups/999718613439135/',
    info: ''
  }
]
