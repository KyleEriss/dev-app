import { Component } from 'react';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo/UserInfo';
import { useState } from 'react';
import Popup from './Popup/Popup';
import { CountryNames, CountryList } from './CountryList';
import './Browse.css';

export default class Browse extends Component {
    state = {
        people: [],
        info: [],
        selectedUser: [],
        isLoading: true,
        isLoadingButton: true,
        isLoadingPopup: true,
        selectedUserId: '',
        countrySelected: ''
    };

    handleSelect = event => {
        this.setState({
            countrySelected: event.target.value
        })
    }

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

        console.log(idNumber)

        let userInfo = this.state.people.map(person =>
            <ul>
                <li>
                    {person.name.title} {person.name.first} {person.name.last}
                    <br />
                    {person.location.city}, {person.location.state} {person.location.country}
                </li>
            </ul>
        )

        this.setState({
            info: userInfo[idNumber],
            selectedUserId: idNumber,
            isLoadingButton: false
        })

        console.log(this.state.isLoadingButton)
        console.log(this.state.info)
    }

    renderCustomSearch = event => {
        this.setState({
            isLoadingPopup: false
        })

        console.log(this.state.isLoadingPopup)
    }

    handleViewInfo = event => {
        this.setState({
            isLoading: false
        })
    }

    closePopup = event => {
        this.setState({
            isLoadingPopup: true
        })
    }

    render() {
        return (
            <div className='browse'>
                <button onClick={this.handleSubmit}>New Search</button> or try <a onClick={this.renderCustomSearch}>Custom Search</a>
                {this.state.isLoadingPopup ? (
                    <div></div>
                ) : (
                    <Popup trigger={true} close={this.closePopup}>
                        <form>
                            <div className='selectGender'>
                                Gender:
                            <input type="radio" value="Male" name="gender" /> Male
                            <input type="radio" value="Female" name="gender" /> Female
                            </div>

                            <div>
                                Select country:
                                <select value={this.state.sectCountry} onChange={this.handleSelect}>
                                    {CountryList.map(country =>
                                        <option value={country.code}>{country.label}</option>
                                    )}
                                </select>
                            </div>

                            <button onClick={this.handleCustomSearch}>Custom Search</button>
                        </form>
                    </Popup>
                )}

                <br />
                <br />
                <div className='images'>
                    {this.state.people.map((person, idx) =>
                        <div className='item'>
                            <img src={person.picture.large} onClick={this.renderUserInfo} data-id={idx} />
                        </div>
                    )}
                </div>
                <br />
                {this.state.info}
                {this.state.isLoadingButton ? (
                    <div></div>
                ) : (
                    <UserInfo people={this.state.people} selectedUserId={this.state.selectedUserId} />
                )}
            </div>
        )
    }
}