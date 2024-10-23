import React from 'react'

export default function AboutPage() {
  return (
    <div className='flex flex-col gap-5'>
      <div className='w-5/6 h-96 bg-white mx-5 p-5 flex flex-col gap-3 rounded-md'>
        <h2 className='text-6xl font-bugaki text-left'>About <span className='text-red-500'>Us</span></h2>
        <h4 className='text-xl font-bold'>Junior Blockchain Education Consortium of the Philippines - Parsers.</h4>
        <p className='text-sm bg-gray-200 p-2 rounded'>We educate and empower individuals in Web3 and blockchain,
        creating a supportive community for skills and knowledge 
        to confidently navigate the evolving blockchain technology.</p>
      </div>
      <div className='w-5/6 h-96 bg-white mx-5 p-5 flex flex-col gap-3 rounded-md'>
        <h2 className='text-6xl font-bugaki text-left'>Go<span className='text-red-500'>als</span></h2>
        <p className='text-sm bg-gray-200 p-2 rounded'>We educate and empower individuals in Web3 and blockchain,
        creating a supportive community for skills and knowledge 
        to confidently navigate the evolving blockchain technology.</p>
      </div>
    </div>
  )
}
