import React, { Component } from 'react';
import { CryptoReactCaller } from '../../utils/dataController';

export default class Dashboard extends Component {

    componentDidMount() {
        CryptoReactCaller.call('get', '/api/bitcoin', data => {
            console.log(data);
        })
    }
    render() {
        return <div>Dashboard</div>;
    }
}
