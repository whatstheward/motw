import React from 'react'
import characterImages from '../containers/character_images'
import { Image, Grid, GridColumn } from 'semantic-ui-react'
import '../css/characterSheets.css'
import Chosen from '../images/the_chosen.png'
import Crooked from '../images/the_crooked.png'
import Divine from '../images/the_divine.png'
import Expert from '../images/the_expert.png'
import Flake from '../images/the_flake.png'
import Initiate from '../images/the_initiate.png'
import Monstrous from '../images/the_monstrous.png'
import Mundane from '../images/the_mundane.png'
import Professional from '../images/the_professional.png'
import SpellSlinger from '../images/the_spellingslinger.png'
import Spooky from '../images/the_spooky.png'
import Wronged from '../images/the_wrong.png'


class CharacterSheets extends React.Component {

    state={
        
    }

    showName = (e) =>{
        let name = e.target.parentElement
        name.querySelector('h3').style.visibility = "visible"
    }
    
    hideName = (e) =>{
        let name = e.target.parentElement
        name.querySelector('h3').style.visibility = "hidden"
    }
    

    render(){
        return(
            <Grid>
                <Grid.Column width={1}/>
                <Grid.Column id="characterList" width={14}>
                <div>
                    <img onMouseEnter={(e)=>this.showName(e)} onMouseOut={(e)=>this.hideName(e)} src={Chosen}/>
                    <h3 id="name">The Chosen</h3>
                </div>
                <div>
                    <img onMouseEnter={(e)=>this.showName(e)} onMouseOut={(e)=>this.hideName(e)} src={Crooked}/>
                    <h3 id="name">The Crooked</h3>
                </div>
                <div>
                    <img onMouseEnter={(e)=>this.showName(e)} onMouseOut={(e)=>this.hideName(e)} src={Divine}/>
                    <h3 id="name">The Divine</h3>
                </div>
                <div>
                    <img onMouseEnter={(e)=>this.showName(e)} onMouseOut={(e)=>this.hideName(e)} src={Expert}/>
                    <h3 id="name">The Expert</h3>
                </div>
                <div>
                    <img onMouseEnter={(e)=>this.showName(e)} onMouseOut={(e)=>this.hideName(e)} src={Flake}/>
                    <h3 id="name">The Flake</h3>
                </div>
                <div>
                    <img onMouseEnter={(e)=>this.showName(e)} onMouseOut={(e)=>this.hideName(e)} src={Initiate}/>
                    <h3 id="name">The Initiate</h3>
                </div>
                <div>
                    <img onMouseEnter={(e)=>this.showName(e)} onMouseOut={(e)=>this.hideName(e)} src={Monstrous}/>
                    <h3 id="name">The Monstrous</h3>
                </div>
                <div>
                    <img onMouseEnter={(e)=>this.showName(e)} onMouseOut={(e)=>this.hideName(e)} src={Mundane}/>
                    <h3 id="name">The Mundane</h3>
                </div>
                <div>
                    <img onMouseEnter={(e)=>this.showName(e)} onMouseOut={(e)=>this.hideName(e)} src={Professional}/>
                    <h3 id="name">The Professional</h3>
                </div>
                <div>
                    <img onMouseEnter={(e)=>this.showName(e)} onMouseOut={(e)=>this.hideName(e)} src={SpellSlinger}/>
                    <h3 id="name">The SpellSlinger</h3>
                </div>
                <div>
                    <img onMouseEnter={(e)=>this.showName(e)} onMouseOut={(e)=>this.hideName(e)} src={Spooky}/>
                    <h3 id="name">The Spooky</h3>
                </div>
                <div>
                    <img onMouseEnter={(e)=>this.showName(e)} onMouseOut={(e)=>this.hideName(e)} src={Wronged}/>
                    <h3 id="name">The Wronged</h3>
                </div>
                </Grid.Column>
                <Grid.Column width={1}/>
            </Grid>

        )
    }
}

export default CharacterSheets