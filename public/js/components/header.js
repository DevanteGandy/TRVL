const scroll = () => {
  const section = document.querySelector( '#signup' );
  section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
};
class Header extends React.Component {
  listener = null;
  state = {
    nav:false,
    logout:"http://trvls-project.herokuapp.com/"
  }


  componentDidMount() {
     window.addEventListener("scroll", this.handleScroll);
   }


   componentWillUnmount() {
      window.removeEventListener('scroll');
    }

   handleScroll= () => {
     if (window.pageYOffset > 140) {
         if(!this.state.nav){
           this.setState({ nav: true });
         }
     }else{
         if(this.state.nav){
           this.setState({ nav: false });
         }
     }

   }


  render = () => {
    return <div>
    <div className={`Nav ${this.state.nav && 'NavBlack'}`}>
      <ul id="nav-ul">
        <li id="nav-li"><a className='active' href='/'>TRVL</a></li>
        <li id="nav-li"><a  href='#about'>About Us</a></li>
        <li id='nav-li1'>{this.props.currentUser}
        </li>
        <li id="nav-li" style={{float: "right"}}>
          <details>
          <br />
            <summary>Sign Up</summary>
            <Signup></Signup>
          </details>
        </li>
        <li id="nav-li" style={{float: "right"}}>
          <details>
          <br />
            <summary>Login</summary>
            <Login
            logIn={this.props.logIn}
            handleChange={this.props.handleChange}
            ></Login>
          </details>
        </li>
      </ul>
    </div>
    </div>
  }
}
