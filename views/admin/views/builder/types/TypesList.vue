<script>
  import create from '../../_constructors/create-page-with-table-list'

  const config = {
    url: '/builder/entity-types',
    headers: [
      {
        text: 'Type',
        align: 'left',
        sortable: false,
        value: 'name'
      }
    ]
  }

  const component = {
    name: 'TypesList'
  }

  export default create(component, config)
</script>

<style lang="scss">

</style>
