import React from 'react';
import {Swtich, Route, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import {Switch} from 'react-router-dom';
import {authUser} from '../store/actions/auth';
import {removeError} from '../store/actions/errors';
import withAuth from "../hocs/withAuth";
import MessageForm from "../containers/MessageForm";

const Main = props => {
  const {authUser, errors, removeError, currentUser} = props;
  return(
    <div className='container'>
      <Switch>
        <Route exact path="/" render={props => <Homepage currentUser={currentUser} {...props} />} />
        <Route exact path="/signin" render={props => (
          <AuthForm onAuth={authUser} buttonText="Log In" heading="Wecome Back" errors={errors} removeError={removeError} {...props} />
        )} />
        <Route exact path="/signup" render={props => (
          <AuthForm signUp onAuth={authUser} buttonText="Sign Up" heading="Join Warbler Today" errors={errors} removeError={removeError} {...props} />
        )} />
        <Route path="/users/:id/messages/new" component={withAuth(MessageForm)} />
      </Switch>
    </div>
  )
};

function mapStateToProps(state){
  return {
    currentUser: state.currentUser,
    errors: state.errors
  };
}

export default withRouter(connect(mapStateToProps, {authUser, removeError})(Main));