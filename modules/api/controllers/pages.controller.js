const db = require('../../../mongo')()

const Model = db.model('Block')

module.exports.get = async (ctx) => {
  ctx.status = 200
  ctx.body = {
    blocks: await Model.find(),
    meta: {
      breadcrumbs: {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [],
      },
      seo: {
        title: 'Тітле',
        keywords: 'слова',
        description: 'Деск',
        'og:title': 'Тітле',
        'og:description': 'Деск',
        'og:image': {
          src: '/storage/uploads/8d69e565-9cd7-41c4-80fa-d0bd9f0a37e8.jpg',
        },
      },
    },
  }
}
