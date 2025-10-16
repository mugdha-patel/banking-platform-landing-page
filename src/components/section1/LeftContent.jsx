import React from 'react'
import HeroText from './HeroText'
import ArrowIcon from './ArrowIcon'

const LeftContent = () => {
    return (
        <div className='h-full flex flex-col justify-between w-1/3 '>
            <HeroText/>
            <ArrowIcon/>
        </div>
    )
}

export default LeftContent