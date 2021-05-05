import { Component } from 'react';
import './Browse.css';

export default class Browse extends Component {
    state = {
        results: []
    };

    handleSubmit = event => {
        let api = 'https://randomuser.me/api/';

        fetch(api)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    results: data
                })
            })
    }

    render() {
        return (
            <div>
                BROWSE SECTION
                <br />
                <br />
                <br />
                <br />
                <button onClick={this.handleSubmit}>search</button>
                <br />
                <br />
                <br />
                <br />
                {JSON.stringify(this.state.results)}
            </div>
        )
    }
}