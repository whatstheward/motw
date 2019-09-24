import React from 'react';
import { Grid } from 'semantic-ui-react';


const Playbook = (props) => {
    return (
        <Grid id="playbook">
            <Grid.Column width={5} id="left">
            <h2 id="playbook-name">{props.character.selected.name}:</h2>
            <div id="left-down">
            <img id="playbook-image" src={ props.character.selected_image} />
            <p id="stale-text">{props.character.selected.fascimile}</p>
            </div>
            </Grid.Column>
            <Grid.Column width={5}>
            <p id="flavor-text">{props.character.selected.description}</p>
            </Grid.Column>
        </Grid>
    )
}

export default Playbook
