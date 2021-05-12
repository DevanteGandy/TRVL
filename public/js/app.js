class Trvls extends React.Component {



  render = () =>{
    return <div>
    <h2>Create New Travel Log</h2>
    <form>
    <label htmlFor="entryTitle">Entry Title</label>
          <input type="text" id="entryTitle" />
          <br />
          <label htmlFor="date">Date</label>
          <input type="text" id="date" />
          <br />
          <label htmlFor="image">Image</label>
          <input type="text" id="image" />
          <br />
          <label htmlFor="rating">Rating</label>
          <input type="text" id="rating" />
          <br />
          <label htmlFor="comments">Comment</label>
          <input type="text" id="comments" />
          <br />
          <input type="submit" value="New Post" />
    </form>
    </div>
  }
}

ReactDOM.render(
  <Trvls></Trvls>,
  document.querySelector('main')
)
