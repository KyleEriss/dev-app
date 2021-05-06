import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Browse.css';

export default class Browse extends Component {
    state = {
        people: [],
        userInfo: [],
        loading: ''
    };

    handleSubmit = event => {
        let api = 'https://randomuser.me/api/?results=9';

        fetch(api)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    people: data.results, loading: 'hello world'
                })
            })
    }

    renderUserInfo = event => {
        const idNumber = event.currentTarget.dataset.id;
        let info = this.state.people.map(person =>
            <ul>
                <li>
                    {person}
                </li>
            </ul>    
        )
        this.setState({
            loading: info[idNumber]
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
                            <button onClick={this.renderUserInfo} data-id={idx}><img src={person.picture.large} /></button>
                        </div>
                    )}
                </div>
                <br />
                <br />
                <br />
                <br />
                {JSON.stringify(this.state.loading)}
            </div>
        )
    }
}