import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Image } from 'semantic-ui-react'
import "../images/Motw_logo.png"

class Navbar extends React.Component {
    
    state ={ activeItem: ''}


    handleItemClick = (e, { name }) => {
        let url = name.toLowerCase().replace(" ", "")
        this.setState({ activeItem: name })
        console.log(url)
        this.props.history.push(`/${url}`)
    }

    render(){
        const { activeItem } = this.state

        return(
            <Menu tabular>
                <Menu.Item>
                    <Link to="/home"><Image src="https://cf.geekdo-images.com/imagepage/img/2ScoeyG4kAzH0aV2V4YFJ8WDwVE=/fit-in/900x600/filters:no_upscale()/pic2884262.png" size="small" /></Link>
                </Menu.Item>
                <Menu.Item name="Character Sheet" active={activeItem === 'Character Sheet'} onClick={this.handleItemClick}>
                </Menu.Item>.
                <Menu.Item name="Moves" active={activeItem === 'Moves'} onClick={this.handleItemClick} />
                <Menu.Item name="Login" position="right">
                    <Link to="/login">Login</Link>
                </Menu.Item>
            </Menu>
        )
    }
}

export default withRouter(connect()(Navbar))
