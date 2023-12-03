import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

// muestra el resumen del producto
const Item = ({name, img, price}) => {
  return (
    <div style={{border: '2px', borderStyle:'solid', marginBottom: '5px'}}>
        <p>{name}</p>
        <img src={img} />
        <ItemCount initial={0} stock={2}/>
    </div>
  )
}

export default Item