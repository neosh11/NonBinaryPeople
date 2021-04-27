// const date_ob = new Date()
// const today =
//   date_ob.getFullYear() + '-' + ('0' + (date_ob.getMonth() + 1)).slice(-2) + '-' + ('0' + date_ob.getDate()).slice(-2)

interface SiteMapRoute {
  name: string
  lastMod?: string
  priority: '0.5' | '0.8' | '0.9' | '1.0'
  changeFreq: 'daily' | 'monthly'
}
const routes: SiteMapRoute[] = [
  {
    name: '/',
    priority: '1.0',
    changeFreq: 'daily'
  },
  {
    name: '/about',
    priority: '0.5',
    changeFreq: 'daily'
  },
  {
    name: '/help',
    priority: '0.8',
    changeFreq: 'daily'
  },
  {
    name: '/help/communities',
    priority: '0.9',
    changeFreq: 'daily'
  },
  {
    name: '/help/support',
    priority: '0.9',
    changeFreq: 'daily'
  },
  {
    name: '/help/knowledge',
    priority: '0.9',
    changeFreq: 'daily'
  }
]

const toUrl = (host, route: SiteMapRoute) =>
  `<url><loc>https://${host}${route.name}</loc><changefreq>${route.changeFreq}</changefreq>${
    route.lastMod ? '<lastmod>' + route.lastMod + '</lastmod>' : ''
  }<priority>${route.priority}</priority></url>`

const createSitemap = (host, routes: SiteMapRoute[]) =>
  `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes.map(route => toUrl(host, route)).join('')}
    </urlset>`

// eslint-disable-next-line @typescript-eslint/no-empty-function
const Sitemap = () => {}

Sitemap.getInitialProps = ({ res, req }) => {
  const sitemap = createSitemap(req.headers.host, routes)
  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()
  return res
}

export default Sitemap
