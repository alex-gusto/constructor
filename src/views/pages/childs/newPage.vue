<template>
  <v-flex>
    new page

    <v-select
      v-model="selectedBlocks"
      :items="blocksList"
      label="Standard"
      multiple
      chips
    >
      <!--<template v-slot:selection="{ item }">-->
        <!--{{ item.blockName }}-->
      <!--</template>-->

      <template v-slot:item="{ item }">
        {{ item.blockName }}
      </template>
    </v-select>

  </v-flex>
</template>

<script>
  export default {
    name: 'newPage',

    data() {
      return {
        blocksList: [],
        selectedBlocks: []
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
      }
    }
  }
</script>

<style lang="scss">

</style>
