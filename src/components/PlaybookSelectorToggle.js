import React from 'react';
import { Checkbox, Button } from 'semantic-ui-react'

const PlaybookSelectorToggle = (props)=> {
     return(
        <Button onClick={()=> props.handleClick(props.playbook)}  label={props.playbook}/>         
     )
}
export default PlaybookSelectorToggle