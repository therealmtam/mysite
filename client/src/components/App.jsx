/*eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Description:
 * App component renders all views for the application.
 * Its State holds all data and disseminates it to all
 * React sub-components.
 *
 * @prop - none.
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previousView: [],
      currentView: ['homepage'],
      forwardView: [],
    };
  }

  pageBack() {
    let { previousView, currentView, forwardView } = this.state;

    if(previousView.length > 0) {
      forwardView.push(currentView.pop());
      currentView.push(previousView.pop());

      this.setState({
        previousView,
        currentView,
        forwardView,
      });
    }
  }

  pageForward() {
    let { previousView, currentView, forwardView } = this.state;

    if(forwardView.length > 0) {
      previousView.push(currentView.pop());
      currentView.push(forwardView.pop());

      this.setState({
        previousView,
        currentView,
        forwardView,
      });
    }
  }

  changeView(view) {
    let { previousView, currentView, forwardView } = this.state;
    forwardView = [];
    previousView.push(currentView.pop());
    currentView.push(view);

    this.setState({
      previousView,
      currentView,
      forwardView,
    });
  }

  renderView(view) {
    if (view === 'homepage') {
      return (<HomePage changeView={this.changeView.bind(this)}/>);
    } else if (view === 'imagehost') {
      return (<ImageHost changeView={this.changeView.bind(this)}/> );
    } else if (view === 'packuno') {
      return (<Packuno changeView={this.changeView.bind(this)}/> );
    }
  }

  render() {
    return (
      <div className="material" >
        <nav className="navbar navbar-light bg-light">
          <div className="btn-group" role="group" aria-label="Basic example" style={{}}>
            <button type="button" className="btn btn-secondary btn-lg"
              style={{marginLeft: '3vw', marginRight: '40px'}}
              onClick={this.pageBack.bind(this)} >&lt;
            </button>
            <button type="button" className="btn btn-secondary btn-lg"
              onClick={this.pageForward.bind(this)}>&gt;
            </button>
            <a style={{ margin: 'auto', marginRight: '0', fontSize: '2vw'}} href="https://github.com/therealmtam/mysite">See this site's React code</a>
          </div>
        </nav>

        {this.renderView(this.state.currentView[0])}
      </div>
    );
  }
}

const HomePage = ({changeView}) => (
  <div className="homepage">
    <ul className="list">
      <li className="list-titleblock" >
        <span className="list-title">Latest Projects</span>
      </li>
      <li className="list-link">
        <button className="list-button">
          <span className="list-link">
            <a className="list-link" href="http://ec2-54-241-149-218.us-west-1.compute.amazonaws.com/">Image Hosting Microservice</a>
          </span>
        </button>
      </li>
      <p className="list-link-description">
        <a href="http://ec2-54-241-149-218.us-west-1.compute.amazonaws.com/" style={{ color:'gray' }}>
        Part of an app built using
        Service Oriented Architecture - independently served and stored 40kb images</a>
        &lt;<a href="https://github.com/therealmtam/airbnbclone">code</a>&gt;
      </p>
      <li className="list-link">
        <button className="list-button">
          <span className="list-link">
            <a className="list-link" href="https://youtu.be/iBNh73Uqp8E">Packuno</a>
          </span>
        </button>
      </li>
      <p className="list-link-description">
        <a href="https://youtu.be/iBNh73Uqp8E" style={{ color: 'gray' }}>
        An app that helps you pack by providing you
        with relevant travel info and storing your packing lists </a>
        &lt;<a href="https://github.com/Gem-Guys/packuno">code</a>&gt;
      </p>
      <li className="list-link">
        <button className="list-button">
          <span className="list-link">
              <a className="list-link" href="https://maxtam.herokuapp.com/">Gem Slack</a>
          </span>
        </button>
      </li>
      <p className="list-link-description">
        <a href="https://maxtam.herokuapp.com/" style={{ color: 'gray' }}>
        A model of Slack - a real-time team collaboration tool</a>
        &lt;<a href="https://github.com/therealmtam/Gem-Slack/tree/herokudeployed">code</a>&gt;
      </p>
    </ul>

    <ul className="list">
      <li className="list-titleblock">
        <span className="list-title">Startups</span>
      </li>
      <li className="list-link">
        <button className="list-button">
          <span className="list-link">
            <a className="list-link" href="https://youtu.be/XkNBvIEHqBs">Notos</a>
          </span>
        </button>
      </li>
      <p className="list-link-description">Building Next Gen Car Security</p>
      <li className="list-link">
        <button className="list-button">
          <span className="list-link">
            <a className="list-link" href="https://youtu.be/BCdyemecCjU">Cook Ally</a>
          </span>
        </button>
      </li>
      <p className="list-link-description">Making Your Stove Intelligent</p>
    </ul>
  </div>
);

const ImageHost = () => {};
const Packuno = () => {};
const GemSlack = () => (
  <div className="gemslack">
    <span className="gemslack-title">Gem Slack</span>
    <p className="gemslack-text">
      <div style={{margin: '2vw 0vw'}}>
        <a href="https://maxtam.herokuapp.com/" style={{fontSize: '3vw'}}>Open Gem Slack</a>
      </div>
      <ul className="gemslack-list">
        <li>Messages disappear after 10 minutes : )</li>
        <li><a href="https://github.com/therealmtam/Gem-Slack/tree/herokudeployed">Checkout the repo</a></li>
      </ul>

    </p>
  </div>
);


App.propTypes = {
};

export default App;

