

class Trvls extends React.Component {
state = {
  entryTitle: '',
  date: '',
  image: '',
  rating:'',
  comments: '',
  trvl: []
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
    <h2>Create New Travel Log</h2>
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

    <h2> Travel Entries </h2>
    <ul id='entry-ul'>

    {this.state.trvl.map((trvl) => {
      return (
        <div className="entry-container">
        <li id='entry-logs'>

        <h3> {trvl.entryTitle} </h3>
        <p> {trvl.date} </p>
        <br />
        <figure>
        <img src={trvl.image} />
        <div className ='stars' data-rating='3'>
          <span className='star'>&nbsp;</span>
          <span className='star'>&nbsp;</span>
          <span className='star'>&nbsp;</span>
          <span className='star'>&nbsp;</span>
          <span className='star'>&nbsp;</span>
        </div>
        <br />
        <figcaption>{trvl.comments} </figcaption>
        <br />
        <button value={trvl._id} onClick={this.deleteTrvl}> Delete Log </button>
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
        </form>
        </details>
            </li>
            </div>

      )
    })}
    </ul>
    </div>
  }
}
ReactDOM.render(
  <Trvls></Trvls>,
  document.querySelector('main')
)
