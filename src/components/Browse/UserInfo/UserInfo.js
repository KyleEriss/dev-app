import { Component } from 'react';
import './UserInfo.css';

export default class UserInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            x: props.userData
        }
    }

    // state = {
    //     loading: true
    // };

    componentDidMount() {
        const { handle } = this.props.match.params
        const { userData } = this.props.location.state

        console.log(userData)
        console.log(handle)

        this.setState({
            loading: false
        })
    };

    render() {
        return (
            <div>
                {/* {this.state.userData.map((user, idx) =>
                    <ul>
                        <li key={idx}>
                            {user.name.title} {user.name.first} {user.name.last}
                        </li>
                    </ul>
                )} */}
            </div>
        )
    }
}

