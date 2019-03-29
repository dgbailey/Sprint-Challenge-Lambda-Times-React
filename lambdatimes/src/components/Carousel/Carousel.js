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
    console.log(carouselData);
    
  }

  leftClick = () => {
  
    this.setState({currentIndex:this.state.currentIndex -1})
  }

  rightClick = () => {
  
    
    this.setState({currentIndex:this.state.currentIndex +1})
  }

  selectedImage = () => {
    if(this.state.currentIndex > this.state.images.length -1){
      this.setState({currentIndex:0})
      return <img src={this.state.images[this.state.currentIndex]} style={{display: 'block'}} />
    }
    else if(this.state.currentIndex < 0){
      this.setState({currentIndex:this.state.images.length -1})
      return <img src={this.state.images[this.state.currentIndex]} style={{display: 'block'}} />
    }

    return <img src={this.state.images[this.state.currentIndex]} style={{display: 'block'}} />
    
  }
  
  render(){
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