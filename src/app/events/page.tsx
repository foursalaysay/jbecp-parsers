import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import Link from 'next/link';
import React from 'react'

const events = [
  {
    title: "Web Development Workshop",
    date: "2024-11-01",
    time: "10:00 AM",
    venue: "Online",
    link: "https://example.com/web-development-workshop"
  },
  {
    title: "Blockchain Conference",
    date: "2024-11-15",
    time: "09:00 AM",
    venue: "Convention Center, Cityville",
    link: "https://example.com/blockchain-conference"
  },
  {
    title: "AI and Machine Learning Seminar",
    date: "2024-12-05",
    time: "02:00 PM",
    venue: "Tech Hub, Downtown",
    link: "https://example.com/ai-seminar"
  },
  {
    title: "Networking Event",
    date: "2024-12-20",
    time: "06:00 PM",
    venue: "Local Cafe, Main St",
    link: "https://example.com/networking-event"
  }
];


export default function EventPage() {
  return (
        <div className='flex flex-col items-center justify-center px-5'>
            <div className='w-11/12 bg-white h-[480px] rounded-sm px-3 pt-5'>
            <h3 className='font-bugaki text-2xl text-red-500 pb-5'>Ev<span className='text-black'>ents</span></h3>
            <ScrollArea className='w-full h-5/6 p-2'>
                    {events.map((event, index) => (
                      <div key={index} className="flex flex-col gap-2 mb-4 p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h3 className="title text-xl font-semibold text-gray-800">{event.title}</h3>
                        <p className="date-time text-gray-600">{event.date} at {event.time}</p>
                        <p className="venue text-gray-600">{event.venue}</p>
                        <Button asChild className='bg-red-500'>
                            <Link href={event.link}>
                              RSVP
                           </Link>
                        </Button>
                       
                      </div>
                    ))}
                  
              </ScrollArea>
            
              

            </div>
        </div>
   
  )
}
