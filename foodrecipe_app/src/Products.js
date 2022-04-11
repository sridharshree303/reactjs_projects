import React from 'react'

const Products = ({items}) => {
  return (
    <div className= 'row'>
      {items.map((data,index) =>
        <div className='col-md-4'>
            <div className='card' key={index} style={{"width":"18rem"}}>
            <img className='card-img-top' src={data.recipe.image} alt="Card image cap"/>
            <div className='card-body'>
                <center>
                    <h5 className='card-title'>{data.recipe.label}</h5>
                    <p className='card-text'>Total Amount Of Calories : {Math.round(data.recipe.calories)}</p>
                    <a hreaf="#" className='btn btn-primary'>Buy</a>
                </center>
            </div>
            </div>
        </div>
      )}
    </div>
  )
}

export default Products
