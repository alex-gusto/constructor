<template>
    <v-flex>
        <DataTree
                ref="data-tree"
                :data="entity"
                @change="onChange"
        />

        <v-fab-transition>
            <v-btn
                    v-if="$route.name !== 'edit-types' && type"
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
  import DataTree from '@/components/shared/data-tree/index.vue'
  import create from '../../_constructors/create-page-for-edit'

  const OPTIONS = {
    url: '/builder/entity-types'
  }

  const component = {
    name: 'EditType',
    components: {
      DataTree
    },

    data() {
      return {
        type: null
      }
    },

    computed: {
      body() {
        return this.type
      }
    },

    methods: {
      onChange(v) {
        this.type = v
      }
    }
  }

  export default create(component, OPTIONS)
</script>

<style lang="scss">

</style>
