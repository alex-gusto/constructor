<template>
    <v-flex fill-height>
        <h2>Edit page</h2>

        <v-col class="fill-height">
            <v-btn outlined color="primary" dark @click.native="reloadIframe">Reload</v-btn>
            <iframe
                    ref="preview"
                    name="preview"
                    src="http://localhost:3000"
                    frameborder="0"
                    width="100%"
                    height="100%"
            />
        </v-col>
    </v-flex>
</template>

<script>
  export default {
    name: 'EditPage',

    created() {
      this.getPageData()
    },

    methods: {
      async getPageData() {
        const { id } = this.$route.params

        try {
          const { data } = await this.$axios.get(`/builder/pages/${id}`)
          console.log(data)
        } catch (e) {
          console.log(e)
        }
      },

      reloadIframe() {
        const win = this.$refs.preview.contentWindow
        win.postMessage('reload', 'http://localhost:3000')
      }
    }
  }
</script>

<style lang="scss">

</style>
