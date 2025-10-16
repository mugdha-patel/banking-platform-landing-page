import React from 'react'
import RightCard from '../section2/RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full w-2/3 p-6 flex flex-nowrap overflow-x-auto gap-10 rounded-4xl'>
        {props.users.map(function(e, idx){
            return  <RightCard  key={idx} id={idx} img={e.img} tag={e.tag}/>
        })}
    </div>
  )
}

export default RightContent