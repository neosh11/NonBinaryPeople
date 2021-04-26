import { Country } from './countries'

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

export const communities: ICommunity[] = [
  {
    name: 'Non-Binary Glasgow',
    country: Country.UK,
    city: 'Glasgow',
    url: 'https://www.facebook.com/groups/905194806188423/',
    info: 'A group for non-binary people in Glasgow to be chill and have a cool rad time.'
  },
  {
    name: 'Non-Binary Scotland',
    country: Country.UK,
    city: 'Scotland',
    url: 'https://www.facebook.com/groups/nonbinaryscotland/',
    info:
      'provides support and social opportunities for people who either self-identify as outwith the gender binary of male/man and female/woman or are questioning whether they might be.'
  }
]

export const onlineCommunities: IOCommunity[] = [
  // Reddit
  {
    name: 'r/Agender',
    group: OnlineGroup.REDDIT,
    location: Country.GLOBAL,
    url: 'https://www.reddit.com/r/agender',
    info: 'A subreddit for agender, genderless and neutrois people.'
  },
  {
    name: 'r/Androgyny',
    group: OnlineGroup.REDDIT,
    location: Country.GLOBAL,
    url: 'https://www.reddit.com/r/androgyny',
    info: 'Androgyny is a non-binary gender identity in between male and female.'
  },
  {
    name: 'r/Boyflux',
    group: OnlineGroup.REDDIT,
    location: Country.GLOBAL,
    url: 'https://www.reddit.com/r/Boyflux',
    info:
      'Discussion, memes, and a safe place for those who identify as "boyflux", meaning "experiencing a connection to the male gender with varying intensity"'
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
    url: 'https://www.facebook.com/groups/1636047260006794/',
    info: ''
  }
]
