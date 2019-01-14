import React, {Component} from 'react';

class AuthForm extends Component  {
  constructor(props){
    super(props);
    this.state={
      email: '',
      username: '',
      password: '',
      profileImageUrl: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const authType = this.props.signUp ? "signup" : "signin";
    this.props.onAuth(authType, this.state).then(() => {
      console.log("Logged In");
    })
  }

  render(){
    const {email, username, password, profileImageUrl} = this.state;
    const {heading, buttonText, signUp} = this.props;
    return (
      <div>
        <div className="row justify-content-md-center text-center">
          <div className="col-md-6">
            <form onSubmit={this.handleSubmit}>
              <h2>{heading}</h2>
              <label htmlFor="email">Email:</label>
              <input className="form-control" id="email" name="email" onChange={this.handleChange} value={email} type="text"/>
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" name="password" onChange={this.handleChange}/>
              {signUp && (
                <div>
                  <label htmlFor="username">Username</label>
                  <input type="text" className="form-control" id="username" name="username" onChange={this.handleChange} value={username} />
                  <label htmlFor="image-url">Profile Image Url</label>
                  <input type="text" className="form-control" id="image-url" name="profileImageUrl" onChange={this.handleChange} value={profileImageUrl}/>
                </div>
              )}
              <button className="btn btn-primary btn-block btn-large" type="submit">{buttonText}</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default AuthForm