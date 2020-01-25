<template>
    <div>
        <h1>Cetric</h1>
        <h1>{{project.name}}</h1>
        <p>{{project.description}}</p>
        <label for="name">Block</label><br><br>
        <select class="custom-select" id="name" v-model="block_id">
            <option v-for="block in blocks" v-bind:value=block.id>{{block.name}}</option>
        </select>

        <button @click="retrieveFloor" class="btn btn-primary">Next</button>
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
            <button @click="makeReservation()" class="btn btn-primary">Book</button>
        </div>
    </div>
</template>

<script>
    import {HTTP} from "../http.common";
    import {mapGetters} from "vuex";

    export default {
        name: "ViewProject",
        data: () => {
            return {
                project: '',
                blocks: [],
                floors: [],
                floor_units: [],
                block_id: '',
                floor_id: '',
                show_floors: false,
                show_units: false
            }
        },
        computed: {
            getProjectId() {
                return localStorage.getItem("project_id")
            },
            ...mapGetters([
                'units'
            ]),
            book() {
                if (this.units.length > 0) {
                    return true
                }
            }
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
                        console.log(res.data)
                    }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped>
    .grid-container {
        display: grid;
        grid-template-columns: auto auto;
        padding: 10px;
    }

    .grid-item {
        margin: 15px;
        width: 100%;
        /*font-size: 30px;*/
        text-align: center;
        padding: 0 10px 0 10px
    }

</style>
