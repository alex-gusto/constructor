<template>
  <v-flex>
    <DynamicComponent
      v-for="(block) in blocks"
      v-bind="block"
      :id="block._id"
      :key="block._id"
    />
  </v-flex>
</template>

<script>
  import DynamicComponent from '@/components/helpers/DynamicComponent'

  export default {
    components: { DynamicComponent },
    data() {
      return {
        blocks: []
      }
    },

    created() {
      this.getBlocks()
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
