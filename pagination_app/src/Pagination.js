import React, { useState } from 'react'

const Pagination = ({data,pagehandler}) => {
    let pageNums = [];
    const [actpage,setActpage] = useState(0);

    for( let i = 1; i < Math.ceil(data.length/10)+1;i++){
        pageNums.push(i);
    }
  return (
    <div>
      <center>
        {pageNums.map(page => <span className='btn btn-white pagebutton m-1'
        onClick={()=> pagehandler(page)}>{page}</span>)}
      </center>
    </div>
  )
}

export default Pagination;
