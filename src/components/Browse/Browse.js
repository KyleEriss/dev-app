import { Component } from 'react';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo/UserInfo'
import './Browse.css';

export default class Browse extends Component {
    state = {
        people: [],
        info: ''
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

    renderUserInfo = event => {
        const idNumber = event.currentTarget.dataset.id;
        let userData = this.state.people.map(person =>
            <ul>
                <li>
                    {person.name.title} {person.name.first} {person.name.last}
                    <br />
                    {person.location.city} {person.location.state} {person.location.country}
                </li>
            </ul>
        )

        this.setState({
            info: userData[idNumber]
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleSubmit}>search</button>
                <br />
                <br />
                <div className='images'>
                    {this.state.people.map((person, idx) =>
                        <div className='item'>
                            <Link to={{
                                pathname: '/user-info', 
                                state: { 
                                    userData: this.state.people 
                                }
                            }} >
                                <img src={person.picture.large} button onClick={this.renderUserInfo} data-id={idx} />
                            </Link>
                        </div>
                    )}
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        )
    }
}