export default (state={hunterMoves: []}, action) => {
    switch(action.type){
        case "ADD HUNTER MOVES":
        return {hunterMoves: action.data.hunter_moves}
        default:
            return state
    }
}