<template>
    <v-flex>
        <h2>New page</h2>

        <v-text-field
                v-model="pageData.alias"
                label="Page alias"
                :error="!!hasError('alias')"
                :error-messages="hasError('alias')"
        />

        <v-text-field
                v-model="pageData.pageId"
                label="Page id"
        />


        <v-select
                v-model="selectedBlocks"
                :items="blocksList"
                label="Block list"
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

        <v-form @submit.prevent="submit">
            <fieldset v-for="(block, i) in selectedBlocks" :key="i" style="padding: 15px;">
                <ComponentForm v-bind="block" @change="componentOnChange"/>
            </fieldset>

            <v-fab-transition>
                <v-btn
                        v-if="$route.name === 'new-page'"
                        color="green"
                        type="submit"
                        fab
                        fixed
                        bottom
                        right
                        key="save"
                >
                    <v-icon color="white">mdi-content-save</v-icon>
                </v-btn>
            </v-fab-transition>
        </v-form>

    </v-flex>
</template>

<script>
  import ComponentForm from '@/components/helpers/ComponentForm'

  export default {
    name: 'newPage',

    components: { ComponentForm },

    data() {
      return {
        blocksList: [],
        selectedBlocks: [],

        pageData: {
          pageId: null,
          alias: null,
          blocks: {}
        },

        errors: {}
      }
    },

    watch: {
      selectedBlocks(blocks) {
        Object.keys(this.pageData.blocks)
          .forEach(id => {
            const block = blocks.find(block => block._id === id)
            if (!block) {
              this.$delete(this.pageData.blocks, id)
            }
          })
      }
    },

    created() {
      this.getBlocksList()
    },

    methods: {
      componentOnChange(id, formData) {
        this.pageData.blocks[id] = formData
      },

      submit() {
        const body = this.pageData
        console.log(body)
        this.savePage(body)
      },

      async getBlocksList() {
        try {
          const { data } = await this.$axios.get('/builder/blocks')
          this.blocksList = data
        } catch (e) {
        }
      },


      async savePage(body) {
        try {
          const { data } = await this.$axios.post('/builder/pages', body)
          console.log(data)
        } catch (e) {
          this.errors = e.response.data
        }
      },

      hasError(name) {
        return this.errors[name]
      }
    }
  }
</script>

<style lang="scss">

</style>
