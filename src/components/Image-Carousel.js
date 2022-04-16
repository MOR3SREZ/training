import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import './Image-Carousel.css';

import apple from '../assets/img/bottle_apple_002.png';
import grapes from '../assets/img/bottle_grapes_001.png';
import strawberry from '../assets/img/bottle_strawberry_003.png';

const slides = [apple, grapes, strawberry];

const ImageCarousel = () => {
  const [current, setCurrent] = useState({
    index: 0,
    dir: 1,
  });
  // const [next, setNext] = useState({
  //   index: '',
  //   dir: '',
  // });
  // const [prev, setPrev] = useState({
  //   index: '',
  //   dir: '',
  // });

  //Variabels
  const slidesLength = slides.length;
  const autoScroll = true;
  let slideInterval;
  let intervalTime = 3000;

  //Functions
  // const goNextAnime = (index, dir) => {
  //   setNext({ index: index, dir: dir });
  // };
  // const goPrevAnime = (index, dir) => {
  //   setPrev({ index: index, dir: dir });
  // };
  //main funcyion for rotate
  const goTo = (index, dir) => {
    // goPrevAnime(current, dir);
    // goNextAnime(index, dir);
    setCurrent({ index: index, dir: dir });
  };
  console.log(current);

  const goStep = (dir) => {
    let index = current.index + dir;
    let len = slidesLength;
    let currentIndex = (index + len) % len;
    goTo(currentIndex, dir);
  };

  //Click events prev & next
  const goNext = () => {
    goStep(1);
  };
  const goPrev = () => {
    goStep(-1);
  };

  function auto() {
    slideInterval = setInterval(goNext, intervalTime);
  }

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [current.index]);
  return (
    <div className='slider'>
      <ul className='slider-list'>
        <AnimatePresence initial={false}>
          {slides.map(
            (item, i) =>
              current.index === i && (
                <motion.li
                  className='slider-item'
                  key={item}
                  initial={{ rotate: '180deg' }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: '-180deg' }}
                  transition={{ duration: 1.5, type: 'spring' }}
                >
                  <div className='image-container'>
                    <img src={item} alt='' />
                  </div>
                </motion.li>
              )
          )}
        </AnimatePresence>
      </ul>
      <div className='slider__arrow'>
        <div className='slider__arrow_next' onClick={goNext}>
          ▶
        </div>
        <div className='slider__arrow_prev' onClick={goPrev}>
          ◀
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
