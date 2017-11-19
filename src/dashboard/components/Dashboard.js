import React, { Component } from 'react';
import { CryptoReactCaller } from '../../utils/dataController';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
    componentDidMount() {
        CryptoReactCaller.callPromise('get', '/api/bitcoin', {}).then(res =>
            console.log(res)
        );
    }

    render() {
        if (!this.props.token) {
            return <Redirect to="/login" />;
        }

        return <div>Dashboard</div>;
    }
}

function mapStateToProps(state) {
    return { token: state.user.token };
}

export default connect(mapStateToProps)(Dashboard);
