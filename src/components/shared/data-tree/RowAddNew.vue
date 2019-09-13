<template>
  <li class="data-tree-list__row">
    <form
      class="data-tree-form">
      <div class="data-tree-form__inputs">
        <el-input
          size="mini"
          class="data-tree-input"
          v-model="formData.rowName"
        />
        <span class="data-tree-spacer_x">:</span>
        <el-input
          size="mini"
          class="data-tree-input"
          v-model="formData.rowValue"
        />
      </div>
      <div class="data-tree-form__footer">
        <el-button size="mini" type="primary" @click="submit">Save</el-button>
        <el-button size="mini" type="info" @click="reset">Cancel</el-button>
      </div>
    </form>
  </li>
</template>

<script>
  export default {
    name: 'RowAddNew',

    props: ['rowName', 'rowValue'],

    data() {
      return {
        formData: {
          rowName: this.rowName,
          rowValue: this.rowValue
        }
      }
    },

    methods: {
      submit() {
        this.$emit('save', this.formData)
      },

      reset() {
        this.$emit('cancel')
      }
    }
  }
</script>

<style lang="scss">
  .data-tree {
    &-form {
      &__inputs {
        display: flex;
      }

      &__footer {
        padding-top: 5px;
      }
    }
    &-save {
      padding: 2px 4px;
      border-radius: 4px;
      background: lawngreen;
    }

    &-reset {
      padding: 2px 4px;
      border-radius: 4px;
      margin-left: 10px;
      background: tomato;
    }
  }
</style>
