import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import { Router, Route, Switch } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import Dashboard from '../../dashboard/components/Dashboard';
import AlertsList from '../../alerts/components/AlertsList';
import AlertsForm from '../../alerts/components/AlertsForm';
import UsersList from '../../users/components/UsersList';
import UsersForm from '../../users/components/UsersForm';
import Login from '../../login/components/Login';

const history = createHistory();

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentRoute: history.location.pathname,
        };
    }

    componentDidMount() {
        this.unlisten = history.listen((location, action) => {
            this.setState({ currentRoute: location.pathname });
        });
    }

    componentWillUnmount() {
        this.unlisten();
    }

    render() {
        const S = {
            container: {
                padding: 20,

            },
            header: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#efefef',
                height: 70,
                color: '#fff',
            },
            logoContainer: {
                display: 'flex',
                marginLeft: 20,
                padding: 10,
            },
            innerLogoContent: {
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                marginLeft: 10,
                color: '#000',
            },
        };

        return (
            <div>
                <Router history={history}>
                    <div>
                        <div style={S.header}>
                            <div style={S.logoContainer}>
                                <div style={S.innerLogoContent}>
                                    <div
                                        style={{
                                            fontWeight: 'bold',
                                            fontSize: 18,
                                        }}
                                    >
                                        CryptoReact
                                    </div>
                                </div>
                            </div>
                            <Navigation
                                currentRoute={this.state.currentRoute}
                            />
                        </div>
                        <div style={S.container}>
                                <Switch>
                                    <Route
                                        path="/login"
                                        component={Login}
                                    />
                                    <Route
                                        path="/alerts"
                                        component={AlertsList}
                                    />
                                    <Route
                                        path="/alerts/:alertId"
                                        component={AlertsForm}
                                    />
                                    <Route
                                        path="/users"
                                        component={UsersList}
                                    />
                                    <Route
                                        path="/users/:userId"
                                        component={UsersForm}
                                    />
                                    <Route
                                        path="/"
                                        component={Dashboard}
                                    />
                                </Switch>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}
