import { motion } from 'framer-motion';
import { useState } from 'react';

import './Card.css';

import pasta from '../assets/Pasta Salad.jpg';

const variants = {
  start: {
    scale: 1,
  },
  end: {
    scale: 1.1,
    transition: {
      duration: 0.5,
    },
  },
};


const Card = () => {
  const [isHover, setHovered] = useState(false);
  const [imgIsHover, setImgHovered] = useState(false);

  return (
    
      <motion.div
        className='card'
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        <motion.div
          className='image-container'
          onHoverStart={() => setImgHovered(true)}
          onHoverEnd={() => setImgHovered(false)}
        >
          <motion.img
            alt='some shit'
            src={pasta}
            animate={isHover ? 'end' : ''}
            transition={{ ease: 'easeInOut' }}
            variants={variants}
          />
          <motion.div
            className='overlay'
          >
            <div className='icons'>
              <motion.div
                className='icon favorite'
                initial={{ x: 0, opacity: 0 }}
                animate={imgIsHover ? { x: '65px', opacity: 1 } : {}}
                transition={{ ease: 'easeInOut' }}
                whileTap={{ scale: 0.9 }}
                whileHover={{ backgroundColor: '#ffb81a' }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z' />
                </svg>
              </motion.div>
              <motion.div
                className='icon basket'
                initial={{ opacity: 0, x: 0 }}
                animate={imgIsHover ? { opacity: 1, x: 0 } : {}}
                transition={{ ease: 'easeInOut' }}
                whileTap={{ scale: 0.9 }}
                whileHover={{ backgroundColor: '#ffb81a' }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                >
                  <path d='M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z' />
                </svg>
              </motion.div>
              <motion.div
                className='icon watch'
                initial={{ x: 0, opacity: 0 }}
                animate={imgIsHover ? { x: '-65px', opacity: 1 } : {}}
                transition={{ ease: 'easeInOut' }}
                whileTap={{ scale: 0.9 }}
                whileHover={{ backgroundColor: '#ffb81a' }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                >
                  <path d='M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 3c-2.21 0-4 1.791-4 4s1.79 4 4 4c2.209 0 4-1.791 4-4s-1.791-4-4-4zm-.004 3.999c-.564.564-1.479.564-2.044 0s-.565-1.48 0-2.044c.564-.564 1.479-.564 2.044 0s.565 1.479 0 2.044z' />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        <div className='detail-container'>
          <p className='product-name'>Pasta Salad</p>
          <p className='product-price'>23.00 $</p>
        </div>
      </motion.div>
  );
}

export default Card