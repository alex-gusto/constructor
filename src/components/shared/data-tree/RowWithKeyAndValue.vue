<template>
  <li class="data-tree-list__row">
    <span>
      {{ rowName }}
    </span>
    <span> : </span>
    <input
      :value="rowValue"
      type="text"
      class="data-tree-input"
      @input="onInput"
      @change="onInput"
    >

    <span>
      <button class="data-tree-add" @click="$emit('add', path)">+</button>
      <button class="data-tree-delete" @click="$emit('delete')">x</button>
    </span>
  </li>
</template>

<script>
  export default {
    name: 'RowWithKeyAndValue',

    props: ['rowName', 'rowValue', 'path'],

    methods: {
      onInput({ target: { value } }) {
        this.$emit('input', value)
      }
    }
  }
</script>

<style lang="scss">

</style>
