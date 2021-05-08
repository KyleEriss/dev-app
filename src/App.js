import './App.css';
import { React, Component } from 'react';
import Header from './components/Header/Header';
import Browse from './components/Browse/Browse';
import UserInfo from './components/Browse/UserInfo/UserInfo';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Browse />
      </div>
    )
  }
}