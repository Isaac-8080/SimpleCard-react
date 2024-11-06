import React from 'react'
import Image from './Image'
import Title from './Title'
import Description from './Description'

const SimpleCard = () => {
  return (
    <>
      <div className='simpleCard__wrapper'>
        <Image />
        <div className='titleDescription__wrapper'>
          <Title />
          <Description />
        </div>
      </div>
    </>
  )
}

export default SimpleCard