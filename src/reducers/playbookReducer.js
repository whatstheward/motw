export default (state={playbooks:[]}, action) =>{
    switch(action.type){
        case "ADD PLAYBOOKS":
        return {playbooks: action.data}
    default:
        return state
    }
}