import React from 'react'
import Item from '../Item/Item'

const ItemList = ({data}) => {
    // console.log(data.map(product => console.log(product.name)))
  return (
    <div>
        {
         data.map((product) => (
            <div key={product.id}>
                {/* <Item product = {product}/> */}
                <Item {...product}/>
            </div>
         ))
        }
    </div>
  )
}

export default ItemList