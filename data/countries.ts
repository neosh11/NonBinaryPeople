// Country
export enum Country {
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
