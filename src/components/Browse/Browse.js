import { Component } from 'react';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo/UserInfo'
import Popup from './Popup/Popup';
import './Browse.css';

export default class Browse extends Component {
    state = {
        people: [],
        info: [],
        selectedUser: [],
        isLoading: true,
        isLoadingButton: true,
        selectedUserId: ''
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

    handleViewInfo = event => {
        this.setState({
            isLoading: false
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


                    // <button onClick={this.handleViewInfo}>view more info</button>
                )}


                {/* {this.state.isLoading ? (
                    <div></div>
                ) : (

                    <div>{this.state.selectedUser}</div>


                    

                )
                } */}
            </div>
        )
    }
}



{/* {this.state.people.map((person, idx) =>
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
                    )} */}









                    // let viewMoreInfo = this.state.people.map(person =>

                    //     <ul>
                    //         <li>
                    //             <div className='item'>
                    //                 <img src={person.picture.large} />
                    //             </div>
            
                    //             <h3>Name</h3>
                    //             {person.name.title}. {person.name.first} {person.name.last}
                    //             <br />
            
                    //             <h3>Address</h3>
                    //             {person.location.street.number} {person.location.street.name}
                    //             <br />
                    //             {person.location.city}, {person.location.state} {person.location.postcode}
                    //             <br />
                    //             {person.location.country}
                    //             <br />
            
                    //             <h3>Contact and Login Credentials</h3>
                    //                     email: {person.email}, username: {person.login.username}, password: {person.login.username}, uuid: {person.login.uuid}, home phone: {person.phone}, cell: {person.cell}
                    //             <br />
            
                    //             <h3>DOB</h3>
                    //                     date: {person.dob.date} age: {person.dob.age}
                    //             <br />
            
                    //             <h3>Gender</h3>
                    //             {person.gender}
                    //             <br />
            
                    //             <h3>Nationality</h3>
                    //             {person.nat}
            
                    //         </li>
                    //     </ul>
                    // )