<template>
    <v-flex>
        <h3>{{ entity.componentName }}</h3>
        <DataTreeEditor
                v-bind="entity.schemaDraft"
                @change="onChange"
        />

        <v-fab-transition>
            <v-btn
                    color="green"
                    fab
                    fixed
                    bottom
                    right
                    key="new"
                    @click.native="saveEntity"
            >
                <v-icon color="white">mdi-content-save</v-icon>
            </v-btn>
        </v-fab-transition>
    </v-flex>
</template>

<script>
  import DataTreeEditor from './DataTreeEditor'
  import create from '../../_constructors/create-page-for-edit'

  const OPTIONS = {
    url: '/builder/blocks'
  }

  const component = {
    name: 'EditType',
    components: {
      DataTreeEditor
    },

    data() {
      return {
        block: null
      }
    },

    computed: {
      body() {
        return this.block
      }
    },

    methods: {
      onChange(v) {
        this.block = v
      }
    }
  }

  export default create(component, OPTIONS)
</script>

<style lang="scss">

</style>
