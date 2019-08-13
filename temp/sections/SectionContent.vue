<template>
  <div class="container section">
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
  </div>
</template>

<script lang="ts">
  export default {
    props: ['title', 'content'],

    methods: {
      t (): string {
        return ''
      }
    }
  }
</script>

<style lang="scss">
  .section {
    background: tomato;
  }
</style>
