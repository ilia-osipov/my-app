import Slider from './Slider';
import { Carditem } from './cart/Carditem';
import React from 'react'

const Home = (props) => {
  return (
    <div>
        <Slider></Slider>
        <Carditem Item={props.item}/>
    
    </div>
  )
}

export default Home