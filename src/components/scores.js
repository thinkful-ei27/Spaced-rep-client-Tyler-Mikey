import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

export  class ScorePage extends React.Component {


  render(){
    return (
      <div className="dashboard">
      <div className="dashboard-username">
          <p className='dashboard-welcome'>Welcome {this.props.username}!</p>
      </div>
      <Link to= '/dashboard'>
      <button>Back to dashboard</button>
      </Link>
  </div>
    );
  }
}

const mapStateToProps = state => {
  const {currentUser } = state.auth;
  return {
    main: state.main,
    username: state.auth.currentUser.username,
  };
};

export default connect(mapStateToProps)(ScorePage);