class About extends React.Component {





  render = () =>{
    return <div>
    <div id='about'>
      <h1> About Us </h1>
       <p>
       Arboleda & Gandy joined hands in 2021 and founded Trvl. Trvl specializes in blog posts and travel exploration.
      </p>
      <p> The activity of Trvl extends to cover the entire city of New York and all the major cities in America, through a wide network of strong ties with economic figures and companies inside and outside of America.</p>
    </div>
      <div className='row'>
        <div className='column'>
          <div className='card'>
            <img src='devante.jpg' alt='' style={{width: "100%"}}/>
              <div className='about-container'>
              <h3> Devante Gandy </h3>
              <p className='pTitle'>Software Engineer</p>
              <p>devantegandyio@gmail.com</p>
              <p>
              <button className='pButton'>
              Connect
              </button>
              </p>
              </div>
          </div>
          </div>

          <div className='column2'>
            <div className='card'>
              <img src='charlie.jpg' alt='' style={{width: "100%"}}/>
                <div className='about-container'>
                <h3> Charlie Arboleda </h3>
                <p className='pTitle'>Software Engineer</p>
                <p>llzsultanzll@gmail.com</p>
                <p>
                <button className='pButton'>
                Connect
                </button>
                </p>
                </div>
            </div>
            </div>


      </div>


  </div>
  }
}
