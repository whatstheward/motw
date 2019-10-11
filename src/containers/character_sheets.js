import React from 'react'
import { connect } from 'react-redux'
import '../css/characterSheets.css'
import Playbook from '../components/Playbook'

class CharacterSheets extends React.Component {

    componentDidUpdate = (prevProps) => {
       return prevProps.selectedPlaybook !== this.props.selectedPlaybook ? this.printPlaybook : null 
    }

    printPlaybook = () => {
        return this.props.selected ? <Playbook /> : null
            
    }

    render(){
        return(
            <div>
                {this.printPlaybook()}    
            </div>

        )
    }
}


const mapStateToProps = state =>{
    return{
        selected: state.playbooks.selectedPlaybook,

    }
}

export default connect(mapStateToProps)(CharacterSheets)