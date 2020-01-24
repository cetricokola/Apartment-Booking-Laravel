<template>
    <div>
        <h1>Cetric</h1>
        <h1>{{project.name}}</h1>
        <p>{{project.description}}</p>
        <label for="name">Block</label><br><br>
        <select class="custom-select" id="name" v-model="block_id">
            <option v-for="block in blocks" v-bind:value=block.id @click="retrieveFloor(block.id)">{{block.name}}</option>
        </select>
        <div v-show="show">
            <label for="floor">Floors in block</label><br><br>
            <select class="custom-select" id="floor">
                <option value="1">***</option>
            </select>
        </div>
    </div>
</template>

<script>
    import {HTTP} from "../http.common";

    export default {
        name: "ViewProject",
        data: () => {
            return {
                project: '',
                blocks: [],
                block_id: '',
                show: false
            }
        },
        computed: {
            getProjectId() {
                return localStorage.getItem("project_id")
            },
        },
        created() {
            HTTP.get(`/project/view_project/${this.getProjectId}`)
                .then(res => {
                    this.project = res.data;
                }).catch(err => {
                console.log(err)
            });
            HTTP.get(`block/project_blocks/${this.getProjectId}`)
                .then(res => {
                    this.blocks = res.data;
                }).catch(err => {
                console.log(err)
            })
        },
        methods: {
            retrieveFloor(id) {
                this.show = true;
                id = true;
                // HTTP.get(`block/project_blocks/${this.getProjectId}`)
                //     .then(res => {
                //         this.blocks = res.data;
                //     }).catch(err => {
                //     console.log(err)
                // })
            }
        }
    }
</script>

<style scoped>

</style>
