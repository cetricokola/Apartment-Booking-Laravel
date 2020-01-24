<template>
    <div class="bg">
        <div class="container">
            <div>
                <h5 class="my-3 btn btn-primary text-white px-5 py-2">Admin Dashboard</h5>
            </div>
            <div class="row d-flex justify-content-start">
                <div class="col-md-3">
                    <div class="helper mt-3" @click="selectedComponent = 'CreateProject'">
                        <h6>Create Project</h6>
                    </div>
                    <div class="helper" @click="selectedComponent = 'AddBlocksFloorsUnits'">
                        <h6>Add Project Details</h6>
                    </div>
                </div>
                <div class="col-md-7">
                    <component :is="selectedComponent"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from "vuex";

    export default {
        name: "AdminDash",

        components: {
            AddBlocksFloorsUnits: () => import('./Project/AddBlocksFloorsUnits'),
            CreateProject: () => import('./Project/CreateProject')
        },
        data: () => {
            return {
                selectedComponent: 'CreateProject'
            }
        },

    }
</script>

<style scoped>
    .bg {
        background-color: whitesmoke;
    }

    .btn {
        border-radius: 25px;
    }

    .helper {
        height: 50px;
        background: rgba(181, 147, 34, 0.58);
        text-align: center;
        cursor: pointer;
    }
</style>
