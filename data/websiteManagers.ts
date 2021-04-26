export interface IWebsitePerson {
  name: string
  role?: string
  github?: string
  twitter?: string
  instagram?: string
  email?: string
  facebook?: string
}

const neo: IWebsitePerson = {
  name: 'Neo',
  github: 'neosh11'
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

export const contentFinders: IWebsitePerson[] = [you]

export const testers: IWebsitePerson[] = [you]
