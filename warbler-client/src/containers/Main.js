import React from 'react';
import {Swtich, Route, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import {Switch} from 'react-router-dom';
import {authUser} from '../store/actions/auth';

const Main = props => {
  const {authUser} = props;
  return(
    <div className='container'>
      <Switch>
        <Route exact path="/" render={props => <Homepage {...props} />} />
        <Route exact path="/signin" render={props => (
          <AuthForm onAuth={authUser} buttonText="Log In" heading="Wecome Back" {...props} />
        )} />
        <Route exact path="/signup" render={props => (
          <AuthForm signUp onAuth={authUser} buttonText="Sign Up" heading="Join Warbler Today" {...props} />
        )} />
      </Switch>
    </div>
  )
};

function mapStateToProps(state){
  return {
    currentUser: state.currentUser,
  };
}

export default withRouter(connect(mapStateToProps, {authUser})(Main));