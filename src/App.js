import React, { Component } from 'react';
import Siema from 'siema';
import VisibilitySensor from 'react-visibility-sensor';
import logo from './besm-logo.svg';
import hoseaFace from './images/hosea-face.jpg';
import jacobFace from './images/jacob-face.jpg';
import reubenFace from './images/reuben-face.jpg';
import matthewFace from './images/matthew-face.jpg';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
import './App.css';

class App extends Component {
  prev = () => {
    this.siema.prev()
  };
  
  next = () => {
    this.siema.next()
  };
  listen = (e) => {
    // if it's left arrow key
    if (e.keyCode === 37) {
      this.prev()
    }
    // if it's right arrow key
    else if (e.keyCode === 39) {
      this.next()
    }
  }
  addKeyboard = (isVisible) => {
    if (isVisible === true) {
      document.addEventListener('keydown', this.listen)
    } else {
      document.removeEventListener('keydown', this.listen);
    }
  };
  render() {
    let options = {
      sectionClassName:     'section',
      anchors:              ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour', 'sectionFive', 'sectionSix'],
      scrollBar:            false,
      navigation:           true,
      verticalAlign:        false,
      arrowNavigation:      true
    };
    return (
      <div className="App">
        <Header>
          <a href="#sectionOne">Section One</a>
          <a href="#sectionTwo">Section Two</a>
          <a href="#sectionThree">Section Three</a>
        </Header>
        <Footer>
          <a href="">Dcoumentation</a>
          <a href="">Example Source</a>
          <a href="">About</a>
        </Footer>
        <SectionsContainer className="container" {...options}>
          <Section className="intro" verticalAlign="true">
            <img src={logo} className="app-logo" alt="logo" />
          </Section>
          <Section className="about">
            <h2>Brief bio</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar luctus tincidunt. Pellentesque viverra enim quis augue finibus, sit amet sollicitudin mauris posuere. In ac libero fringilla, suscipit lorem in, dapibus ligula. Fusce velit sem, dignissim vel quam vitae, pellentesque pretium dolor. Praesent bibendum imperdiet aliquet. Quisque ut eros dui. Sed egestas odio ac eleifend imperdiet. Etiam suscipit sollicitudin ligula, ut consectetur sapien facilisis in. Morbi a risus vitae ligula gravida dapibus. Ut eget odio egestas, ultricies ipsum id, consequat tellus. Nullam et velit quis nulla cursus volutpat.</p>

            <p>Donec sed aliquet dolor. Nullam augue arcu, mollis vel tempus eleifend, volutpat et velit. Fusce suscipit massa et efficitur sodales. Cras dapibus odio sed tempor fermentum. Donec pellentesque quam metus. Fusce eleifend elit nec nulla auctor pulvinar. Etiam sit amet massa in nibh luctus sagittis. Duis hendrerit sed enim quis hendrerit. In blandit velit et magna lobortis porttitor. Morbi eget nisl in lacus molestie vulputate quis porttitor nulla. Nam ut mauris mi.</p>

            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec iaculis tincidunt euismod. Praesent a pellentesque dolor, id lobortis justo. Morbi maximus, felis in condimentum laoreet, massa velit scelerisque lorem, ac dictum tortor ligula et augue. Curabitur fermentum, odio id tincidunt sollicitudin, tortor est imperdiet sem, in porttitor ligula odio faucibus felis. Phasellus placerat nisl laoreet, blandit justo sed, vehicula lorem. Suspendisse potenti. Nulla vulputate id nibh ac maximus. Phasellus et nibh et justo semper condimentum id id elit. Mauris luctus eget eros non volutpat. Curabitur vel laoreet quam. Donec vel ultricies odio. Praesent tincidunt urna orci, vitae mollis velit consequat in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          </Section>
          <Section>
            <VisibilitySensor onChange={this.addKeyboard} />
            <div className="siema">
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
            <button onClick={this.prev}>Prev</button>
            <button onClick={this.next}>Next</button>
          </Section>
          <Section className="courses">
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
          </Section>
          <Section>
            <p>Upcoming projects</p>
          </Section>
          <Section className="donate">
            <button className="call-to-action">Donate</button>
          </Section>
        </SectionsContainer>
      </div>
    );
  }
  componentDidMount() {
    this.siema = new Siema({
      loop: true
    });
  }
}

export default App;