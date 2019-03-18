import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage'
import Card from './wordCard'


export class Dashboard extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
        
    }

    render() {
    
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()}>Log out</button>
            );
        }
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    <p>hi from dashboard {this.props.username}!</p>
                    <p>Name : {this.props.name}</p>
                </div>
                <Card title="German Word #" bgc='#fcd000' content='Prost!'/>
                {logOutButton}
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.fullname}`,
        protectedData: state.protectedData.data,
        loggedIn: state.auth.currentUser !== null
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
