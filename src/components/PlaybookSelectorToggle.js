import React from 'react';
import { Checkbox } from 'semantic-ui-react'

const PlaybookSelectorToggle = (props)=> {
     return(
        <Checkbox onClick={()=> props.handleClick(props.playbook)} checked={props.selectedPlaybooks.some(playbook => playbook === props.playbook)} label={props.playbook} toggle/>         
     )
}
export default PlaybookSelectorToggle