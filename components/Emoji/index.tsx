import { FC } from 'react'

export enum EmojiType {
  HEART,
  GRIN
}
interface Props {
  type: EmojiType
}

const emojiMap = new Map<number, string>([
    [EmojiType.HEART, '❤️'],
    [EmojiType.GRIN, '😄'],
])

const Emoji: FC<Props> = props => (
  <span role='img' aria-labelledby='heart'>
    {emojiMap.get(props.type)}
  </span>
)

export default Emoji
