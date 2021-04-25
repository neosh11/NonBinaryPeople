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
  facebook:'you'
}

export const creators: IWebsitePerson[] = [neo, you]

export const maintainers: IWebsitePerson[] = [neo]

export const contentFinders: IWebsitePerson[] = [neo]

export const testers: IWebsitePerson[] = [you]

