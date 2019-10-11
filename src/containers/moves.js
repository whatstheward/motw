import React from 'react'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'
import '../css/Moves.css'
import PlaybookMoveSelector from '../components/PlaybookMoveSelector'

class Moves extends React.Component{

    componentDidMount(){
        fetch('http://localhost:3000/hunter_moves')
        .then(res => res.json())
        .then(data => this.props.storeHunterMoves(data))
    }

    handleClick=(playbook)=>{
        this.setState({selectedPlaybooks: playbook})
    }

    renderCards = () => {
        let movesToPrint = this.props.hunterMoves.filter(move => move.playbook === "All")
        if(this.props.selectedPlaybook){
        movesToPrint =  this.props.hunterMoves.filter(move => this.props.selectedPlaybook.name === move.playbook)
        }
        return movesToPrint.map(move => this.buildMoveCard(move))
    }

    renderBasicMoves = () => {
        let movesToPrint = this.props.hunterMoves.filter(move => move.playbook === "All")
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
                <div className="group " >
                        {this.props.selectedPlaybook ? 
                        this.renderCards()
                        :
                        null}
                        {this.renderBasicMoves()}
                </div>
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
        hunterMoves: state.hunterMoves.hunterMoves,
        selectedPlaybook: state.playbooks.selectedPlaybook
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Moves)