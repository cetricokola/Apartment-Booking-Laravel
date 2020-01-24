<template>
    <div>
        <h1>Register New Blocks</h1>
        <form @submit.prevent="postDetails(details)">
            <label for="name">Project</label><br><br>
            <select class="custom-select" id="name" v-model="details.project_id">
                <option v-for="project in projects" v-bind:value=project.id>{{project.name}}</option>
            </select>
            <label for="block">Block Name :</label><br><br>
            <input type="text" v-model="details.name" id="block"><br><br>
            <label for="description">Number of Floors in Block: </label><br><br>
            <input type="number" v-model="details.floor_number" id="description"><br><br>
            <label for="unit">No of Units Per Floor:</label><br><br>
            <input type="number" v-model="details.units" id="unit"><br><br>
            <button type="submit">Save</button>
        </form>

        {{detailsh}}

    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "AddBlocksFloorsUnits",
        data: () => {
            return {
                details: {
                    project_id: '',
                    name: '',
                    floor_number: '',
                    units: ''
                }
            }
        },
        computed: {
            ...mapGetters([
                'projects',
                'detailsh',
            ])
        },
        methods: {
            postDetails(details) {
                this.$store.dispatch('createProjectDetails', details);
            }
        },
        created() {
            this.$store.dispatch('fetchProjects')
        }
    }
</script>

<style scoped>

</style>
