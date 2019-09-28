const { Schema, model } = require('mongoose')

const schema = new Schema({
  pageId: {
    type: String
  },
  alias: {
    type: String,
    required: true
  },
  blocks: [{
    dynamicBlockId: {
      type: Schema.Types.ObjectId,
      required: true
    },
    modelId: {
      type: Schema.Types.ObjectId,
      required: true
    }
  }],
  meta: {
    type: Schema.Types.Mixed,
    default: {
      breadcrumbs: {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: []
      },
      seo: {
        title: 'Тітле',
        keywords: 'слова',
        description: 'Деск',
        'og:title': 'Тітле',
        'og:description': 'Деск',
        'og:image': {
          src: '/storage/uploads/8d69e565-9cd7-41c4-80fa-d0bd9f0a37e8.jpg'
        }
      }
    }
  }
})

module.exports = model('Pages', schema)
