'use client'

import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"




const Home = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Effect to add/remove scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
        <Image
          src="/website.png"
          className={`w-full h-full ${isScrolled ? 'blur-md' : ''}`}
          height={400}
          width={800}
          alt="jbecp-cover-photo"
        />
    <Dialog>
    <DialogTrigger >Become A Member</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>

    </div>
  );
};

export default Home;
