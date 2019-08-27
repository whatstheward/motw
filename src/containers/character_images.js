import React from 'react';
import { connect } from 'react-redux'
import the_chosen from '../images/the_chosen.png'

class characterImages extends React.Component{
    render(){
        const characterImagesArray = [
            the_chosen
        ]
        return(
            characterImagesArray
        )
    }
}

export default connect(characterImages)