import React from 'react'
import { Checkbox } from 'semantic-ui-react'

const PlaybookMoveSelector=(props)=>{


        return(
            <div>
                <Checkbox onClick={()=> props.handleClick()} label="The Chosen" checked={props.playbooks.includes("The Chosen")} toggle/>
                <Checkbox label="The Crooked" checked={props.playbooks.includes("The Crooked")} toggle/>
                <Checkbox label="The Divine" checked={props.playbooks.includes("The Divine")} toggle/> 
                <Checkbox label="The Expert" checked={props.playbooks.includes("The Expert")} toggle/>
                <Checkbox label="The Flake" checked={props.playbooks.includes("The Flake")} toggle/>
                <Checkbox label="The Initiate" checked={props.playbooks.includes("The Initiate")} toggle/>
                <Checkbox label="The Monstrous" checked={props.playbooks.includes("The Monstrous")} toggle/>
                <Checkbox label="The Mundane" checked={props.playbooks.includes("The Mundane")} toggle/>
                <Checkbox label="The Professional" checked={props.playbooks.includes("The Professional")} toggle/>
                <Checkbox label="The Spell-Slinger" checked={props.playbooks.includes("The Spell-Slinger")} toggle/>
                <Checkbox label="The Spooky" checked={props.playbooks.includes("The Spooky")} toggle/>
                <Checkbox label="The Wronged" checked={props.playbooks.includes("The Wronged")} toggle/>
            </div>
        )
    }

export default PlaybookMoveSelector