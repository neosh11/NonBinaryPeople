import Blog from '../../components/PageComponents/Blog'
import General from '../../layouts/General'
import { navKeys } from '../../lib/pageDetails'
import { pageRoutes } from '../../lib/routes'

export default function BlogPage() {
  return (
    <General
      title='Non Binary People Blog'
      selectedNavKey={navKeys.BLOG}
      description="Stories from our people"
      canonical={pageRoutes.blog}
    >
      <div className='md:w-240 space-y-10 md:flex md:flex-col'>
        <Blog />
      </div>
    </General>
  )
}
