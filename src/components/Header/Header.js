import { Component } from 'react';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1 style={{ textDecoration: 'none', color: '#61dafb'}}>HLS API Project</h1>
            </div>
        )
    }
}