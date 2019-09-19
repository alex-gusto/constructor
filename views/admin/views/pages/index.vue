<template>
  <v-flex>

    <router-view/>

    <v-fab-transition>
      <v-btn
        v-if="$route.name !== 'new-page'"
        color="pink"
        fab
        fixed
        bottom
        right
        key="new"
        @click.native="$router.push('/pages/new-page')"
      >
        <v-icon color="white">mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-flex>
</template>

<script>

  export default {
    data() {
      return {
        blocks: []
      }
    },

    created() {
      // this.getBlocks()
    },

    methods: {
      async getBlocks() {
        try {
          const { data } = await this.$axios.get('/builder/blocks')
          this.blocks = data
        } catch {

        }
      }
    }
  }
</script>
