import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MenuButton from './MenuButton';

export default class Navigation extends Component {

    render() {

        const routesConfig = [
            {
                label: 'Dashboard',
                path: '/',
            },
            {
                label: 'Alerts',
                path: '/alerts',
            },
            {
                label: 'Users',
                path: '/users',
            },
        ];

        const S = {
            container: {
                display: 'flex',
                justifyContent: 'center',
                height: '100%',
                width: '100%',
            },
            linkContainer: {
                display: 'flex',
                alignItems: 'center',
            },
            link: {
                marginTop: 10,
                textDecoration: 'none',
                color: '#000',
            },
            buttonConnection: {
                border: '1px solid #000',
                padding: '6px 16px',
                borderRadius: 5,
                fontSize: 14,
                marginLeft: 25,
                fontWeight: 'bold',
            },
        };
        return (
            <div style={S.container}>
                <div style={S.linkContainer}>
                    {
                        routesConfig.map(route => (
                            <Link
                                key={route.path}
                                to={route.path}
                                style={S.link}
                            >
                                <MenuButton
                                    label={route.label}
                                    style={route.style}
                                    isActive={route.path === this.props.currentRoute}
                                />
                            </Link>
                        ))
                    }
                </div>
            </div>
        );
    }
}