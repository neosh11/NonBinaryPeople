import Feed, { FeedStatus, FeedObject } from '../../Feed'
import Card from '../../Card'

const feed: FeedObject[] = [
  {
    text: 'Creating the display/ordering system.',
    date: '?',
    status: FeedStatus.TODO
  },
  {
    text: 'Creating the posting system.',
    date: '?',
    status: FeedStatus.TODO
  },
  {
    text: 'Creating the login/logout system.',
    date: '?',
    status: FeedStatus.TODO
  },
  {
    text: 'Testing it with mock data to see if it works.',
    date: '02-05-2021',
    status: FeedStatus.TODO
  },
  {
    text: 'Creating the UI for the blog.',
    date: '30-04-2021',
    status: FeedStatus.DONE
  }
]
const Blog = () => (
  <>
    <Card>
      <div className='md:flex md:flex-col space-y-4 md:items-center'>
        <h1>Blog</h1>
        <h2>This Page is still a work in progress</h2>
      </div>
    </Card>
    <Feed feed={feed} />
  </>
)

export default Blog
