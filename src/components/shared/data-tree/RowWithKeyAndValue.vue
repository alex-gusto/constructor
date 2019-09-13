<template>
  <li class="data-tree-list__row">
    <span>
      {{ rowName }}
    </span>
    <span class="data-tree-spacer_x">:</span>
    <el-input
      :value="rowValue"
      size="mini"
      class="data-tree-input"
      @input="onInput"
    />

    <span>
     <span class="data-tree-spacer_l">
      <el-button
        size="mini"
        icon="el-icon-plus"
        circle
        @click="$emit('add', path)"
      />

      <el-button
        size="mini"
        icon="el-icon-delete"
        circle
        @click="$emit('delete')"
      />
    </span>
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
