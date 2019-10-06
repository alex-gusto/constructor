<template>
    <v-flex fill-height>
        <h2>Edit page</h2>

        <v-row class="fill-height">
            <v-col sm="3">
                <ComponentForm
                        v-for="(block, i) in pageData.blocks"
                        v-bind="block"
                        v-model="pageData.blocks[i].options"
                        :key="i"
                />
                <v-btn @click="updatePageData">
                    SAVE
                </v-btn>
            </v-col>

            <v-col class="fill-height">
                <v-btn outlined color="primary" dark @click.native="reloadIframe">Reload</v-btn>
                <iframe
                        ref="preview"
                        name="preview"
                        :src="pageSrc"
                        frameborder="0"
                        width="100%"
                        height="100%"
                />
            </v-col>
        </v-row>
    </v-flex>
</template>

<script>
  import ComponentForm from '@/components/helpers/ComponentForm'

  export default {
    name: 'EditPage',

    components: { ComponentForm },

    data() {
      return {
        pageData: {}
      }
    },

    computed: {
      pageSrc() {
        return `http://localhost:3010/${this.pageData.alias}`
      },

      pageId() {
        return this.$route.params.id
      }
    },

    created() {
      this.getPageData()
    },

    methods: {
      async getPageData() {
        try {
          const { data } = await this.$axios.get(`/builder/pages/${this.pageId}`)
          this.pageData = data
        } catch (e) {
          console.log(e)
        }
      },

      async updatePageData() {
        try {
          const { data } = await this.$axios.put(`/builder/pages/${this.pageId}`, this.pageData)
          console.log(data)
        } catch (e) {
          console.log(e)
        }
      },

      reloadIframe() {
        const win = this.$refs.preview.contentWindow
        win.postMessage('reload', 'http://localhost:3010')
      }
    }
  }
</script>

<style lang="scss">

</style>
