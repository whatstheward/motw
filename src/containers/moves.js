import React from 'react'
import { connect } from 'react-redux'
import { Card, Grid } from 'semantic-ui-react'
import '../css/Moves.css'
import PlaybookMoveSelector from '../components/PlaybookMoveSelector'

class Moves extends React.Component{

    state={
        playbooks: ["All", "The Chosen", "The Crooked", "The Divine"]
    }

    componentDidMount(){
        fetch('http://localhost:3000/hunter_moves')
        .then(res => res.json())
        .then(data => this.props.storeHunterMoves(data))
    }

    handleClick=()=>{
        console.log('clicked')
    }

    renderCards = () => {
        let movesToPrint = []
        this.props.hunterMoves.map(move => {if(this.state.playbooks.some(playbook => playbook === move.playbook))
        movesToPrint.push(move)})

        return movesToPrint.map(move => this.buildMoveCard(move))
    }

    buildMoveCard = (move)=>{
        return (
            <Card key={move.id} id="moveCard">
                {   move.playbook !== "All" ? 
                    <h2> {move.playbook}</h2>
                    :
                    null
                }
                <h2>{move.name}</h2>
                {
                    move.rating ?
                    <h5>Rating: {move.rating} </h5>
                    :
                    null
                }
                <p dangerouslySetInnerHTML={{__html: move.description}}></p>
                { move.partial_success ?
                <div>
                    <p dangerouslySetInnerHTML={{__html: move.total_success}}></p>
                    <p dangerouslySetInnerHTML={{__html: move.partial_success}}></p>
                </div>
                :
                null}
            </Card>
        )
    }

    render(){
        return(
            <>
            <PlaybookMoveSelector id="moveSelector" playbooks={this.state.playbooks}handleClick={this.handleClick} />
            <Card.Group className="group" >
            {this.renderCards()}
            </Card.Group>
            </>
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