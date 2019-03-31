import React, { Component } from 'react';
import { carouselData } from '../../data'

// Complete this Carousel 
class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images:[],
      currentIndex:0
    }
  }
  componentDidMount(){
   
    this.setState({images:carouselData})
    console.log('component did mount carousel fired');
    
  }

  leftClick = () => {
  
    this.setState({currentIndex:this.state.currentIndex -1})
    console.log('state set by left')
  }

  rightClick = () => {
  
    
    this.setState({currentIndex:this.state.currentIndex +1})
    console.log('state set by right')
  }

  selectedImage = () => {
    if(this.state.currentIndex > this.state.images.length -1){
      this.setState({currentIndex:0})
      console.log('state set by greater selectedimage')
      return <img src={this.state.images[this.state.currentIndex]} style={{display: 'block'}} />
      
    }
    else if(this.state.currentIndex < 0){
      this.setState({currentIndex:this.state.images.length -1})
      console.log('state set by less selectedimage')
      return <img src={this.state.images[this.state.currentIndex]} style={{display: 'block'}} />
    }
    console.log('state set by nonconditional selectedimage')
    return <img src={this.state.images[this.state.currentIndex]} style={{display: 'block'}} />
    
  }
  //interesting that this re-render on component did mount never seems to happen OR 
  //is batched with the rerender of COntent js on its component did mount.
  render(){
    console.log('render function carousel');
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
          
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
        {this.selectedImage()}
      </div>
    )
  }
}

export default Carousel;