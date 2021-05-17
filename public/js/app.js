class Trvls extends React.Component {
state = {
  entryTitle: '',
  date: '',
  image: '',
  rating:'',
  comments: '',
  trvl: [],
  currentUser: {},
}


handleSubmit = event => {
  event.preventDefault()
  axios
  .post('/trvl',this.state)
  .then(response =>
    this.setState({trvl: response.data, entryTitle: '',date: '',image: '',rating: '',comments: '',})
  )
}


handleChange = event => {
  this.setState({ [event.target.id]: event.target.value })
}


componentDidMount = (event) => {
  axios.get('/trvl').then(response => {
    this.setState({
      trvl: response.data,
      currentUser:{},
    })
  })
}

logIn = (event) =>{
  event.preventDefault()
  axios.post('/sessions', this.state).then(response =>{
    this.setState({
      currentUser: response.data,

    })
  })
}

signUp = (event) =>{
  event.preventDefault()
  axios.post('/users', this.state).then(response =>{
    this.setState({
      currentUser: response.data,

    })
  })
}

deleteTrvl = event => {
  axios.delete('/trvl/' + event.target.value).then(response => {
    this.setState({trvl:response.data})
  })
}

updateTrvl = event => {
  event.preventDefault()
  const id = event.target.id
  axios.put('/trvl/' + id, this.state).then(response => {
    this.setState({trvl: response.data, entryTitle: '',date: '',image: '',rating: '',comments: '',})
  })
}
  render = () =>{
    return <div className ='trvl-log'>
    <Header
      logIn={this.logIn}
      signUp={this.signUp}
      handleChange={this.handleChange}
      currentUser={this.state.currentUser.username}
    ></Header>
    <h3 id='title'>{this.state.currentUser.username}</h3>
    <Logo></Logo>
    <div id='travelLog'>
    <h3>Create New Travel Log</h3>

    <form onSubmit={this.handleSubmit}>
    <div className='row'>
      <div className='col-25'>
        <label id='new-logs' htmlFor="entryTitle">Entry Title</label>
      </div>
      <div className='col-75'>
        <input type="text" id="entryTitle" onChange={this.handleChange} />
      </div>
    </div>
    <div className='row'>
      <div className='col-25'>
        <label id='new-logs' htmlFor="date">Date</label>
      </div>
      <div className='col-75'>
        <input type="date" id="date" onChange={this.handleChange} />
      </div>
    </div>
    <div className='row'>
      <div className='col-25'>
        <label id='new-logs' htmlFor="image">Image</label>
      </div>
      <div className='col-75'>
        <input type="text" id="image" onChange={this.handleChange} />
      </div>
    </div>
    <div className='row'>
      <div className='col-25'>
        <label id='new-logs' htmlFor="comments">Comment</label>
      </div>
      <div className='col-75'>
        <textarea id="comments" onChange={this.handleChange} />
      </div>
    </div>
    <div className="row">
        <input type="submit" value="New Post" />
      </div>
    </form>
    </div>
        <h2> Entries </h2>
    <ul id='entry-ul'>
    {this.state.trvl.map((trvl) => {
      return (
        <div className="entry-container">
          <li id='entry-logs'>
            <div id='blog-post'>
              <div className='blog-post-img'>
                <img src={trvl.image} id='trvlImg'/>
              </div>
                <div className='blog-post-info'>
                  <div className='blog-post-date'>
                    <span>{trvl.date}</span>
                  </div>
                  <h3 id='title'> {trvl.entryTitle} </h3>
                  <p>{trvl.comments} </p>
                  <div>
                  <details>
                  <summary> Edit {trvl.entryTitle} </summary>
                  <form id={trvl._id} onSubmit={this.updateTrvl}>
                  <label  htmlFor="entryTitle">Entry Title</label>
                  <br />
                  <input type="text" id="entryTitle" onChange={this.handleChange} />
                  <br />
                  <label htmlFor="date">Date</label>
                  <br />
                  <input type="date" id="date" onChange={this.handleChange} />
                  <br />
                  <label htmlFor="image">Image</label>
                  <br />
                  <input type="text" id="image" onChange={this.handleChange} />
                  <br />
                  <label htmlFor="comments">Comment</label>
                  <br />
                  <input type="text" id="comments" onChange={this.handleChange} />
                  <br />
                  <input type="submit" value="Update Entry" />
                  <button value={trvl._id} onClick={this.deleteTrvl}> Delete Log </button>
                  </form>
                  </details>
                  </div>
        </div>
        </div>
            </li>
            </div>

      )
    })}
    </ul>
    <About></About>

    </div>
  }
}

ReactDOM.render(
  <Trvls></Trvls>,
  document.querySelector('main')
)
