import { Component } from 'react';
import Popup from '../Popup/Popup';
import { useState } from 'react';
import './UserInfo.css';

export default class UserInfo extends Component {

    state = {
        // people: this.props.people,
        // selectedUserId: this.props.selectedUserId,
        selectedUser: [],
        isLoading: true
    }

    renderUserInfo = event => {
        const idNumber = this.props.selectedUserId;

        console.log(idNumber)

        let viewMoreInfo = this.props.people.map(person =>

            <ul>
                <li>
                    <div className='item'>
                        <img src={person.picture.large} />
                    </div>

                    <h3>Name</h3>
                    {person.name.title}. {person.name.first} {person.name.last}
                    <br />

                    <h3>Address</h3>
                    {person.location.street.number} {person.location.street.name}
                    <br />
                    {person.location.city}, {person.location.state} {person.location.postcode}
                    <br />
                    {person.location.country}
                    <br />

                    <h3>Contact and Login Credentials</h3>
                            email: {person.email}, username: {person.login.username}, password: {person.login.username}, home phone: {person.phone}, cell: {person.cell}
                    <br />

                    <h3>DOB</h3>
                            date: {person.dob.date} age: {person.dob.age}
                    <br />

                    <h3>Gender</h3>
                    {person.gender}
                    <br />

                    <h3>Nationality</h3>
                    {person.nat}

                </li>
            </ul>
        )

        this.setState({
            selectedUser: viewMoreInfo[idNumber],
            isLoading: false
        })

        console.log(this.state.isLoading)
        console.log(this.state.selectedUser)
    }

    closePopup = event => {
        this.setState({
            isLoading: true
        })
    }

    render() {

        return (
            <div className='userBox'>
                <br />
                <button onClick={this.renderUserInfo}>view more info</button>
                {this.state.isLoading ? (
                    <div></div>
                ) : (
                    <Popup trigger={true} close={this.closePopup}>{this.state.selectedUser}</Popup>
                )}
            </div>
        )
    }
}
