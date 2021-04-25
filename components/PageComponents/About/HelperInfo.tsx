import { IWebsitePerson } from '../../../data/websiteManagers'
export default function HelperInfo({ person }: { person: IWebsitePerson }) {
  return <li>{person.name}</li>
}
