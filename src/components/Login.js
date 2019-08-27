import React from 'react'
import { connect } from 'react-redux'
import { Grid, Form, Input, Icon } from 'semantic-ui-react';
import '../css/Login.css'

class Login extends React.Component {
    state = {
        username: "",
        password: ""
    }

    render(){
        return(
            <Grid>
                <Grid.Column width={3}/>
                <Grid.Column id="mainColumn" width={10}>
                    <Form id="login">
                        <h1>Please Login</h1>
                        <Form.Field>
                            <label>Username: </label>
                            <input type="text" placeholder="Username"/>
                        </Form.Field>
                        <Form.Field>
                            <label>Password: </label>
                            <input type="password" placeholder="Password"/>
                        </Form.Field>
                        <Form.Button submit>Login</Form.Button>
                    </Form>
                </Grid.Column>
                <Grid.Column width={3}/>
            </Grid>
        )
    }
}

export default connect()(Login)