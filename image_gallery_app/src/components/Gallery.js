import React from 'react'

const Gallery = ({data}) => {
  return (
    <div>
      <div className='row '>
      {data.map((img)=>
        <div key={img.id} className='col-md-3 '>
          <img src={`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}_m.jpg`}
                     height='260' width='300'/>
        </div>
      )}
      </div>
    </div>
  )
}

export default Gallery
