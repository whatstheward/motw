import React from 'react';
import { Checkbox, Button } from 'semantic-ui-react'

const PlaybookSelectorToggle = (props)=> {
      return(
         <button onClick={()=> props.handleClick(props.playbook)}>
            {props.playbook}
         </button>         
      )
}
export default PlaybookSelectorToggle