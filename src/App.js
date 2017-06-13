import React, { Component } from 'react';
import Logo from './Logo.js';
import hoseaFace from './images/hosea-face.jpg';
import jacobFace from './images/jacob-face.jpg';
import reubenFace from './images/reuben-face.jpg';
import matthewFace from './images/matthew-face.jpg';
import $ from 'jquery';
import 'fullpage.js';
import './fullpage.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main id="fullpage">
          <div className="section intro">
            <div className="title">
              <Logo />
              <h1>Bible School located in Singida, Tanzania</h1>
            </div>
          </div>
          <div className="section about">
            <h2>Making disciples out of all people</h2>
            <p>Bible Exchange School of Ministry is a an independent Bible school located just outside of Singida Town, Tanzania, Africa. More than just teaching knowledge, the School of Ministry's purpose is to equip Christian men and women to become effective ministers of the Gospel. It is our belief that all Christians, and not just those with official ministry positions, can build up other members of the church with their words and deeds. Our goal is to help all students that attend to better reach this potential.</p>
            <p>Originally named Deliverance Bible Institute of Tanzania, Bible Exchange School of Ministry is a child ministry of <a href="http://deliverance.me">Deliverance Center</a>, an independent church in Maine, USA. The school has been opperating in Singida since August 2015.</p>
          </div>
          <div className="section slider">
            <div className="slide jacob">
              <div className="bio">
                <img className="avatar" src={jacobFace} alt="Jacob Gabriel Mfandi" />
                <h3>Jacob Mfandi</h3>
                <h4>Teacher</h4>
              </div>
            </div>
            <div className="slide matthew">
              <div className="bio">
                <img className="avatar" src={matthewFace} alt="Matthew Derocher" />
                <h3>Matthew Derocher</h3>
                <h4>Teacher</h4>
              </div>
            </div>
            <div className="slide hosea">
              <div className="bio">
                <img className="avatar" src={hoseaFace} alt="Hosea" />
                <h3>Hosea</h3>
                <h4>Teacher</h4>
              </div>
            </div>
            <div className="slide reuben">
              <div className="bio">
                <img className="avatar" src={reubenFace} alt="Reuben Elijah" />
                <h3>Reuben Elijah</h3>
                <h4>Translator</h4>
              </div>
            </div>
          </div>
          <div className="section courses">
            <ul>
              <li>Bible Introduction</li>
              <li>Pentateuch</li>
              <li>Sunday School Evangeism</li>
              <li>Epistles II</li>
              <li>Homiletics I</li>
              <li>Homiletics II</li>
              <li>Doctrine I</li>
              <li>Doctrine II</li>
              <li>Doctrine III</li>
              <li>Church History</li>
              <li>Dispensational Truth</li>
              <li>Joshua</li>
              <li>Personal Evangelism</li>
              <li>Gospel of John</li>
            </ul>
          </div>
          <div className="section">
            <p>Upcoming projects</p>
          </div>
          <div className="section donate">
            <button className="call-to-action">Donate</button>
          </div>
        </main>
      </div>
    );
  }
  componentDidMount() {
    $('#fullpage').fullpage({
      navigation: true,
      recordHistory: false
    });
  }
}

export default App;