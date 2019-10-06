<!--<template>-->
<!--<v-flex>-->
<!--<v-data-table-->
<!--:headers="headers"-->
<!--:items="list"-->
<!--:loading="isLoading"-->
<!--class="elevation-1"-->
<!--&gt;-->
<!--<template v-slot:item.blocks="{ item }">-->
<!--{{ item.blocks.length }}-->
<!--</template>-->

<!--<template v-slot:item.action="{ item }">-->
<!--<v-icon-->
<!--small-->
<!--class="mr-2"-->
<!--@click="editPage(item._id)"-->
<!--&gt;-->
<!--mdi-pencil-->
<!--</v-icon>-->
<!--<v-icon-->
<!--small-->
<!--@click="deletePage(item._id)"-->
<!--&gt;-->
<!--mdi-delete-->
<!--</v-icon>-->
<!--</template>-->
<!--</v-data-table>-->
<!--</v-flex>-->
<!--</template>-->

<script>
  import create from '../../_constructors/create-page-with-table-list'

  const config = {
    url: '/builder/blocks',
    headers: [
      {
        text: 'Block Name',
        align: 'left',
        sortable: false,
        value: 'componentName'
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
