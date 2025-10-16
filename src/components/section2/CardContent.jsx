import React from 'react'

const CardContent = (props) => {
    return (
        <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between '>
            <h2 className='bg-white rounded-full h-12 w-12 flex justify-center items-center text-xl font-semibold '>{props.id+1}</h2>
            <div>
                <p className='text-lg leading-normal text-white mb-14'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam dolor hic cumque, vel omnis accusantium?</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-600 text-white font-medium py-2 px-8 rounded-full'>{props.tag}</button>
                    <button className='bg-blue-600 text-white font-semibold py-2 px-4 rounded-full '><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>

        </div>
    )
}

export default CardContent