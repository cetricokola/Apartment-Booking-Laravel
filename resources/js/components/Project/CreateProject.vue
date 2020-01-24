<template>
    <div>
        <form @submit.prevent="createProject(project)">
            <label for="name">Project name</label><br><br>
            <input type="text" v-model="project.name" id="name"><br><br>
            <label for="description">Description</label><br><br>
            <input type="text" v-model="project.description" id="description"><br><br>
            <button type="submit">Submit</button>
            <br><br>
        </form>
        {{new_project}}
        <div>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from "vuex";

    export default {
        name: "CreateProject",
        data: () => {
            return {
                project: {
                    name: '',
                    description: ''
                }
            }

        },
        computed: {
            ...mapGetters([
                'projects',
                'new_project'
            ])
        },
        methods: {
            createProject(project) {
                this.$store.dispatch('createProject', project);
            }
        }

    }
</script>

<style scoped>

</style>
