const scroll = () => {
  const section = document.querySelector( '#signup' );
  section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
};
class Header extends React.Component {



  render = () => {
    return <div className="top-nav">
    <nav>
      <ul id="nav-ul">
        <li id="nav-li"><a className='active' href='/'>TRVL</a></li>
        <li id="nav-li"><a  href='#about'>About Us</a></li>
        <li id="nav-li"><a  href='#contact'>Contact</a></li>
        <li id="nav-li" >
          <details>
          <br />
            <summary>Sign Up</summary>
            <Signup></Signup>
          </details>
        </li>
        <li id="nav-li">
          <details>
          <br />
            <summary>Login</summary>
            <Login></Login>
          </details>
        </li>
      </ul>
    </nav>
    </div>
  }
}
