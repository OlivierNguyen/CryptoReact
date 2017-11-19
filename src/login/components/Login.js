import React, { Component } from 'react';
import t from 'tcomb-form';
import RaisedButton from 'material-ui/RaisedButton';
import { CryptoReactCaller } from '../../utils/dataController';

const Form = t.form.Form;

const LoginStruct = t.struct({
    username: t.String,
    password: t.String,
});

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.onLogin = this.onLogin.bind(this);
    }

    onLogin() {
        const value = this.login.getValue();
        if (value) {
            CryptoReactCaller.callPromise('POST', '/api/login/', value)
                .then(res => console.log(res));
        }
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                <Form ref={ref => (this.login = ref)} type={LoginStruct} />
                <RaisedButton
                    onClick={this.onLogin}
                    label="Log In"
                    primary={true}
                />
            </div>
        );
    }
}
