<template>
    <div>
        <div>
        <div>
            <label for="project">Client</label><br><br>
            <input type="email" v-model="email"><br><br>
            <button @click="retrieveProjects" class="btn btn-primary">Next</button>
        </div>
        <div v-if="show_projects">
            <label for="project">Project</label><br><br>
            <select class="custom-select" id="project" v-model="project_id">
                <option v-for="project in projects" v-bind:value=project.id>{{project.name}}</option>
            </select>
            <button @click="retrieveBlocks" class="btn btn-primary">Next</button>
            <br><br>
        </div>
        <div v-if="show_blocks">
            <label for="name">Block</label><br><br>
            <select class="custom-select" id="name" v-model="block_id">
                <option v-for="block in blocks" v-bind:value=block.id>{{block.name}}</option>
            </select>
            <button @click="retrieveFloor" class="btn btn-primary">Next</button>
        </div>
        <div v-show="show_floors">
            <label for="floor">Floors in block</label><br><br>
            <select class="custom-select" id="floor" v-model="floor_id">
                <option v-for="floor in floors" v-bind:value=floor.id>Floor {{floor.number}}</option>
            </select>
            <button @click="retrieveUnits" class="btn btn-primary">Next</button>
        </div>
        <div v-show="show_units">
            <div class="grid-container">
                <div v-for="unit in floor_units">
                    <button @click="selectUnit(unit.id)" class="btn-success btn">{{unit.number}}</button>
                    <button @click="removeUnit(unit.id)" class="btn-warning btn">{{unit.number}}</button>
                </div>
            </div>
        </div>
        <div v-if="book">
            <p>Selected units: {{units}}</p>
            <button @click="bookForClient" class="btn btn-primary">Book</button>
        </div>
    </div>
        <div v-if="show_results">
            <h1>Successful Reserved</h1>
            <p>{{bookings}}</p>
            <button class="btn" @click="bookAgain">Book again</button>
        </div>
    </div>
</template>

<script>
    import {HTTP} from "../../http.common";
    import {mapGetters} from "vuex";

    export default {
        name: "BookForClient",
        data: () => {
            return {
                blocks: [],
                floors: [],
                floor_units: [],
                block_id: '',
                floor_id: '',
                email: '',
                user_id: '',
                project_id: '',
                show_blocks: false,
                show_floors: false,
                show_units: false,
                show_select: true,
                show_results: false,
                show_projects: false,
                bookings: []
            }
        },
        computed: {
            ...mapGetters([
                'units',
                'projects',

            ]),
            book() {
                if (this.units.length > 0) {
                    return true
                }
            }
        },
        created() {
            this.$store.dispatch('fetchProjects');
        },
        methods: {
            retrieveProjects() {
                HTTP.post(`get_user`, {
                    email: this.email
                })
                    .then(res => {
                        if (res.data === 'User not found') {
                            alert("Client not found");
                        } else {
                            this.$store.dispatch('fetchProjects');
                            this.user_id = res.data.id;
                            console.log(this.user_id);
                            this.show_projects = true;
                        }
                    }).catch(err => {
                    console.log(err)
                });
            },
            retrieveBlocks() {
                this.show_blocks = true;
                HTTP.get(`block/project_blocks/${this.project_id}`)
                    .then(res => {
                        this.blocks = res.data;
                    }).catch(err => {
                    console.log(err)
                });
            },
            retrieveFloor() {
                this.show_floors = true;
                HTTP.get(`block/block_floors/${this.block_id}`)
                    .then(res => {
                        this.floors = res.data;
                    }).catch(err => {
                    console.log(err)
                })
            },
            retrieveUnits() {
                this.show_units = true;
                HTTP.get(`block/floor_units/${this.floor_id}`)
                    .then(res => {
                        this.floor_units = res.data;
                    }).catch(err => {
                    console.log(err)
                })
            },
            selectUnit(id) {
                this.$store.dispatch('selectUnit', id);
            },
            removeUnit(id) {
                this.$store.dispatch('removeUnit', id);
            },
            makeReservation() {
                HTTP.post(`book_apartment`, {
                    units: this.units,
                })
                    .then(res => {
                        this.bookings = res.data;
                        this.show_select = false;
                        this.show_results = true;
                    }).catch(err => {
                    console.log(err)
                })
            },
            bookForClient() {
                HTTP.post(`book_apartment_for_client`, {
                    units: this.units,
                    user: this.user_id,
                })
                    .then(res => {
                        this.bookings = res.data;
                        this.show_select = false;
                        this.show_results = true;
                    }).catch(err => {
                    console.log(err)
                })
            },
            bookAgain() {
                this.show_select = true;
                window.location.href = "/the_project"
            }
        }
    }
</script>

<style scoped>

</style>
