import { VFlex, VDataTable } from 'vuetify/lib'

function create(component = {}, { headers, url } = {}) {
  return {
    components: {
      VFlex,
      VDataTable
    },

    mixins: [component],

    data() {
      return {
        list: [],
        isLoading: false
      }
    },

    beforeCreate() {
      this.headers = headers
    },

    created() {
      this.getList()
    },

    render(h) {
      return h('v-flex', [
        h('v-data-table', {
          props: {
            headers: this.headers,
            items: this.list,
            loading: this.isLoading
          },
          on: {
            'click:row': this.goToEdit
          }
        })
      ])
    },

    methods: {
      async getList() {
        this.isLoading = true
        const { data } = await this.$axios.get(url)
          .catch(e => console.log(e))
          .finally(() => {
            this.isLoading = false
          })

        this.list = data
      },

      goToEdit({ _id }) {
        if (_id) {
          const { path } = this.$route
          this.$router.push(path + '/' + _id)
        }
      }
    }
  }
}

export { create as default }
