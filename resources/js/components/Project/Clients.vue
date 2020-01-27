<template>
    <div class="container">
        <div v-if="clients.length> 0">
            <table class="table">
                <thead class="thead-dark">
                <tr>
                    <th scope="col">Client Name</th>
                    <th scope="col">Client Email</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="client in clients">
                    <td>{{client.name}}</td>
                    <td>{{client.email}}</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div v-else>
            <h6>No Clients</h6>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "Clients",
        computed: {
            ...mapGetters([
                'clients'
            ])
        },
        created() {
            this.$store.dispatch('fetchClients')
        },
        methods: {
            removeClient(client) {
                this.$store.dispatch('removeClient', client)
            }
        }
    }
</script>

<style scoped>

</style>
