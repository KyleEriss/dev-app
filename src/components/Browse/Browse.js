import { Component } from 'react';
import './Browse.css';

export default class Browse extends Component {
    state = {
        people: []
    };

    handleSubmit = event => {
        let api = 'https://randomuser.me/api/?results=9';

        fetch(api)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    people: data.results
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
                <div className='images'>
                    {this.state.people.map((person, idx) =>
                        <div className='item'>
                            <img src={person.picture.large} />
                        </div>
                    )}   
                </div>
                
            </div>
        )
    }
}