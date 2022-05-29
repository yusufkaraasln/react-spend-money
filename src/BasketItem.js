import React from 'react'

function BasketItem({item,product}) {
  return (
    <div className='basket-item__child'>{product.title} x {item.amount}</div>
  )
}

export default BasketItem