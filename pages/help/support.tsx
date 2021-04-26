import Support from '../../components/PageComponents/Help/Support'
import { navKeys } from '../../lib/pageDetails'
import General from '../../layouts/General'
import { pageRoutes } from '../../lib/routes'
import { BannerType } from '../../components/Banner'

export default function SupportPage() {
  return (
    // TODO update link
    <General
      title='Non Binary People Support'
      selectedNavKey={navKeys.HELP}
      description='Find support for non-binary people near you!'
      canonical={pageRoutes.helpSupport}
      bannerText='If you are in an emergency, or at immediate risk of harm to yourself or others.'
      bannerSmallText='If it is an emergency.'
      bannerType={BannerType.EMERGENCY}
      bannerButtonHref="https://www.lifeline.org.au/get-help/"
      bannerButtonText="Link Here"
    >
      <div className='md:w-240 space-y-10 md:flex md:flex-col'>
        <Support />
      </div>
    </General>
  )
}
