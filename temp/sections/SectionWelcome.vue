<template>
  <section class="welcome">
    <div class="container">
      <br>
      <br>
      <h1 v-animate:title="{duration: 1, delay: 0.2, stagger: 0.4}">
        {{ title }}
      </h1>
      <br><br><br>
      <h3 v-animate:text="{duration: 1, delay: 0.4, stagger: 0.1}">
        {{ description }}
      </h3>
      <p v-animate:text="{duration: 1, delay: 0.6, stagger: 0.1}">
        {{ text }}
      </p>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'SectionWelcome',

    props: [ 'title', 'description', 'text' ]
  }
</script>
