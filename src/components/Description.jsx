import React from 'react'
import {motion} from 'framer-motion';

const Description = () => {
  return (
    <div>

    <div>Description</div>
      <motion.img
      width={'15%'}
      src='/img/a1.jpg'
      alt=''
      animate={{rotate:360}}
      transition={{
        delay:0.5,
        duration: 3,
        repeat: Infinity,
        repeatDelay: 0.5
      }}
        />

        <motion.p
        initial={{
          x:-1000,
          opacity: 0

        }}

        animate={{
          x:500,
          opacity: 1
          
        }}
        transition={{
          delay:1,
          duration: 2,
          type:'tween'}}
        
        > Текст для анимации</motion.p>

        <motion.div id='div1'
        initial={{
          x:-1000,
          opacity:0

        }}
        animate={{
          x:0,
          opacity: 1
          
        }}
        transition ={{
          delay:1,
          duration: 2,


        }}
        


        
        >Текст расположенный в motion.div
          </motion.div>










    </div>
  )
}

export default Description