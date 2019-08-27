<template>
  <v-flex>
    New page

    <v-select
      v-model="pageData.blocks"
      :items="blocksList"
      label="Standard"
      multiple
      chips
    >
      <template v-slot:selection="{ item }">
        <v-chip>{{ item.blockName }}</v-chip>
      </template>

      <template v-slot:item="{ item }">
        {{ item.blockName }}
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

        pageData: {
          blocks: [],
          pageId: 'home',
          alias: 'home'
        }
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
        try {
          const { data } = await this.$axios.post('/builder/pages', this.pageData)
          console.log(data)
        } catch (e) {

        }
      }
    }
  }
</script>

<style lang="scss">

</style>
