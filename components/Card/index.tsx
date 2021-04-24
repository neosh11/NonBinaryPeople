import { FC } from 'react'

const Card: FC = ({ children }) => {
  return <div className='shadow-md overflow-hidden sm:rounded-lg px-4 py-5 sm:px-6'>{children}</div>
}

export default Card
