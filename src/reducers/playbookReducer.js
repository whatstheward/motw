export default (state={playbooks:[{name: "All"}], selectedPlaybook: ""}, action) =>{
    switch(action.type){
        case "ADD PLAYBOOKS":
        let newPlaybooks = [...state.playbooks, action.data].flat()
        return {playbooks: newPlaybooks}
        case "SELECT_PLAYBOOK":
            return {...state, selectedPlaybook: action.data}
    default:
        return state
    }
}