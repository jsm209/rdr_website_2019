import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: './images/rdr-banner.png',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: './images/rdr-banner.png',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: './images/rdr-banner.png',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const Banner = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  let ImageStyle = {
    width: "80%",
    margin: "auto"
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        style={{width: "100%"}}
      >
        <img src={item.src} alt={item.altText} style={ImageStyle}/>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  let CarouselStyle = {
      width: "80%",
      height: "20%",
      margin: "auto"
  }

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      style={CarouselStyle}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Banner;