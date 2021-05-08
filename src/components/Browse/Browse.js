import { Component } from 'react';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo/UserInfo';
import { useState } from 'react';
import Popup from './Popup/Popup';
import { CountryNames, CountryList } from './CountryList';
import NewSearchButton from '../NewSearchButton/NewSearchButton'
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
        countrySelected: '',
        gender: '',
        isNewSearch: true
    };

    handleSelectCountry = event => {
        this.setState({
            countrySelected: event.target.value
        })
    }

    handleSelectGender = event => {
        this.setState({
            gender: event.target.value
        })
    }

    handleCustomSearch = event => {
        console.log(this.state)

        let gender = this.state.gender;
        let country = this.state.countrySelected;

        let api = `https://randomuser.me/api/?results=9&nat=${country}&gender=${gender}`;

        fetch(api)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    people: data.results
                })
            })

        this.setState({
            info: [],
            countrySelected: '',
            gender: '',
            isLoadingPopup: true
        })
    }

    handleSubmit = event => {
        let api = 'https://randomuser.me/api/?results=9';

        fetch(api)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    people: data.results, isNewSearch: false
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

                {this.state.isNewSearch ? (
                    <div className='newSearch'>
                        <NewSearchButton search={this.handleSubmit} customSearch={this.renderCustomSearch} />
                    </div>
                ) : (
                    <NewSearchButton search={this.handleSubmit} customSearch={this.renderCustomSearch} />
                )}

                
                
                {this.state.isLoadingPopup ? (
                    <div></div>
                ) : (
                    <Popup trigger={true} close={this.closePopup}>

                        <div className='selectGender'>
                            Gender:
                                <label><input type="radio" value="male" name="gender" onChange={this.handleSelectGender} /> Male</label>
                            <label><input type="radio" value="female" name="gender" onChange={this.handleSelectGender} /> Female</label>
                        </div>

                        <div className='selectCountry'>
                            Select country:
                                <select value={this.state.countrySelected} onChange={this.handleSelectCountry}>
                                {CountryList.map(country =>
                                    <option value={country.code}>{country.label}</option>
                                )}
                            </select>
                        </div>

                        <button onClick={this.handleCustomSearch}>Custom Search</button>

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
                <div className='userInfo'>
                    {this.state.isLoadingButton ? (
                        <div></div>
                    ) : (
                        <UserInfo people={this.state.people} selectedUserId={this.state.selectedUserId} />
                    )}
                </div>

            </div>
        )
    }
}