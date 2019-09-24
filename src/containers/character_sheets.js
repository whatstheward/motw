import React from 'react'
import characterImages from '../containers/character_images'
import { Image, Grid, GridColumn } from 'semantic-ui-react'
import { connect } from 'react-redux'
import '../css/characterSheets.css'
import Playbook from '../components/Playbook'

const characters = [] 

class CharacterSheets extends React.Component {


    state={
        selected: null,
        selected_image: null,
        playbooks: null
    }

    componentDidMount(){
        fetch('http://localhost:3000/playbooks')
        .then(res => res.json())
        .then(data => {
            this.setState({playbooks: data})
            this.props.storePlaybooks(data)})
    }

    buildIcons(){
        if(this.state.playbooks){
        return this.state.playbooks.map(playbook => this.printIcon(playbook))
        }else{
        return null
        }
    }

    printIcon(playbook){
        const imgName = playbook.name.toLowerCase().replace("the ","").replace("-","")
        const path = require(`../images/the_${imgName}.png`)
            return(
                <div>
                    <img src={path} 
                    name={playbook.name} 
                    id="small-character-icon" 
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
        this.setState({selected_image: e.target.src, selected: playbook}) 
    }
    

    render(){
        return(
            <Grid>
                <Grid.Column width={1}/>
                <Grid.Column width={14}>
                    <Grid.Row id="characterList">
                        {this.buildIcons()}
                    </Grid.Row>
                <Grid.Row>
                    {this.state.selected ? 
                    <Playbook character={this.state} />
                    :
                    null
                    }
                </Grid.Row>
                </Grid.Column>
                <Grid.Column width={1}/>
            </Grid>

        )
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        storePlaybooks: (data) => dispatch({type:"ADD PLAYBOOKS", data: data})
    }
}

const mapStateToProps = state =>{
    return{
        playbooks: state.playbooks.playbooks
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSheets)