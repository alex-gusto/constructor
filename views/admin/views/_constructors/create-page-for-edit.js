function create(component = {}, { url } = {}) {
  return {
    mixins: [component],

    data() {
      return {
        entity: {},
        isLoading: false
      }
    },

    computed: {
      entityId() {
        return this.$route.params.id
      }
    },

    created() {
      this.getEntity()
    },

    render(h) {
      return h('div', JSON.stringify(this.$route.params))
    },

    methods: {
      async getEntity() {
        try {
          this.isLoading = true
          const { data } = await this.$axios.get(url + `/${this.entityId}`)

          this.entity = data
        }
        catch (e) {
          console.log(e)
        }
        finally {
          this.isLoading = false
        }
      },

      async saveEntity() {
        try {
          this.isLoading = true
          await this.$axios.put(url + `/${this.entityId}`, this.body)
        }
        catch (e) {
          console.log(e)
        }
        finally {
          this.isLoading = false
        }
      }
    }
  }
}

export { create as default }
