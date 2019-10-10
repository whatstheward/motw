import React from 'react'
import {connect } from 'react-redux'
import PlaybookSelectorToggle from './PlaybookSelectorToggle'

class PlaybookMoveSelector extends React.Component{

    render(){
            return(
                <div id="moveSelector">
                {this.props.allPlaybooks.map(playbook=> <PlaybookSelectorToggle handleClick={this.props.handleClick} selectedPlaybooks={this.props.selectedPlaybooks} playbook={playbook.name} />)}
                </div>
            )
        }
    }

    const mapStateToProps = state => {
        return{
            allPlaybooks: state.playbooks.playbooks
        }
    }

export default connect(mapStateToProps)(PlaybookMoveSelector)