<template>
    <div>
        <div v-for="project in projects">
            <h1>{{project.name}}</h1>
            <h3>{{project.description}}</h3>
            <a class="btn btn-primary" href="/the_project" @click="storePostId(project.id)">View More Details</a>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from "vuex";

    export default {
        name: "LandingPage",
        computed: {
            ...mapGetters([
                'projects'
            ]),

        },
        methods: {
            storePostId(id) {
                localStorage.setItem('project_id', id);
            }
        },
        created() {
            this.$store.dispatch('fetchProjects');
        }
    }
</script>

<style scoped>

</style>
