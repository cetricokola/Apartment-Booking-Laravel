import {HTTP} from "../http.common";

let actions = {
    createProject({commit}, project) {
        HTTP.post('project/create', project)
            .then(res => {
                commit('CREATE_PROJECT', res.data)
            }).catch(err => {
            console.log(err)
        })
    },
    createProjectDetails({commit}, details) {
        HTTP.post('project/add_blocks_floor_units', details)
            .then(res => {
                commit('CREATE_PROJECT_DETAILS', res.data)
            }).catch(err => {
            console.log(err)
        })
    },
    fetchProjects({commit}) {
        HTTP.get('project/fetch')
            .then(res => {
                commit('FETCH_PROJECTS', res.data)
            }).catch(err => {
            console.log(err)
        })
    },
    fetchBlocks({commit}) {
        HTTP.get('block/project_blocks')
            .then(res => {
                commit('FETCH_BLOCKS', res.data.input)
            }).catch(err => {
            console.log(err)
        })
    }
};
export default actions;
