import React, { useEffect, useRef, useState } from 'react'

import {motion,useAnimation} from 'framer-motion'


import Card from './Card'
import './Slider.css'


const Slider = () => {
  const [width, setWidth] = useState(0);

  const carousel = useRef();
  const slider = useRef()

  const controls = useAnimation();

  const distance = 300;
  let trigger = 0;

  // useEffect(() => {
  //   console.log('x',slider.current.scrollWidth)
  // })



  const goStep = (dir)=>{
    trigger = trigger+ (dir*distance);
    controls.start({x:trigger});
  }

  const goLeft = ()=>{
    if(Math.abs(trigger) >0){
      goStep(+1)
    }
  }

  const goRight = ()=>{
    if(Math.abs(trigger)+distance <=width){
      goStep(-1)
    }
  }

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  return (
    <motion.div className='carousel' ref={carousel}>
        
      <motion.div className="inner-carousel" ref={slider} drag='x' dragConstraints={{right:0, left:-width}} 
      whileTap={{cursor:'grabbing'}}
      animate={controls}
      transition={{ duration:0.5 , ease:'easeInOut'}}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </motion.div>
      
        <motion.div className="left-arrow" onClick={goLeft} whileTap={{scale:0.9}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>
        </motion.div>
        <motion.div className="right-arrow" onClick={goRight} whileTap={{scale:0.9}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>
        </motion.div>
      
    </motion.div>
  )
}

export default Slider