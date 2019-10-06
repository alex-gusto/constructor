<template>
    <v-flex>
        <v-data-table
                :headers="headers"
                :items="list"
                :loading="isLoading"
                class="elevation-1"
        >
            <template v-slot:item.blocks="{ item }">
                {{ item.blocks.length }}
            </template>

            <template v-slot:item.action="{ item }">
                <v-icon
                        small
                        class="mr-2"
                        @click="editPage(item._id)"
                >
                    mdi-pencil
                </v-icon>
                <v-icon
                        small
                        @click="deletePage(item._id)"
                >
                    mdi-delete
                </v-icon>
            </template>
        </v-data-table>
    </v-flex>
</template>

<script>
  import create from '../../_constructors/create-page-with-table-list'

  const config = {
    url: '/builder/pages',
    headers: [
      {
        text: 'Page ID',
        align: 'left',
        sortable: false,
        value: 'pageId'
      },
      {
        text: 'Alias',
        value: 'alias'
      },
      {
        text: 'Blocks count',
        value: 'blocks',
        align: 'right'
      },
      {
        text: 'Actions',
        value: 'action',
        align: 'right',
        sortable: false
      }
    ]
  }

  const component = {
    methods: {
      deletePage(id) {
        console.log(id)
      },

      editPage(id) {
        this.$router.push('/pages/' + id)
      }
    }
  }

  export default create(component, config)
</script>

<style lang="scss">

</style>
