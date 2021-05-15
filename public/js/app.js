
class Trvls extends React.Component {
state = {
  entryTitle: '',
  date: '',
  image: '',
  rating:'',
  comments: '',
  trvl: [],
  users: []
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
componentDidMount = () => {
  axios.get('/trvl').then(response => {
    this.setState({trvl: response.data})
  })
}

userComponent = () =>{
  axios.get('/users').then(response =>{
    this.setState({
      user: response.session.currentUser.username
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
    <Header></Header>
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
        <div id='titleDate'>
        <h3> {trvl.entryTitle} </h3>
        <p> {trvl.date} </p>
        </div>
        <br />
        <figure>
        <img src={trvl.image} id='trvlImg'/>
        <br />
        <figcaption>{trvl.comments} </figcaption>
        <br />
        </figure>
        <br />
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
