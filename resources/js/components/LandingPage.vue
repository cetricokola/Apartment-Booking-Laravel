<template>
    <div>
        <div v-for="project in projects">
            <h1>{{project.name}}</h1>
            <h3>{{project.description}}</h3>
<!--            <img src='/public/project_images/+{{project.name}}' alt="">-->
            <img :src="`/project_images/${project.image}`" alt="">
            <a class="btn btn-primary" href="/the_project" @click="storePostId(project.id)">View More Details</a>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from "vuex";

    export default {
        name: "LandingPage",
        data(){
            return{
            }
        },
        computed: {
            ...mapGetters([
                'projects'
            ]),

        },
        methods: {
            storePostId(id) {
                localStorage.setItem('project_id', id);
            },
            getImgUrl(img){
                return require('http://cetsuites.devio/project_images/'+img)
            }
        },
        created() {
            this.$store.dispatch('fetchProjects');
        }
    }
</script>

<style scoped>

</style>
