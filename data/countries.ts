// Country
export enum Country {
  GLOBAL,
  AUSTRALIA,
  CANADA,
  USA,
  UK
}

export const CountryMap = new Map<number, string>([
  [Country.GLOBAL, 'Global'],
  [Country.AUSTRALIA, 'Australia'],
  [Country.CANADA, 'Canada'],
  [Country.UK, 'United Kingdom'],
  [Country.USA, 'United States of America']
])
