import React, { Component } from 'react';
import logo from './besm-logo.svg';
import hoseaFace from './images/hosea-face.jpg';
import jacobFace from './images/jacob-face.jpg';
import reubenFace from './images/reuben-face.jpg';
import matthewFace from './images/matthew-face.jpg';
import $ from 'jquery';
import 'fullpage.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="fullpage">
          <div className="section intro">
            <img src={logo} className="app-logo" alt="logo" />
          </div>
          <div className="section about">
            <h2>Brief bio</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar luctus tincidunt. Pellentesque viverra enim quis augue finibus, sit amet sollicitudin mauris posuere. In ac libero fringilla, suscipit lorem in, dapibus ligula. Fusce velit sem, dignissim vel quam vitae, pellentesque pretium dolor. Praesent bibendum imperdiet aliquet. Quisque ut eros dui. Sed egestas odio ac eleifend imperdiet. Etiam suscipit sollicitudin ligula, ut consectetur sapien facilisis in. Morbi a risus vitae ligula gravida dapibus. Ut eget odio egestas, ultricies ipsum id, consequat tellus. Nullam et velit quis nulla cursus volutpat.</p>

            <p>Donec sed aliquet dolor. Nullam augue arcu, mollis vel tempus eleifend, volutpat et velit. Fusce suscipit massa et efficitur sodales. Cras dapibus odio sed tempor fermentum. Donec pellentesque quam metus. Fusce eleifend elit nec nulla auctor pulvinar. Etiam sit amet massa in nibh luctus sagittis. Duis hendrerit sed enim quis hendrerit. In blandit velit et magna lobortis porttitor. Morbi eget nisl in lacus molestie vulputate quis porttitor nulla. Nam ut mauris mi.</p>

            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec iaculis tincidunt euismod. Praesent a pellentesque dolor, id lobortis justo. Morbi maximus, felis in condimentum laoreet, massa velit scelerisque lorem, ac dictum tortor ligula et augue. Curabitur fermentum, odio id tincidunt sollicitudin, tortor est imperdiet sem, in porttitor ligula odio faucibus felis. Phasellus placerat nisl laoreet, blandit justo sed, vehicula lorem. Suspendisse potenti. Nulla vulputate id nibh ac maximus. Phasellus et nibh et justo semper condimentum id id elit. Mauris luctus eget eros non volutpat. Curabitur vel laoreet quam. Donec vel ultricies odio. Praesent tincidunt urna orci, vitae mollis velit consequat in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          </div>
          <div className="section">
            <div className="slide jacob">
              <img className="avatar" src={jacobFace} alt="Jacob Gariel" />
            </div>
            <div className="slide matthew">
              <img className="avatar" src={matthewFace} alt="Jacob Gariel" />
            </div>
            <div className="slide hosea">
              <img className="avatar" src={hoseaFace} alt="Hosea" />
            </div>
            <div className="slide reuben">
              <img className="avatar" src={reubenFace} alt="Jacob Gariel" />
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
        </div>
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