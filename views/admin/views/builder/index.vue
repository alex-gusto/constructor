<template>
  <v-flex>
    <v-form @submit.prevent="submit">
      <v-file-input
        v-model="files"
        label="Load components"
        multiple
      />

      <v-btn class="mr-4" type="submit">submit</v-btn>
    </v-form>
  </v-flex>
</template>

<script>
  export default {
    data() {
      return {
        files: []
      }
    },

    methods: {
      submit(e) {
        const formData = new FormData()

        this.files.forEach(file => {
          formData.append('blocks', file)
        })

        this.post(formData)
      },

      async post(body) {
        try {
          const { data } = await this.$axios.post('/builder', body)
          console.log(data)

        } catch (e) {
          console.log(e.response)
        }
      }
    }
  }
</script>
