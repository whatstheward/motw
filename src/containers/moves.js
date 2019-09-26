import React from 'react'
import { connect } from 'react-redux'
import { Card, Grid } from 'semantic-ui-react'
import '../css/Moves.css'

class Moves extends React.Component{

    state={
        dataLoaded: false
    }

    componentDidMount(){
        fetch('http://localhost:3000/hunter_moves')
        .then(res => res.json())
        .then(data => this.props.storeHunterMoves(data))
    }


    buildMoveCard = (move)=>{
        return (
            <Card id="moveCard">
                <h2>{move.name}</h2>
                <h5>Rating: {move.rating} </h5>
                <p dangerouslySetInnerHTML={{__html: move.description}}></p>
                <p dangerouslySetInnerHTML={{__html: move.partial_success}}></p>
                <p dangerouslySetInnerHTML={{__html: move.total_success}}></p>
            </Card>
        )
    }

    render(){
        return(
            <Card.Group id="group" >
            {this.props.hunterMoves.map(move => this.buildMoveCard(move))}
            </Card.Group>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        storeHunterMoves: (data) => dispatch({type: "ADD HUNTER MOVES", data: data})
    }
}

const mapStateToProps = state =>{
    return{
        hunterMoves: state.hunterMoves.hunterMoves
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Moves)