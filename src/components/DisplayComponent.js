import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselCaption, CarouselIndicators, CarouselControl } from 'reactstrap';
import { IMAGES } from '../shared/CarouselImages';



export default class DisplayComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            images: IMAGES,
            activeIndex: 0
        }
        this.next= this.next.bind(this);
        this.previous= this.previous.bind(this);
        this.goToIndex= this.goToIndex.bind(this);
        this.onExiting= this.onExiting.bind(this);
        this.onExited= this.onExited.bind(this);
    }

    onExiting() {
         this.state.animating = true;
    }

    onExited() {
        this.state.animating = false;  
    }   


    next() {
    if (this.state.animating) return;
    const nextIndex = this.state.activeIndex === this.state.images.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({
            activeIndex: nextIndex    
        })
  }

    previous() {
    if (this.state.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.state.images.length - 1
        : this.state.activeIndex - 1;
        this.setState({
            activeIndex: nextIndex    
        })
  }

    goToIndex (newIndex) {
    if (this.state.animating) {
      this.setState({
        activeIndex: newIndex
      });
    }
  }

    render() {
        const slides = this.state.images.map(image => {
            return (
                <CarouselItem 
                onExiting={this.onExiting}
                onExited={this.onExited}  
                key={image.id}>
                    <img  className="d-block w-100 img-fluid" src={image.src} alt={image.altText} />
                    <CarouselCaption captionText={image.caption} captionHeader={image.captionHead} />
                </CarouselItem>
            );
        });

          return (
        <Carousel 
        activeIndex={this.state.activeIndex}
        next={this.next}
        previous={this.previous}>
        <CarouselIndicators items={this.state.images} activeIndex={this.state.activeIndex}
        onClickHandler={this.goToIndex} />
            {slides}
            <CarouselControl direction='prev' directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction='next' directionText="Next" onClickHandler={this.next} />
        </Carousel>
    )
    }
}
