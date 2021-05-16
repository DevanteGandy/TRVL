class Login extends React.Component {





  render = () =>{
    return <div id='login'>
    <form onSubmit={this.props.logIn}>
    <label>User Name</label>
    <br />
    <input type="text" id="username" name="username" onChange={this.props.handleChange} />
    <br />
    <label>Password</label>
    <br />
    <input type="password" id="password" name="password" onChange={this.props.handleChange} />
    <br />
    <input type="submit" value="Sign In"  />
    </form>
    </div>
  }
}
