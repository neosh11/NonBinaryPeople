export interface IWebsitePerson {
  name: string
  role?: string
  github?: string
  twitter?: string
  website?: string
}

const neo: IWebsitePerson = {
  name: 'Neo',
  github: 'neosh11'
}

const you: IWebsitePerson = {
  name: 'you',
  github: 'you'
}

export const creators: IWebsitePerson[] = [neo, you]

export const maintainers: IWebsitePerson[] = [neo]

export const contentFinders: IWebsitePerson[] = [neo]
