export default (state={hunterMoves: []}, action) => {
    switch(action.type){
        case "ADD HUNTER MOVES":
        return {hunterMoves: action.data}
        default:
            return state
    }
}