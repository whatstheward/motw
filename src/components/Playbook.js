import React from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux'


const Playbook = (props) => {   

    const imgName = props.selectedPlaybook.name.toLowerCase().replace("the ","").replace("-","")
    const path = require(`../images/the_${imgName}.png`)
    return (
        <Grid id="playbook">
            <Grid.Column width={5} id="left">
            <h2 id="playbook-name">{props.selectedPlaybook.name}:</h2>
            <div id="left-down">
            <img id="playbook-image" alt={props.selectedPlaybook.name} src={ path } />
            <p id="stale-text">{props.selectedPlaybook.fascimile}</p>
            </div>
            </Grid.Column>
            <Grid.Column width={5}>
            <p id="flavor-text">{props.selectedPlaybook.description}</p>
            </Grid.Column>
        </Grid>
    )
}


const mapStateToProps = state => {
    return{
        selectedPlaybook: state.playbooks.selectedPlaybook
    }
}
export default connect(mapStateToProps)(Playbook)
