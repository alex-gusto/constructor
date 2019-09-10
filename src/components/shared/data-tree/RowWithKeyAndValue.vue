<template>
  <li>
    <span>
      {{ rowName }}
    </span>
    <input
      :value="rowValue"
      type="text"
      @input="onInput"
      @change="onInput"
    >
  </li>
</template>

<script>
  export default {
    name: 'RowWithKeyAndValue',

    props: ['rowName', 'rowValue'],

    methods: {
      onInput({ target: { value } }) {
        this.$emit('input', value)
      }
    }
  }
</script>

<style lang="scss">

</style>
