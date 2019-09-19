<template>
    <v-flex>
        <v-data-table
            :headers="headers"
            :items="articles"
            :loading="isLoading"
            class="elevation-1"
        >
          <template v-slot:item.dateCreated="{ item }">
            {{ item.dateCreated | time }}
          </template>

          <template v-slot:item.dateUpdated="{ item }">
            {{ item.dateUpdated | time }}
          </template>
        </v-data-table>
    </v-flex>
</template>

<script>
export default {
    data(){
        return {
          articles: [],
          headers: [
            {
                text: 'Title',
                align: 'left',
                sortable: false,
                value: 'title',
            },
            { text: 'Date created', value: 'dateCreated' },
            { text: 'Date updated', value: 'dateUpdated' },
            { text: 'Alias', value: 'alias' },
          ], 
          
          isLoading: false
        }
    },

    created(){
        this.getArticles()
    },

    methods:{
        async getArticles (){
            this.isLoading = true

            try {
                const { data } = await this.$axios.get('/articles')
                this.articles = data
            } catch {

            } finally{
                this.isLoading = false
            }
        }
    }
}
</script>