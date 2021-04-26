import { FC, ReactNode } from 'react'
import Banner, { BannerType } from '../../components/Banner'
import Footer from '../../components/utils/Footer'
import Header from '../../components/utils/Header'
import SEOMeta from '../../components/utils/SEO'
import { navKeys } from '../../lib/pageDetails'

interface Props {
  children: ReactNode
  title: string
  description: string
  selectedNavKey: navKeys
  iconHref?: string
  canonical: string
  bannerText?: string
  bannerSmallText?: string
  bannerType?: BannerType
  bannerButtonText?: string
  bannerButtonHref?: string
}

const General: FC<Props> = ({
  children,
  title,
  description,
  selectedNavKey,
  iconHref,
  canonical,
  bannerText,
  bannerSmallText,
  bannerType,
  bannerButtonText,
  bannerButtonHref
}) => (
  <>
    <SEOMeta title={title} canonical={canonical} description={description} iconHref={iconHref} />
    <div className='flex flex-col min-h-screen overflow-y justify-between'>
      <Header selectedKey={selectedNavKey} />
      {bannerText && (
        <Banner
          type={bannerType}
          text={bannerText}
          smallText={bannerSmallText}
          buttonHref={bannerButtonHref}
          buttonText={bannerButtonText}
        />
      )}

      <main className='mb-auto max-w-7xl p-7 md:mx-auto py-6 sm:px-6 lg:px-8'>{children}</main>
      <Footer />
    </div>
  </>
)

export default General
