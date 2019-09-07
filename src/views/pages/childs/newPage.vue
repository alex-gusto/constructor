<template>
  <v-flex>
    New page

    <v-select
      v-model="selectedBlocks"
      :items="blocksList"
      label="Standard"
      multiple
      chips
    >
      <template v-slot:selection="{ item }">
        <v-chip>{{ item.componentName }}</v-chip>
      </template>

      <template v-slot:item="{ item }">
        {{ item.componentName }}
      </template>
    </v-select>

    <v-fab-transition>
      <v-btn
        v-if="$route.name === 'new-page'"
        color="green"
        fab
        fixed
        bottom
        right
        key="save"
        @click.native="savePage"
      >
        <v-icon color="white">mdi-content-save</v-icon>
      </v-btn>
    </v-fab-transition>

  </v-flex>
</template>

<script>
  export default {
    name: 'newPage',

    data() {
      return {
        blocksList: [],
        selectedBlocks: [],

        pageData: {
          pageId: 'home',
          alias: 'home'
        }
      }
    },

    computed: {
      pageBlocks() {
        return this.selectedBlocks.map(block => {
          return {
            componentId: block._id
          }
        })
      }
    },

    created() {
      this.getBlocksList()
    },

    methods: {
      async getBlocksList() {
        try {
          const { data } = await this.$axios.get('/builder/blocks')
          this.blocksList = data
        } catch (e) {

        }
      },


      async savePage() {
        const body = {
          ...this.pageData,
          blocks: this.pageBlocks
        }
        try {
          const { data } = await this.$axios.post('/builder/pages', body)
          console.log(data)
        } catch (e) {

        }
      }
    }
  }
</script>

<style lang="scss">

</style>
