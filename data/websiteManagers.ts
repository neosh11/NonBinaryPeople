export interface IWebsitePerson {
  name: string
  role?: string
  github?: string
  twitter?: string
  instagram?: string
  email?: string
  facebook?: string
  discord?: string
}

const neo: IWebsitePerson = {
  name: 'Neo',
  github: 'neosh11'
}

const zenbu: IWebsitePerson = {
  name: 'ZenbuZenvo',
  discord: 'ZenbuZenvo#7118'
}


const you: IWebsitePerson = {
  name: 'you',
  github: 'you',
  instagram: 'you',
  twitter: 'you',
  email: 'you@you.com',
  facebook: 'you'
}

export const creators: IWebsitePerson[] = [neo]

export const maintainers: IWebsitePerson[] = [you]

export const contentFinders: IWebsitePerson[] = [zenbu]

export const testers: IWebsitePerson[] = [you]
