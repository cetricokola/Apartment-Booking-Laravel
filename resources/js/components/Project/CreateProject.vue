<template>
    <div>
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
        </div>
        <div>
            <h1>Image upload</h1>
            <form @submit="formSubmit" enctype="multipart/form-data">
                <div id="preview">
                    <img v-if="url" :src="url"/>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <input type="file" accept="image/*" class="form-control"
                               v-on:change="onFileChange">
                    </div>
                    <div class="col-md-3">
                        <button class="btn btn-success btn-block" type="submit">Upload Image</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from "vuex";
    import {HTTP} from "../../http.common";

    export default {
        name: "CreateProject",
        data: () => {
            return {
                project: {
                    name: '',
                    description: '',
                    image: '',
                },
                url: null,
                id: 13,

            }

        },
        computed: {
            ...mapGetters([
                'projects',
                'new_project'
            ]),

        },
        created() {

        },
        methods: {

            createProject(project) {
                this.$store.dispatch('createProject', project);
            },
            onFileChange(e) {
                this.file = e.target.files[0];
                this.url = URL.createObjectURL(this.file);
            },
            formSubmit(e) {
                e.preventDefault();
                const config = {
                    headers: {'content-type': 'multipart/form-data'}
                };
                let formData = new FormData();
                formData.append('file', this.file);
                HTTP.post(`add_image/${this.id}`, formData, config)
                    .then(function (response) {
                        if (response.data.success) {
                            swal(response.data.message);
                        } else {
                            swal(response.data.error);
                        }
                    })
                    .catch(function (error) {
                        console.log(e)
                    });
            }
        }
    }
</script>

<style scoped>
    #preview img {
        max-width: 200px;
        max-height: 200px;
    }
</style>
