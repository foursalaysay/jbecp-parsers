import React from 'react'
import Image from 'next/image'


const Invitation = () => {
  return (
    <>
    <div className='w-full h-auto flex flex-col items-center justify-center gap-5'
    style={{
      background: "black",
      backgroundImage: `
        radial-gradient(circle at top right, rgba(255, 0, 0, 0.5), transparent 45%)
      `,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
    >
    <div className='flex flex-col gap-10 items-center justify-start'>
        <h1 className='text-white text-6xl font-bold'>JBECP - Parsers Onboarding</h1>
        <Image
        src='/onboarding.png'
        height={500}
        width={500}
        alt='onboarding'
        />

    </div>
    <div className='flex flex-col gap-10 items-center justify-start'>
        <h1 className='text-white text-6xl font-bold'>JBECP - Parsers Onboarding</h1>
        <Image
        src='/onboarding.png'
        height={500}
        width={500}
        alt='onboarding'
        />

    </div>
  
    </div>
    </>
   
  )
}

export default Invitation