import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';
import empty from 'is-empty';
import LogoSvg from './Logo';

class Header extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <header>
        <LogoSvg />
        {!empty(user) ? (
          <button onClick={this.onLogoutClick} className="logout-button">
            Logout
          </button>
        ) : (
          ''
        )}
      </header>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Header);
