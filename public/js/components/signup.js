class Signup extends React.Component {







render = () =>{
    return <div>
    <form action="/users" method="POST">
    <label>User Name</label>
    <br />
    <input type="text" name="username"/>
    <br />
    <label>Password</label>
    <br />
    <input type="password" name="password" />
    <br />
 <input type="submit" value="Sign Up" />
    </form>
    </div>
  }
}
