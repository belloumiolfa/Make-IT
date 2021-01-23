import React, { Component } from 'react';
import CountDownTime from './CountDownTime';
import { connect } from 'react-redux';
import {
  increaseCounter,
  decreaseCounter,
} from '../../../Redux/Actions/testAction';
import Subscribe from './Subscribe';
import SocialMedia from './SocialMedia';
import moment from 'moment';

class Header extends Component {
  state = {
    dateValue: '07-11-2021',
    timeValue: '07:11',
    ampmValue: 'pm',
    countdown: {
      days: '',
      hours: '',
      mins: '',
      secs: '',
    },
    isCountdownSet: true,
    isModalOpen: false,
    infoMessage: '',
    settingsFormError: false,
    errorMessage: '',
  };
  constructor(props) {
    super(props);

    this.timer = null;
    this.countDownDate = {
      dateValue: this.state.dateValue,
      timeValue: this.state.timeValue,
      ampmValue: this.state.ampmValue,
      unixEndDate: '',
    };
  }

  startCountdown(endDate) {
    clearInterval(this.timer);
    this.timer = null;

    if (endDate.unixEndDate !== '') {
      this.timer = setInterval(() => this.playTimer(endDate.unixEndDate), 1000);
    } else {
      this.setState({
        isCountdownSet: false,
        infoMessage: 'Click the Settings button to start a new countdown.',
      });
    }
  }

  playTimer(unixEndDate) {
    const distance = unixEndDate - moment().format('X');

    if (distance > 0) {
      this.setState({
        countdown: {
          days: parseInt(distance / (60 * 60 * 24), 10),
          hours: parseInt((distance % (60 * 60 * 24)) / (60 * 60), 10),
          mins: parseInt((distance % (60 * 60)) / 60, 10),
          secs: parseInt(distance % 60, 10),
        },
        isCountdownSet: true,
        infoMessage: '',
      });
    } else {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({
        isCountdownSet: false,
        infoMessage: 'we are here !!',
      });
    }
  }
  componentDidMount() {
    const useDate = {
      dateValue: this.state.dateValue,
      timeValue: this.state.timeValue,
      ampmValue: this.state.ampmValue,
      unixEndDate: moment(
        `${this.state.dateValue} ${this.state.timeValue} ${this.state.ampmValue}`,
        'MM-DD-YYYY hh:mm A'
      ).format('X'),
    };

    this.startCountdown(useDate);
  }
  render() {
    return (
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex flex-column align-items-center">
          <h1>WE ARE COMING SOON...</h1>

          <h2>
            We're working hard to improve our website and we'll ready to launch
            after
          </h2>

          {this.state.isCountdownSet ? (
            <CountDownTime countdown={this.state.countdown} />
          ) : (
            <p className="message info-message">
              <span className="fa fa-info-circle fa-lg fa-fw"></span>{' '}
              {this.state.infoMessage}
            </p>
          )}
          <Subscribe />
          <SocialMedia />
        </div>
      </header>
    );
  }
}
const mapStateToProps = state => {
  return {
    count: state.test.count,
  };
};

const mapActionToProps = {
  increaseCounter,
  decreaseCounter,
};

export default connect(mapStateToProps, mapActionToProps)(Header);
