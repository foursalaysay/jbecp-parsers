import React from 'react'

export default function AboutPage() {
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
       <div className='w-5/6 lg:w-11/12 h-96 bg-white p-5 flex flex-col gap-3 rounded-md'>
          <h2 className='text-6xl font-bugaki text-left'>About <span className='text-red-500'>Us</span></h2>
          <h4 className='text-xl font-bold'>Junior Blockchain Education Consortium of the Philippines - Parsers.</h4>
          <p className='text-sm bg-gray-200 p-2 rounded'>We educate and empower individuals in Web3 and blockchain,
          creating a supportive community for skills and knowledge 
          to confidently navigate the evolving blockchain technology.</p>
        </div>
        <div className='w-5/6 lg:w-11/12 h-96 bg-white p-5 flex flex-col gap-3 rounded-md'>
          <h2 className='text-6xl font-bugaki text-left'>About <span className='text-red-500'>Us</span></h2>
          <h4 className='text-xl font-bold'>Junior Blockchain Education Consortium of the Philippines - Parsers.</h4>
          <p className='text-sm bg-gray-200 p-2 rounded'>We educate and empower individuals in Web3 and blockchain,
          creating a supportive community for skills and knowledge 
          to confidently navigate the evolving blockchain technology.</p>
        </div>
        <p className="text-sm font-bold text-white text-center mb-5">All Rights Reserved. 2024</p>
    </div>
    
    </>
  )
}
