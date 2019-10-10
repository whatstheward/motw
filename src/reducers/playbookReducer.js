export default (state={playbooks:[{name: "All"}]}, action) =>{
    switch(action.type){
        case "ADD PLAYBOOKS":
        let newPlaybooks = [...state.playbooks, action.data].flat()
        return {playbooks: newPlaybooks}
    default:
        return state
    }
}