<template>
    <ul>
        <li v-for="(value, label, i) in $attrs" :key="i">
            <div>{{ label }}</div>

            <DataTreeEditor
                    v-if="!isPrimitive(value)"
                    v-for="(nodeValue, nodeLabel, k) in value"
                    :key="k"
                    v-bind="nodeValue"
            />

            <div v-else>
                {{ value }}
            </div>
        </li>
    </ul>
</template>

<script>
  export default {
    name: 'DataTreeEditor',

    inheritAttrs: false,

    methods: {
      isPrimitive(arg) {
        console.log(JSON.stringify(arg))
        const type = typeof arg
        return arg == null || (type !== 'object' && type !== 'function')
      }
    },

    mounted() {
      // console.log(this.$attrs)
    }
  }
</script>

<style lang="scss">

</style>
