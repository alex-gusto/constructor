export default function (component, { url }) {
  return Object.assign(component, {
    props: ['title', 'content'],
    data() {
      return {}
    },

    created() {
      this.getItems(url)
    },

    methods: {
      getItems(url) {
        console.log(url)
      }
    }
  })
}
