import React from "react"

class GiphyForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: undefined
    }
  }

  handleChange = () => {
    // console.log('hhhhhh');
    fetch("http://api.giphy.com/v1/gifs/random?api_key=mTTYIeubA1qfiUYTm0xVePYgGUI94pAH")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({images: data})
      })
      .catch(err => console.log(err));
    
  
    }

    render() {
      console.log(this.state.images);

      return (
            <div>
              <form >
              <label>Image search:</label>
                <input
                    id="giphy"
                    type="img"
                    placeholder="rendom search"
                    onChange={this.handleChange}
                      />
              </form>


              {this.state.images ? <img src={this.state.images.data.fixed_height_downsampled_url}/> : <h1>not found</h1>}
            </div>
        )
    }
}

export default GiphyForm