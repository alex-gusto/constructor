<template>
    <router-view/>
    <!--<v-flex>-->
    <!--<v-form @submit.prevent="submit">-->
    <!--<v-file-input-->
    <!--v-model="files"-->
    <!--label="Load components"-->
    <!--multiple-->
    <!--/>-->

    <!--<v-btn class="mr-4" type="submit">submit</v-btn>-->
    <!--</v-form>-->

    <!--<div v-for="(block, i) in blocksList" :key="i">-->
    <!--<h3>{{ block.componentName }}</h3>-->
    <!--<DataTree :data="block.schemaDraft"/>-->
    <!--</div>-->
    <!--</v-flex>-->
</template>

<script>
  import DataTree from '@/components/shared/data-tree'

  export default {
    components: { DataTree },

    data() {
      return {
        files: [],
        blocksList: []
      }
    },

    created() {
      this.getBlocksList()
    },

    methods: {
      submit(e) {
        const formData = new FormData()

        this.files.forEach(file => {
          formData.append('components', file)
        })

        this.post(formData)
      },

      async post(body) {
        try {
          const { data } = await this.$axios.post('/builder/blocks', body)
          console.log(data)

        } catch (e) {
          console.log(e.response)
        }
      },

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
