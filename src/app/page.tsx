'use client'

import React from 'react';
import { Membership } from '@/components/parts/Membership';
import Image from 'next/image';
import SocialMedia from '@/components/parts/SocialMedia';

const Home = () => {

  return (
        <div className='flex flex-col gap-8 items-center justify-start mt-5'>
            <Image
            className='rounded-full w-56 h-56 lg:w-72 lg:h-72'
            src='/parser-logo.png'
            height={500}
            width={500}
            alt='logo'
            />
            <Membership />
            <SocialMedia />
            <p className="text-sm font-bold text-white text-center">All Rights Reserved. 2024</p>
        </div>
  );
};

export default Home;
