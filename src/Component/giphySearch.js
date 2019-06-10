import React, {Component} from "react"
import GiphySearch from './components/giphySearch.js'

class Results extends Component{
  state = {
    images:[],
    
  }

  
  
  render(){
    const imageCards = this.state.images.map(im => <CityCard
      im={im}/>)
      return(
        <div>
        <giphyForm handleChange={this.handleChange}/>
        {cityCards}

        </div>
      )
    }
  }
  export default Results
