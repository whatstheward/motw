import React from 'react'
import {connect } from 'react-redux'
import {withRouter} from 'react-router-dom'

class PlaybookMoveSelector extends React.Component{
    buildIcons(){
        if(this.props.allPlaybooks){
        let p = [...this.props.allPlaybooks].filter(pb => pb.name !== "All")
        return p.map(playbook => this.printIcon(playbook))
        }else{
        return null
        }
    }

    printIcon(playbook){
        const imgName = playbook.name.toLowerCase().replace("the ","").replace("-","")
        const path = require(`../images/the_${imgName}.png`)
            return(
                <div id="small-character-icon" >
                    <img src={path} 
                    name={playbook.name} 
                    onClick={(e)=>this.handleClick(e, playbook)} 
                    onMouseEnter={(e)=>this.showName(e)} 
                    onMouseOut={(e)=>this.hideName(e)}/>
                    <h3 id="name">
                        {playbook.name}
                    </h3>
                </div>)
    }


    showName = (e) =>{
        let name = e.target.parentElement
        name.querySelector('h3').style.visibility = "visible"
    }
    
    hideName = (e) =>{
        let name = e.target.parentElement
        name.querySelector('h3').style.visibility = "hidden"
    }

    handleClick = (e, playbook) =>{
        let name = e.target.parentElement
        name.querySelector('h3').style.visibility = "hidden"
        this.props.selectPlaybook(playbook)
    }

    render(){
            return(
                <div id="moveSelector">
                    {this.buildIcons()}
                </div>
            )
        }
    }

    const mapStateToProps = state => {
        return{
            allPlaybooks: state.playbooks.playbooks
        }
    }

    const mapDispatchToProps = dispatch => {
        return {
            selectPlaybook: data => dispatch({type:"SELECT_PLAYBOOK", data: data})
        }
    }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlaybookMoveSelector))