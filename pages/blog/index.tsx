import General from '../../layouts/General'
import { navKeys } from '../../lib/pageDetails'
import { pageRoutes } from '../../lib/routes'

export default function BlogPage() {
  return (
    <General
      title='Non Binary People Org'
      selectedNavKey={navKeys.BLOG}
      description="Hi we're here to help people get a better understanding of non-binary people"
      canonical={pageRoutes.blog}
    >
      <div className='space-y-10 md:flex md:flex-col'>
        This page is a WIP.
        <br />
      </div>
    </General>
  )
}
