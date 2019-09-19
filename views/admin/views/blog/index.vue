<template>
    <v-flex>
    
        <router-view transition="fade-transition"/>

         <v-fab-transition>
            <v-btn
                v-if="$route.name !== 'new-article'"
                color="pink"
                fab
                fixed
                bottom
                right
                key="new"
                @click.native="$router.push('/blog/new-article')"
            >
                <v-icon>mdi-add</v-icon>
            </v-btn>

            <v-btn
                v-else
                color="green"
                fab
                fixed
                bottom
                right
                key="save"
                @click.native="saveArticle"
            >
                <v-icon>mdi-add</v-icon>
            </v-btn>
        </v-fab-transition>
    </v-flex>
</template>

<script>
export default {
    methods:{
        saveArticle(){
            console.log('save');
        }
    }
}
</script>