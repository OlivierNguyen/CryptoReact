import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TweenMax from 'gsap';

export default class MenuButton extends Component {

    constructor(props) {
        super(props);
        this.setAnimation = this.setAnimation.bind(this);
    }

    componentDidMount() {
        TweenMax.set(ReactDOM.findDOMNode(this.borderLine), {
            width: this.props.isActive ? '100%' : 0,
        });
    }

    componentDidUpdate() {
        this.setAnimation();
    }


    setAnimation() {
        if (this.props.isActive) {
            TweenMax.to(ReactDOM.findDOMNode(this.borderLine), 0.5, {
                width: '100%',
            });
        } else {
            TweenMax.set(ReactDOM.findDOMNode(this.borderLine), {
                width: 0,
            });
        }
    }

    render() {
        const S = {
            container: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                height: 60,
                marginLeft: 25,
                marginRight: 25,
                fontSize: 14,
                minWidth: 150,
                ...this.props.style,
            },
            border: {
                width: '100%',
                height: 4,
                position: 'absolute',
                backgroundColor: '#000',
                left: 0,
                bottom: 0,
            }
        };

        return (
            <div style={S.container}>
                {this.props.label}
                <div
                    ref={ref => this.borderLine = ref}
                    style={S.border}
                >
                </div>
            </div>
        )
    }
}