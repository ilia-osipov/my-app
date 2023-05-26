import React from 'react'
import Item from './Item'

export const Carditem = (props) => {
  return (
    <div>
    {
        props.Item.map(obj=>
            {return(
                <Item
                key={0}
                id={obj.id}
                myId={obj.myID}
                title={obj.title}
                description={obj.description}
                price={obj.price}
                img={obj.img}
                />
                )
            })
    }
   </div>
  )
}
export default Carditem