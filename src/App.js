import React, {Component} from 'react';
import './App.css';
import ShowsToSee from './Components/ShowsToSee';
import ShowsSeen from './Components/ShowsSeen';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()

    this.state = {
      showTitle: '',
      shows: [],
      showGoals:[]
    }
  }


  componentDidMount = () => {
    axios.get('/api/goals').then(res =>
        this.setState({
            showGoals: res.data
        })
        
    );
    axios.get('/api/shows').then(res => {
      this.setState({
          shows: res.data
      })
  })
  };

  addShow = (showTitle) => {
    console.log(showTitle)
    axios.post('/api/shows', {showTitle}).then(res => {
        this.setState({
            showGoals: res.data,
            showTitle: ''
        })
    })
  }

  handleDelete = index => {
    axios.delete(`/api/shows/${index}`).then(res => 
        this.setState({
            showGoals: res.data
        })
    )
  }

  handleDeleteTwo = index => {
    axios.delete(`api/shows/${index}`).then(res => 
      this.setState({
        shows: res.data
      })
    )
  }

  handleInput = e => {
    const {name, value} = e.target;
    this.setState({
        [name]: value
    })
  }

  moveShow = movedShow => {
    axios.put('/api/shows', {movedShow}).then(res => {
      this.setState({
        showGoals: res.data.showGoals, 
        shows: res.data.shows
      })
      
    })
        
      
  }

  deleteAShow = (index) => {
    axios.delete(`/api/edit/${index}`).then (res => {
        this.setState({
            shows: res.data
        })
    })
}
  
  render() {
    return (
      <div className="showGoals">
        <div className='title'>TV Bucket List!!!!!!
          <img className='netflix' src='https://media.gettyimages.com/photos/the-netflix-logo-on-a-mobile-phone-netflix-streams-media-to-over-50-picture-id541789888?s=2048x2048'/>
          <img className='tv' src='https://i.ebayimg.com/thumbs/images/g/XFgAAOSwhlZYvAxJ/s-l225.webp' />
        </div>
        <div className='showsToSee'>Shows To Watch</div>
         <ShowsToSee
          showGoals={this.state.showGoals} 
          deleteShow={this.handleDelete} 
          moveShow={this.moveShow}
        />
       <input onChange={e => this.handleInput(e)} placeholder='Add a Show' name='showTitle' value={this.state.showTitle}/>
       <button onClick={() => this.addShow(this.state.showTitle)}>Add Show</button>
       <div className='showsSeen'>Shows I Have Seen
       
       </div>
       <ShowsSeen shows={this.state.shows} deleteAShow={this.deleteAShow}/>
       <div className='footer'>
       <img className='hbo' src ='https://image.shutterstock.com/image-photo/madrid-spain-august-13-2018-600w-1154935312.jpg'/>
      <img className='popcorn' src='https://media.istockphoto.com/photos/popcorn-in-bucket-picture-id497857462' />
      
       </div>
      </div>
    );
  }
  
}

export default App;
