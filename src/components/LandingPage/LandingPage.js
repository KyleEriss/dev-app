import { Component } from 'react';
import NewSearchButton from '../NewSearchButton/NewSearchButton';
import './LandingPage.css';

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <NewSearchButton />
            </div>
        )
    }
}