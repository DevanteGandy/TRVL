class Logs extends React.Component {
  render = () =>{
    return (
      <div>
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
    )
  }
}
ReactDOM.render(
  <Logs></Logs>,
  document.querySelector('main')
)
