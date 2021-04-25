import { IWebsitePerson } from '../../../data/websiteManagers'
import { externalSocial } from '../../../lib/routes'

const ExistDisplay = ({ label, obj, href = null }) =>
  (obj &&
    ((!href && <div>{obj}</div>) || (
      <div>
        <a href={href}>{label}</a>
      </div>
    ))) ||
  null

export default function HelperInfo({ person }: { person: IWebsitePerson }) {
  return (
    <li className='space-x-4 md:flex'>
      <div>{person.name}</div>
      <ExistDisplay label='github' obj={person.github} href={externalSocial.github + person.github} />
      <ExistDisplay label='twitter' obj={person.twitter} href={externalSocial.twitter + person.twitter} />
      <ExistDisplay label='instagram' obj={person.instagram} href={externalSocial.instagram + person.instagram} />
      <ExistDisplay label='email' obj={person.email} href={'mailto:' + person.email} />
      <ExistDisplay label='facebook' obj={person.email} href={externalSocial.facebook + person.facebook} />
    </li>
  )
}
