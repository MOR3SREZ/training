import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import './Image-Carousel.css';

import apple from '../assets/hero-pictures/54.png';
import grapes from '../assets/hero-pictures/55.png';
import strawberry from '../assets/hero-pictures/52 (2).png';

const slides = [apple, grapes, strawberry, apple, grapes, strawberry];
const slidesName = [
  'apple',
  'grapes',
  'strawberry',
  'apple',
  'grapes',
  'strawberry',
];

// const variant = {
//   initial: {},
//   animate: {},
//   exit: {},
// };

/*** Component main */
const ImageCarousel = () => {
  //Variable
  const slidesLength = slides.length;
  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  //states
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState({ index: '', dir: '' });
  const [prev, setPrev] = useState({ index: '', dir: '' });

  const [isAnimate, setIsAnimate] = useState(false);

  //Functions
  //main function for rotate
  const goTo = (index, dir) => {
    if (isAnimate) return;
    setPrev({ index: current, dir: dir });
    setNext({ index: index, dir: dir });
    setCurrent(index);
    console.log(index, dir);
  };

  const goStep = (dir) => {
    let index = current + dir;
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

  //Auto play slider
  function auto() {
    slideInterval = setInterval(goNext, intervalTime);
  }

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [current]);

  return (
    <div className='slider'>
      <ul className='slider-list'>
        <AnimatePresence>
          {slides.map((item, i) => {
            if (next.index === i) {
              return (
                <motion.li
                  className='slider-item'
                  key={i}
                  onAnimationStart={() => setIsAnimate(true)}
                  onAnimationComplete={() => setIsAnimate(false)}
                  initial={{ rotate: `${next.dir * +180}deg` }}
                  animate={{
                    rotate: 0,
                    backgroundColor: `var(--${slidesName[i]})`,
                  }}
                  transition={{ duration: 1.5, type: 'spring' }}
                >
                  <div className='image-container'>
                    <img src={item} alt='' />
                  </div>
                </motion.li>
              );
            } else if (prev.index === i) {
              return (
                <motion.li
                  className='slider-item'
                  key={i}
                  onAnimationStart={() => setIsAnimate(true)}
                  onAnimationComplete={() => setIsAnimate(false)}
                  initial={{
                    rotate: 0,
                    backgroundColor: `var(--${slidesName[i]})`,
                  }}
                  animate={{ rotate: `${prev.dir * -180}deg` }}
                  transition={{ duration: 1.5, type: 'spring' }}
                >
                  <div className='image-container'>
                    <img src={item} alt='' />
                  </div>
                </motion.li>
              );
            } else if (current === i) {
              return (
                <motion.li
                  className='slider-item'
                  key={i}
                  onAnimationStart={() => setIsAnimate(true)}
                  onAnimationComplete={() => setIsAnimate(false)}
                  initial={{ rotate: `${prev.dir * -180}deg` }}
                  animate={{
                    rotate: 0,
                    backgroundColor: `var(--${slidesName[i]})`,
                  }}
                  transition={{ duration: 1.5, type: 'spring' }}
                >
                  <div className='image-container'>
                    <img src={item} alt='' />
                  </div>
                </motion.li>
              );
            }
          })}
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
