import Button from '.'
import { externalContactLinks } from '../../lib/routes'

export default function GetInTouchButton() {
  return (
    <Button color='black' text={true} href={externalContactLinks.email}>
      Get in touch!
    </Button>
  )
}
