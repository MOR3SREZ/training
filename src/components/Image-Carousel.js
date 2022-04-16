import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import './Image-Carousel.css';

import apple from '../assets/img/bottle_apple_002.png';
import grapes from '../assets/img/bottle_grapes_001.png';
import strawberry from '../assets/img/bottle_strawberry_003.png';

const slides = [apple, grapes, strawberry, apple, grapes, strawberry];

// const variant = {
//   initial: {},
//   animate: {},
//   exit: {},
// };

const ImageCarousel = () => {
  const [current, setCurrent] = useState({
    index: 0,
    dir: 1,
  });
  const [next, setNext] = useState({
    index: '',
    dir: '',
  });
  const [prev, setPrev] = useState({
    index: '',
    dir: '',
  });

  const [isAnimate, setIsAnimate] = useState(false);

  //Variable
  const slidesLength = slides.length;
  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  //Functions
  const goNextAnime = (index, dir) => {
    setNext({ index: index, dir: dir });
  };
  // const goPrevAnime = (index, dir) => {
  //   setPrev({ index: index, dir: dir });
  // };

  //main function for rotate
  const goTo = (index, dir) => {
    goNextAnime(index, dir);
    console.log(current.index, index);
    setCurrent({ index: index, dir: dir });
  };

  const goStep = (dir) => {
    let index = current.index + dir;
    let len = slidesLength;
    let currentIndex = (index + len) % len;
    goTo(currentIndex, dir);
  };

  //Click events prev & next
  const goNext = () => {
    if (isAnimate) return;
    goStep(1);
  };
  const goPrev = () => {
    if (isAnimate) return;
    goStep(-1);
  };

  //Auto play slider
  function auto() {
    slideInterval = setInterval(goNext, intervalTime);
  }

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [autoScroll, current.index, slideInterval]);

  return (
    <div className='slider'>
      <ul className='slider-list'>
        <AnimatePresence>
          {slides.map(
            (item, i) =>
              current.index === i && (
                <motion.li
                  className='slider-item'
                  key={i}
                  onAnimationStart={() => setIsAnimate(true)}
                  onAnimationComplete={() => setIsAnimate(false)}
                  initial={{ rotate: `${current.dir * 180}deg` }}
                  animate={{ rotate: 0 }}
                  exit={{
                    rotate: `${
                      next.dir ? next.dir * -180 : current.dir * -180
                    }deg`,
                  }}
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
