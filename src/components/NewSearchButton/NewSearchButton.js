import { Component } from 'react';
import './NewSearchButton.css';

export default class NewSearchButton extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.search}>New Search</button> or try <a className='customSearchText' onClick={this.props.customSearch}>Custom Search</a>
            </div>
        )
    }
}