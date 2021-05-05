import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1><Link to='/' style={{ textDecoration: 'none', color: '#61dafb'}}>HLS Project</Link></h1>
            </div>
        )
    }
}