class Login extends React.Component {





  render = () =>{
    return <div id='login'>
    <form action="/sessions" method="POST">
    <label>User Name</label>
    <br />
    <input type="text" name="username"/>
    <br />
    <label>Password</label>
    <br />
    <input type="password" name="password" />
    <br />
    <input type="submit" value="Sign In" />
    </form>
    </div>
  }
}
