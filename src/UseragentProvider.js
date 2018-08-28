import { Component } from 'react'
import { node,instanceOf } from 'prop-types'
import ClientDetect from './ClientDetect';

export default class UseragentProvider extends Component {
    static propTypes = {
        children: node,
        userAgent: instanceOf(ClientDetect)
    }

    static childContextTypes = {
        userAgent: instanceOf(ClientDetect)
    }

    constructor(props) {
        super(props)

        if (props.userAgent) {
            this.userAgent = props.userAgent
        } else {
            this.userAgent = new ClientDetect();
        }
    }

    getChildContext() {
        return {
            userAgent: this.userAgent
        }
    }

    render() {
        return this.props.children
    }
}
