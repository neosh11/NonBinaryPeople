import { FC } from 'react'

export enum FeedStatus {
  DONE,
  TODO,
  CANCELLED
}
export interface FeedObject {
  status: FeedStatus
  text: string
  date: string
}

interface Props {
  feed: FeedObject[]
}

const FeedLine = ({ line, bottom = false }: { line: FeedObject; bottom: boolean }) => {
  return (
    <li>
      <div className='relative pb-8'>
        {!bottom && <span className='absolute top-4 left-4 -ml-px h-full w-0.5 bg-ter' aria-hidden='true'></span>}
        <div className='relative flex space-x-3'>
          <div>
            <span className='h-8 w-8 rounded-full bg-sec flex items-center justify-center ring-8 ring-white'>
              {/* <!-- Heroicon name: solid/user --> */}
              <svg
                className='h-5 w-5 text-prim'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path fillRule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' clipRule='evenodd' />
              </svg>
            </span>
          </div>
          <div className='min-w-0 flex-1 pt-1.5 flex justify-between space-x-4'>
            <div>
              <p className='text-sm text-light'>{line.text}</p>
            </div>
            <div className='text-right text-sm whitespace-nowrap text-light'>
              <time dateTime={line.date}>{line.date}</time>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

const Feed: FC<Props> = ({ feed }) => {
  return (
    <div className='flow-root'>
      <ul className='-mb-8'>
        {feed.map((x, i) => (
          <FeedLine key={'feed-' + i} line={x} bottom={i===feed.length-1} />
        ))}
      </ul>
    </div>
  )
}

export default Feed
