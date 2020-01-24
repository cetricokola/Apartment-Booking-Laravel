let mutations = {
    CREATE_PROJECT(state, project) {
        state.projects.unshift(project)
        state.new_project.unshift(project)
    },
    CREATE_PROJECT_DETAILS(state, detail){
        state.details.unshift(detail)
    },
    FETCH_PROJECTS(state, project) {
        return state.projects = project
    },
    FETCH_BLOCKS(state, block){
        return state.blocks = block
    }
};
export  default mutations;
