import React, { useEffect, useRef, useState } from 'react'

import {motion} from 'framer-motion'


import Card from './Card'
import './Slider.css'


const Slider = () => {
  const [width, setWidth] = useState(0);
  // const [goRight, setGoRight]=useState(false)
  // const [goLeft, setGoLeft]=useState(false)

  let distance = 300;

  const goStep = (dir)=>{
    if(0<=distance&& distance <= width){
      distance  += dir*distance
    }else{
      console.log(distance)

    }
  }

  const goLeft = ()=>{
    goStep(-1)
    console.log('Click left')
  }
  const goRight = ()=>{
    goStep(1)
    console.log('Click right')

  }


  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  
  }, [width])

  return (
    <motion.div className='carousel' ref={carousel}>
      <motion.div className="inner-carousel"  initial={{x:0}} animate={{}} drag='x' dragConstraints={{right:0, left:-width}} whileTap={{cursor:'grabbing'}}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </motion.div>
      
        <motion.div className="left-arrow" onClick={goLeft}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>
        </motion.div>
        <motion.div className="right-arrow" onClick={goRight}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>
        </motion.div>
      
    </motion.div>
  )
}

export default Slider